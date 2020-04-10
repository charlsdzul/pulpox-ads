module.exports = {
  port: process.env.PORT || 3000,
  db: process.env.MONGODB || "mongodb://localhost:27017/pulpox_ads",
  imageMaxSize: 10000000,
  host: "localhost:3000",
};
