var harp = require('harp');

console.log(__dirname);

harp.server(__dirname, {
  port: process.env.PORT || 3000
});