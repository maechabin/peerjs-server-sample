import * as express from 'express';
import { ExpressPeerServer } from 'peer';

const app = express();

app.get('/', (req, res, next) => res.send('Hello world!'));

const http = require('http');

const server = http.createServer(app);
const peerServer = ExpressPeerServer(server, {
  path: '/peer',
}) as any;

app.use('/peerjs', peerServer);

server.listen(9000);

// const peerServer = PeerServer({ port: 443, path: '/peer' });
