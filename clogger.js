(() => {
    'use strict';

    const moment = require('moment');

    module.exports = {
        log: log,
        error: error
    };

    //////////
    
    function log(message) {
        console.log(`[${moment().format('DD/MM/YYYY hh:mm:ss.SSS')}] ${message}`);
    }

    function error(message) {
        console.error(`[${moment().format('DD/MM/YYYY hh:mm:ss.SSS')}] ${message}`);
    }
})();