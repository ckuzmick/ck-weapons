var cp = require("child_process")
var figlet = require('figlet');
var clear = require('clear');
var chalk = require('chalk');
var yargs = require('yargs').argv;

const markets = () => {
    var mySites = [
    "https://mail.google.com/mail/u/0/#inbox",
    "https://www.marketwatch.com/",
    "https://robinhood.com/us/en/"
    ]

    clear();

    console.log(figlet.textSync('opening marketspace'));

    for (let index = 0; index < mySites.length; index++) {
        const element = mySites[index];
            cp.spawnSync('open', [
                "-a", "Google Chrome",
                element    
            ])
    }   
}

module.exports = markets