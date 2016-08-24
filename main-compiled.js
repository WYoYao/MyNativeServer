const url = require('url');
const dns = require('dns');
const http = require('http');
const link = require('./link.js');

let address = 'http://172.16.9.10/FlightApi/FlightApi.aspx';

const Post = function (MethodName, req, callback) {

    //将请求的方法 和 请求的内容 保存的到基本的请求体里面
    let BacsRequset = {
        ZPack: new Buffer(JSON.stringify(req)).toJSON().data,
        MethodName: MethodName
    };

    //获取对应的请求参数
    let uri = url.parse(address);
    console.log(uri);

    //请求头配置文件
    let options = {
        host: uri.host,
        path: uri.path,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        Accept: 'application/json, text/javascript, */*; q=0.01'
    };

    let httpClient = http.request(options, function (res) {
        let result = [];
        res.on('data', function (res) {
            result.push(res.toString('utf8'));
        });

        res.on('end', function () {
            var data = JSON.parse(result.join(""));
            callback(new Buffer(data.ZPack, 'base64').toString('utf8'));
        });
    });

    httpClient.write(new Buffer(JSON.stringify(BacsRequset)));
    httpClient.end();
};
//
module.exports.Post = Post;

//# sourceMappingURL=main-compiled.js.map