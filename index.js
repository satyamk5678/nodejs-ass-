function getNameFromCommandLine() {
    let data=process.argv;
    let name = data[data.length-1]
    return name
    // Write you code here, name should be taken as args in process.argv
}

function getNameFromEnv() {
    process.env.name='Satyam';
    return (process.env.name);
    // Write your code here
}

function getNameFromReadLine() {
    const readline=require('readline');
    readline.createInterface({
        input:process.stdin,
        output: process.stdout
    })
    // Write your code here
}

module.exports = {
    getNameFromCommandLine,
    getNameFromEnv,
    getNameFromReadLine
}