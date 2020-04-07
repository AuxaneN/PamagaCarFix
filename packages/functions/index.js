// if you want to use express version then comment the uncomment code block

const functions = require('firebase-functions');
const express = require('express');
const next = require('next');

const app = express();

app.get('*', async (req, res) => {
  const nextApp = next({
    conf: {
      distDir: 'next',
      publicRuntimeConfig: {
        staticFolder: '/public/',
      },
    },
  });
  await nextApp.prepare();
  const handle = nextApp.getRequestHandler();
  return handle(req, res);
});

exports.next = functions.https.onRequest(app);
