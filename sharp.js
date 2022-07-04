// eslint-disable-next-line import/no-extraneous-dependencies
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images/heros/original');
const destination = path.resolve(__dirname, 'src/public/images/heros');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

fs.readdirSync(target)
  .forEach((image) => {
    sharp(`${target}/${image}`)
      .resize(1200)
      .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
        .slice(0, -1)
        .join('.')}-1200.jpg`));

    sharp(`${target}/${image}`)
      .resize(1000)
      .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
        .slice(0, -1)
        .join('.')}-1000.jpg`));

    sharp(`${target}/${image}`)
      .resize(750)
      .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
        .slice(0, -1)
        .join('.')}-750.jpg`));

    sharp(`${target}/${image}`)
      .resize(400)
      .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
        .slice(0, -1)
        .join('.')}-400.jpg`));
  });
