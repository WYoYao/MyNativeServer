var main = require('./main.js');

main.Post('_FlightSearch', { "BaseRequest": { "AppVersion": null, "SourceWay": 20, "LanguageVersion": 0, "TerminalExt": null, "RegistrationId": null, "IMEI": null, "OpEmployeeID": 0, "Token": null, "DataCommission": 0, "DeptID": 0, "SourceCompanyID": 0, "ActID": null }, "Oapt": "BJS", "OaptType": 1, "Dapt": "SHA", "DaptType": 1, "Odtm": "2016-09-01", "TripType": 1, "IsBackCabins": false }, data => {
  console.log(data);
});

//# sourceMappingURL=test-compiled.js.map