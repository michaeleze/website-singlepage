/**
 * This is a serverless server created with by @MichaelCityboy using firebase
 * It is kept along side with the app package as a prove that i created it :)
 * it will be moved to it's own package and repo later
 */
import * as functions from 'firebase-functions';
const express = require('express');
import homeController from './controller/home';

const app = express();

app.get('/', homeController);

export const server = functions.https.onRequest(app);
