import { copyFileSync, mkdirSync, writeFileSync } from 'node:fs';

mkdirSync('web', { recursive: true });
copyFileSync('index.html', 'web/index.html');
writeFileSync('web/.capacitor-build', new Date().toISOString() + '\n');

console.log('Web preparado em web/index.html');
