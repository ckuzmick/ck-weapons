var cp = require("child_process")
var figlet = require('figlet');
var clear = require('clear');
var chalk = require('chalk');
var yargs = require('yargs').argv;

const code = () => {
    var mySites = [
    "https://www.npmjs.com/",
    "http://localhost:8000/",
    "https://github.com/ckuzmick"
    ]

    clear();

    console.log(figlet.textSync('opening codespace'));

    cp.spawnSync('open', [
        "-a", "Firefox Developer Edition",
    ])

    for (let index = 0; index < mySites.length; index++) {
        const element = mySites[index];
            cp.spawnSync('/Applications/Firefox Developer Edition.app/Contents/MacOS/firefox', [
                "-new-tab",
                element
            ])
    }

    const fs = require("fs")

    try {
    if (fs.existsSync(`/Users/ck/Development/${yargs._[1]}`)) {
      console.log("Directory exists. Working.")
      cp.spawnSync('code', [
        `/Users/ck/Development/${yargs._[1]}`
      ])
     } else {
       console.log(chalk.red(`ERROR: /Users/ck/Development/${yargs._[1]} does not exist`))
     }
    } catch(e) {
       console.log(chalk.red("An error occurred."))
    }
}

module.exports = code