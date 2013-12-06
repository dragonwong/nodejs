var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');

var handle = {};

handle['/'] = requestHandlers.fun1;
handle['/fun1'] = requestHandlers.fun1;
handle['/fun2'] = requestHandlers.fun2;

server.start(router.route, handle);