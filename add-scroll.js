const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('./src');

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let originalContent = content;

  // Replace <Link ... href="?contact=true" ...> with <Link ... href="?contact=true" scroll={false} ...>
  content = content.replace(/<Link([^>]*?)href="\?contact=true"([^>]*?)>/g, (match, p1, p2) => {
    if (match.includes('scroll={false}')) return match;
    return `<Link${p1}href="?contact=true" scroll={false}${p2}>`;
  });

  if (content !== originalContent) {
    fs.writeFileSync(f, content, 'utf8');
    console.log('Updated scroll={false} in', f);
  }
});
