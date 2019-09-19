const server = require('./api/server.js');

const PORT = process.env.PORT || 4321;
server.listen(PORT, () => {
  console.log(`As Dr. Frankenstein once said, "It Lives!"`);
});
