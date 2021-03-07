module.exports = {
  target: "serverless",
  images: {
    loader: "cloudinary",
    path: "https://res.cloudinary.com/dqf0nsqsh/image/upload/",
    imageSizes: [16, 32, 48, 64],
    deviceSizes: [96, 128, 256, 384, 512, 640, 750, 828, 1080, 1200, 1920],
  },
};
