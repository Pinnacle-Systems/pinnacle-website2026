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

  if (!f.includes('Header.tsx') && !f.includes('Footer.tsx')) {
    content = content.replace(/href=[\"']\/contact[\"']/g, 'href="?contact=true"');
  }

  // Also replace any /under-construction in specific components
  if (
    f.includes('Hero.tsx') || 
    f.includes('Header.tsx') || 
    f.includes('CtaSection.tsx') ||
    f.includes('ContactSection.tsx') ||
    f.includes('PricingSection.tsx')
  ) {
    content = content.replace(/href=[\"']\/under-construction[\"']/g, 'href="?contact=true"');
  }

  if (content !== originalContent) {
    fs.writeFileSync(f, content, 'utf8');
    console.log('Updated', f);
  }
});
