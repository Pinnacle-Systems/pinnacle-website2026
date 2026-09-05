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

  // Find all cn(theme.p, "...") and strip text sizing overrides
  // We want to remove text-xs, text-sm, text-base, text-md, text-lg, text-xl, text-2xl, text-[something]
  // including responsive prefixes.
  newContent = newContent.replace(/cn\(\s*theme\.p\s*,\s*["']([^"']*)["']\s*\)/g, (match, p1) => {
    let newClasses = p1.replace(/\b(sm:|md:|lg:|xl:|2xl:)?text-(xs|sm|base|md|lg|xl|2xl|3xl|4xl|5xl|6xl)\b/g, '')
                       .replace(/\b(sm:|md:|lg:|xl:|2xl:)?text-\[\d+px\]\b/g, '') // strip arbitrary sizes
                       .replace(/\s+/g, ' ').trim();
                       
    if (newClasses) {
      return `cn(theme.p, "${newClasses}")`;
    } else {
      return 'theme.p';
    }
  });

  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log('Updated:', file);
    changedFiles++;
  }
});

console.log('Total files changed:', changedFiles);
