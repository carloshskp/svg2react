import { argv, cwd } from 'node:process';
import { readdirSync, statSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import generateSVGComponent from './generateComponent.js';

(() => {
  const [,, inputFolder, outputFolder = path.resolve(cwd(), 'output')] = argv;
  const folderData = readdirSync(inputFolder);

  const files = folderData.filter(item => {
    return statSync(path.resolve(inputFolder, item)).isFile() && item.indexOf('.svg') !== -1;
  });

  console.log(`[START]: ${files.length} svg files founded.`);

  files.forEach((file, index) => {
    const svg = (readFileSync(path.resolve(inputFolder, file))).toString();
    const name = file.replace('.svg', '.js');

    console.log(`[${index + 1}](PROCESSING): "${file}" to "${name}"`);

    const content = generateSVGComponent(svg);
    const outputFile = path.resolve(outputFolder, name);

    writeFileSync(outputFile, content, {flags: 'a'});

    console.log(`[${index + 1}](SUCCESS): "${file}" converted to "${name}"`);
  });

  console.log(`[FINISHED]: Check output in "${outputFolder}"`);
})();
