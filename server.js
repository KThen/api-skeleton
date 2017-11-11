(() => {
    'use strict';

    const express = require('express');
    const app = express();
    const clogger = require('./clogger');

    //////////

    let port = -1;
    
    if (!init()) return;

    const server = app.listen(port, () => {
        clogger.log(`Server started and listening on port: ${port}`);
    });

    module.exports = server;

    //////////

    function init() {
        let success = true;

        for (let i = 2; i < process.argv.length; ++i) {
            switch (process.argv[i]) {
                case '--port':
                    let tmpPort = process.argv[i + 1];
                    if (!!tmpPort) { port = parseInt(tmpPort) || -1; ++i; }
                    break;
            }
        }

        if (port === -1) {
            clogger.log(`Port not set. Please set the port using the --port <number> argument.`);
            success = false;
        }

        return success;
    }
})();