// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '5e7d1bb6-4953-44fe-8a54-43fbdb53b989',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Mobilytics Test1',
    registeredProviders: ['website', 'mobileservice'],
    registeredResourceNamespaces: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/mobileservices/mobileservices/clitestnode2625/pushsettings', '*')
  .reply(200, "{\"gcmCredentials\":{\"apiKey\":\"AIzaSyCLQM-YbdtwFx32h4Dp8PJ-3J_7PhxUxrc\",\"endpoint\":\"https:\\/\\/android.googleapis.com\\/gcm\\/send\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '128',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': 'd5fe374c7e2688dd9b84986465635ee4',
  date: 'Wed, 08 Apr 2015 01:07:34 GMT' });
 return result; }]];