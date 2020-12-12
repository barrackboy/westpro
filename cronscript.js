var cron = require('node-cron');

//execute every 1 min
cron.schedule('*/1 * * * *', function () {
    var shell = require('./childhelper.js');

    var commandList = [
        "node app.js"
    ]

    shell.series(commandList, function (err) {
        //    console.log('execute many commands in a row'); 
        console.log('done')
    });
});