"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Os = require("os");
const { remote } = require('electron');
const QTGatePongReplyTime = 1000 * 30;
const testPingTimes = 5;
let mainWindow = null;
const reqtestTimeOut = 1000 * 30;
const port = remote.getCurrentWindow().rendererSidePort;
const version = remote.app.getVersion();
const DEBUG = remote.getCurrentWindow().debug;
const SaveLog = require("./saveLog");
const saveLog = SaveLog.saveLog;
const localServer_1 = require("./localServer");
const server = new localServer_1.default(version, port);
const twitter_1 = require("./twitter");
const twitter = new twitter_1.default(server);
saveLog(`
*************************** QTGate [ ${version} ] server start up on [ ${port} ] *****************************
OS: ${process.platform}, ver: ${Os.release()}, cpus: ${Os.cpus().length}, model: ${Os.cpus()[0].model}
Memory: ${Os.totalmem() / (1024 * 1024)} MB, free memory: ${Math.round(Os.freemem() / (1024 * 1024))} MB
**************************************************************************************************`);
