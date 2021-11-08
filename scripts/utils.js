exports.moment = require('moment');
exports.math = require('mathjs').evaluate;
exports.kamus = async function(a) {
  const { loadImage, createCanvas } = require('canvas');
  const image = await loadImage(`https://image.thum.io/get/width/1920/crop/675/noanimate/https://prpm.dbp.gov.my/cari/?keyword=${a}`);
  const canvas = createCanvas(image.width, image.height);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(image, 0, 0, image.width, image.height);
  client.channels.cache.get('892254604077694987').send({ files: [ new discord.MessageAttachment(canvas.toBuffer("image/png"), 'img.png') ] });
}
