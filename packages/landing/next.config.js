require('dotenv').config();
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['reusecore', 'common']);
const withOptimizedImages = require('next-optimized-images');
const withFonts = require('next-fonts');
const withCSS = require('@zeit/next-css');

module.exports = {
  env: {
    SMTP_HOST:process.env.SMTP_HOST,
    SMTP_PORT:process.env.SMTP_PORT,
    SMTP_SECURE:process.env.SMTP_SECURE,
    SMTP_EMAIL:process.env.SMTP_EMAIL,
    SMTP_PASS: process.env.SMTP_PASS,
    RECEIVER_EMAIL: process.env.RECEIVER_EMAIL,
    CUSTOM_PORT: process.env.CUSTOM_PORT,
    FIREBASE_API : process.env.FIREBASE_API
  },
}
module.exports = withPlugins(
  [
    [withTM],
    [
      withOptimizedImages,
      {
        mozjpeg: {
          quality: 90,
        },
        webp: {
          preset: 'default',
          quality: 90,
        },
      },
    ],
    withFonts,
    withCSS,
  ],
  {
    // distDir: '../../dist/functions/next',
    distDir: 'build'
  }
);
