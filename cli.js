#!/usr/bin/env node

var figlet = require('figlet');
var clear = require('clear');
var chalk = require('chalk');
var yargs = require('yargs').argv;
var cp = require('child_process');
const markets = require('./tools/open/markets')
const code = require('./tools/open/code');
const movie = require('./tools/open/movie');
const compress = require('./tools/ffmpeg/compress');
const { DH_CHECK_P_NOT_SAFE_PRIME } = require('constants');

// console.log(JSON.stringify(yargs, null, 4))

if (yargs._[0] == "markets") {
    console.log("did you say markets?")
    markets()
}

if (yargs._[0] == "code") {
    console.log("did you say code?")
    code()
}

if (yargs._[0] == "compress") {
    console.log("did you say compress?")
    compress()
}

if (yargs._[0] == "movie") {
    console.log("did you say movie?")
    movie()
}