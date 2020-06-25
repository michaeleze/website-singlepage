import * as functions from 'firebase-functions';
const express = require('express');
const cors = require('cors');

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript
const app = express();

app.use(cors({ origin: true }));

app.get('/', (req: any, res: any) => {
 return res.status(200).json({ data: 'Hello World!' });
});

app.get('/work', (req: any, res: any) => {
    return res.status(200).json({ data: 'Data for works' });
});

export const server = functions.https.onRequest(app);
