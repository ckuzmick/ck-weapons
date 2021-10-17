#!/usr/bin/env node

var figlet = require('figlet');
var clear = require('clear');
var chalk = require('chalk');
var yargs = require('yargs').argv;
var cp = require('child_process');
const markets = require('./tools/open/markets')
const code = require('./tools/open/code');
const compress = require('./tools/ffmpeg/compress');

console.log(JSON.stringify(yargs, null, 4))

if (yargs._[0] == "markets") {
    console.log("did you say markets?")
    markets()
}

if (yargs._[0] == "code") {
    console.log("did you say code?")
    code()
}

if (yargs._[0] == "compress") {
    console.log("did you say compress??")
    compress()
}
