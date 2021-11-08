var cp = require("child_process")
var figlet = require('figlet');
var clear = require('clear');
var chalk = require('chalk');
var yargs = require('yargs').argv;

const movie = () => {
    var mySites = [
    "https://mail.google.com/mail/u/0/#inbox"
    ]

    clear()

    console.log(figlet.textSync('opening moviespace'));

    for (let index = 0; index < mySites.length; index++) {
        const element = mySites[index];
            cp.spawnSync('open', [
                "-a", "Google Chrome",
                element    
            ])
    }   

    const fs = require("fs")

    try {
    if (fs.existsSync(`/Users/ck/Development/_movie-scripts`)) {
      console.log("Directory exists. Working.")
      cp.spawnSync('code', [
        `/Users/ck/Development/_movie-scripts`
      ])
     } else {
       console.log(chalk.red(`ERROR: /Users/ck/Development/_movie-scripts does not exist`))
     }
    } catch(e) {
       console.log(chalk.red("An error occurred."))
    }
}

module.exports = movie