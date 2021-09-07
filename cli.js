#!/usr/bin/env node

var figlet = require('figlet');
var clear = require('clear');
var chalk = require('chalk');
var yargs = require('yargs').argv;
var cp = require('child_process');

var mySites = [
    "https://mail.google.com/mail/u/0/#inbox",
    "https://www.marketwatch.com/",
    "https://robinhood.com/us/en/"
]

clear();
console.log(JSON.stringify(yargs, null, 4))
console.log(figlet.textSync('opening markets'));

for (let index = 0; index < mySites.length; index++) {
    const element = mySites[index];
    cp.spawnSync('open', [
        "-a", "Google Chrome",
        element    
    ])
}

console.log("firing runitbreh")
console.log(`sizeis${yargs.size}`)