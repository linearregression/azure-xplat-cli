// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '4004a9fd-d58e-48dc-aeb2-4a4aec58606f',
    name: 'Free Trial',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '1273adef-00a3-4086-a51a-dbcce1857d36',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/providers/Microsoft.Authorization/providerOperations/InvalidOperation?api-version=2015-07-01-preview&$expand=resourceTypes')
  .reply(404, "{\"error\":{\"code\":\"ProviderNotFound\",\"message\":\"Provider InvalidOperation not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '86',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '7c480a87-8032-462b-aa9b-39bd7ff118f2',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_1',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productionb; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-tenant-reads': '14994',
  'x-ms-correlation-request-id': 'a303883f-f473-41ab-ace9-edc680706178',
  'x-ms-routing-request-id': 'WESTUS:20150821T184348Z:a303883f-f473-41ab-ace9-edc680706178',
  date: 'Fri, 21 Aug 2015 18:43:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/providers/Microsoft.Authorization/providerOperations/InvalidOperation?api-version=2015-07-01-preview&$expand=resourceTypes')
  .reply(404, "{\"error\":{\"code\":\"ProviderNotFound\",\"message\":\"Provider InvalidOperation not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '86',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '7c480a87-8032-462b-aa9b-39bd7ff118f2',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_1',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productionb; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-tenant-reads': '14994',
  'x-ms-correlation-request-id': 'a303883f-f473-41ab-ace9-edc680706178',
  'x-ms-routing-request-id': 'WESTUS:20150821T184348Z:a303883f-f473-41ab-ace9-edc680706178',
  date: 'Fri, 21 Aug 2015 18:43:48 GMT',
  connection: 'close' });
 return result; }]];