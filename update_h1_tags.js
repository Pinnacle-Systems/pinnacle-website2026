const fs = require('fs');
const path = require('path');

const srcDir = path.join('f:', 'karthick', 'Pinnaclewebsite', 'src');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    let fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(fullPath));
    } else {
      if (fullPath.endsWith('.tsx') || fullPath.endsWith('.jsx')) {
        results.push(fullPath);
      }
    }
  });
  return results;
}

const files = walk(srcDir);
let changedFiles = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content;

  // 1. Find all `className={cn(theme.h1, "something")}` 
  // Strip out text sizing (e.g., text-4xl, md:text-5xl, lg:text-6xl)
  newContent = newContent.replace(/cn\(\s*theme\.h1\s*,\s*["']([^"']*)["']\s*\)/g, (match, p1) => {
    let newClasses = p1.replace(/\b(sm:|md:|lg:|xl:|2xl:)?text-\d+xl\b/g, '')
                       .replace(/\bmb-\d+\b/g, '') // remove margin overrides too
                       .replace(/\s+/g, ' ').trim();
                       
    // If the file is one of the dark pages (which we can guess by looking for bg-[#0b132a] text-white in <main>),
    // we should make sure text-white is added because we removed it from theme.js
    if (content.includes('bg-[#0b132a]') && !newClasses.includes('text-white') && !content.includes('about-us')) {
      newClasses = (newClasses + ' text-white').trim();
    }
    
    if (newClasses) {
      return `cn(theme.h1, "${newClasses}")`;
    } else {
      return 'theme.h1';
    }
  });

  // 2. Some tags might just be `className={theme.h1}`. If they are in dark pages, they might need text-white now.
  if (content.includes('bg-[#0b132a]') || content.includes('bg-navy-900')) {
     newContent = newContent.replace(/className=\{theme\.h1\}/g, 'className={cn(theme.h1, "text-white")}');
  }

  // 3. For good measure, if any old pages had hardcoded <h1 className="text-4xl...">, replace them with theme.h1
  // We look for <h1 className="text-4xl... and NOT theme.h1
  newContent = newContent.replace(/<h1\s+className=["']text-[^"']+["']/g, '<h1 className={theme.h1}');

  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log('Updated:', file);
    changedFiles++;
  }
});

console.log('Total files changed:', changedFiles);
