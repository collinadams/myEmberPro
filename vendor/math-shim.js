// global define:true
define('math', [], function() { 
   
    return {
        default: Math,
        PI: Math.PI,
    };
});

const myModule = require('math');