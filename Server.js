
var dns = require("dns");
var http=require('http');
var url=require('url');
var querystring = require('querystring');

var httpServer;

//请求接口地址
var addressUrl='http://172.16.9.10/FlightApi/FlightApi.aspx?help';

var Code={"BaseRequest":{"AppVersion":null,"SourceWay":20,"LanguageVersion":0,"TerminalExt":null,"RegistrationId":null,"IMEI":null,"OpEmployeeID":0,"Token":null,"DataCommission":0,"DeptID":0,"SourceCompanyID":0,"ActID":null},"Oapt":"BJS","OaptType":1,"Dapt":"SHA","DaptType":1,"Odtm":"2016-09-01","TripType":1,"IsBackCabins":false};

//请求参数
var reqObj={
    ZPack:new Buffer(JSON.stringify(Code)).toJSON().data,
    MethodName:'_FlightSearch'
};


//请求指定的参数   请求头
var options={
    host:'172.16.9.10',       //请求的地址
    path:'/FlightApi/FlightApi.aspx',
    method:'POST',          //请求方式
    headers:{
        'Content-Type':'application/json',
    },
    Accept:'application/json, text/javascript, */*; q=0.01'
};


var httpreq = http.request(options,function(res) {
    var result=[];
    res.on("data",function(res){
        result.push(res.toString('utf8'));
        //console.log(arguments[0].toString());
        //var data=JSON.parse(arguments[0].toString());
        //console.log(data);
        //console.log(new Buffer(data.ZPack,'base64').toString('utf8'));
    });
    res.on('end',function(){
        console.log(result.join(""));
        var data=JSON.parse(result.join(""));
        console.log(new Buffer(data.ZPack,'base64').toString('utf8'));
    });
});

httpreq.write(new Buffer(JSON.stringify(reqObj)));
httpreq.end();