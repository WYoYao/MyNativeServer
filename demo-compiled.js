var dns = require('dns');

dns.lookup('www.github.com', function onLookup(err, address, family) {
    console.log('ip 地址:', address);
    dns.reverse(address, function (err, hostnames) {
        if (err) {
            console.log(err.stack);
        }

        console.log('反向解析 ' + address + ': ' + JSON.stringify(hostnames));
    });
});

//http://172.16.9.10/FlightApi/FlightApi.aspx?help
dns.lookup('172.16.9.10', (err, address, fmaily) => {
    console.log('demo:' + address);
});

//# sourceMappingURL=demo-compiled.js.map