// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate5686/providers/Microsoft.Compute/virtualMachines/xplatvm2?$expand=instanceView&api-version=2015-06-15')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"23c33e64-924f-4ba1-8dc3-78c13a310f53\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_A1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"MicrosoftWindowsServerEssentials\",\r\n        \"offer\": \"WindowsServerEssentials\",\r\n        \"sku\": \"WindowsServerEssentials\",\r\n        \"version\": \"1.0.20131018\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Windows\",\r\n        \"name\": \"clid7db3801ff12a518-os-1449163242968\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage13770.blob.core.windows.net/xplatteststoragecnt17324/clid7db3801ff12a518-os-1449163242968.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvm2\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"windowsConfiguration\": {\r\n        \"provisionVMAgent\": true,\r\n        \"enableAutomaticUpdates\": true\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"properties\":{},\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate5686/providers/Microsoft.Network/networkInterfaces/xplattestnic2\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": false\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"instanceView\": {\r\n      \"vmAgent\": {\r\n        \"vmAgentVersion\": \"2.7.1198.735\",\r\n        \"statuses\": [\r\n          {\r\n            \"code\": \"ProvisioningState/succeeded\",\r\n            \"level\": \"Info\",\r\n            \"displayStatus\": \"Ready\",\r\n            \"message\": \"GuestAgent is running and accepting new configurations.\",\r\n            \"time\": \"2015-12-03T17:32:52+00:00\"\r\n          }\r\n        ],\r\n        \"extensionHandlers\": [\r\n          {\r\n            \"type\": \"Microsoft.Compute.BGInfo\",\r\n            \"typeHandlerVersion\": \"2.1\",\r\n            \"status\": {\r\n              \"code\": \"ProvisioningState/succeeded\",\r\n              \"level\": \"Info\",\r\n              \"displayStatus\": \"Ready\",\r\n              \"message\": \"Plugin enabled (name: Microsoft.Compute.BGInfo, version: 2.1).\"\r\n            }\r\n          }\r\n        ]\r\n      },\r\n      \"disks\": [\r\n        {\r\n          \"name\": \"clid7db3801ff12a518-os-1449163242968\",\r\n          \"statuses\": [\r\n            {\r\n              \"code\": \"ProvisioningState/succeeded\",\r\n              \"level\": \"Info\",\r\n              \"displayStatus\": \"Provisioning succeeded\",\r\n              \"time\": \"2015-12-03T17:29:43.2441765+00:00\"\r\n            }\r\n          ]\r\n        }\r\n      ],\r\n      \"extensions\": [\r\n        {\r\n          \"name\": \"BGInfo\",\r\n          \"type\": \"Microsoft.Compute.BGInfo\",\r\n          \"typeHandlerVersion\": \"2.1\",\r\n          \"statuses\": [\r\n            {\r\n              \"code\": \"ProvisioningState/succeeded\",\r\n              \"level\": \"Info\",\r\n              \"displayStatus\": \"Provisioning succeeded\",\r\n              \"message\": \"Plugin enabled (name: Microsoft.Compute.BGInfo, version: 2.1).\"\r\n            }\r\n          ]\r\n        }\r\n      ],\r\n      \"statuses\": [\r\n        {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"Provisioning succeeded\",\r\n          \"time\": \"2015-12-03T17:32:31.1256551+00:00\"\r\n        },\r\n        {\r\n          \"code\": \"PowerState/running\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"VM running\"\r\n        }\r\n      ]\r\n    }\r\n  },\r\n  \"resources\": [\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Compute\",\r\n        \"type\": \"BGInfo\",\r\n        \"typeHandlerVersion\": \"2.1\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate5686/providers/Microsoft.Compute/virtualMachines/xplatvm2/extensions/BGInfo\",\r\n      \"name\": \"BGInfo\",\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"southeastasia\"\r\n    }\r\n  ],\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate5686/providers/Microsoft.Compute/virtualMachines/xplatvm2\",\r\n  \"name\": \"xplatvm2\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {\r\n    \"a\": \"b\",\r\n    \"b\": \"c\",\r\n    \"d\": \"\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '4319',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130917730403641735',
  'x-ms-request-id': 'd307ec92-112e-4783-8487-bc6f8495ffa4',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': 'd81eafb9-e4c7-4984-a52e-99bc20b8599f',
  'x-ms-routing-request-id': 'WESTUS:20151203T173254Z:d81eafb9-e4c7-4984-a52e-99bc20b8599f',
  date: 'Thu, 03 Dec 2015 17:32:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate5686/providers/Microsoft.Compute/virtualMachines/xplatvm2?$expand=instanceView&api-version=2015-06-15')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"23c33e64-924f-4ba1-8dc3-78c13a310f53\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_A1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"MicrosoftWindowsServerEssentials\",\r\n        \"offer\": \"WindowsServerEssentials\",\r\n        \"sku\": \"WindowsServerEssentials\",\r\n        \"version\": \"1.0.20131018\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Windows\",\r\n        \"name\": \"clid7db3801ff12a518-os-1449163242968\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage13770.blob.core.windows.net/xplatteststoragecnt17324/clid7db3801ff12a518-os-1449163242968.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvm2\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"windowsConfiguration\": {\r\n        \"provisionVMAgent\": true,\r\n        \"enableAutomaticUpdates\": true\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"properties\":{},\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate5686/providers/Microsoft.Network/networkInterfaces/xplattestnic2\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": false\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"instanceView\": {\r\n      \"vmAgent\": {\r\n        \"vmAgentVersion\": \"2.7.1198.735\",\r\n        \"statuses\": [\r\n          {\r\n            \"code\": \"ProvisioningState/succeeded\",\r\n            \"level\": \"Info\",\r\n            \"displayStatus\": \"Ready\",\r\n            \"message\": \"GuestAgent is running and accepting new configurations.\",\r\n            \"time\": \"2015-12-03T17:32:52+00:00\"\r\n          }\r\n        ],\r\n        \"extensionHandlers\": [\r\n          {\r\n            \"type\": \"Microsoft.Compute.BGInfo\",\r\n            \"typeHandlerVersion\": \"2.1\",\r\n            \"status\": {\r\n              \"code\": \"ProvisioningState/succeeded\",\r\n              \"level\": \"Info\",\r\n              \"displayStatus\": \"Ready\",\r\n              \"message\": \"Plugin enabled (name: Microsoft.Compute.BGInfo, version: 2.1).\"\r\n            }\r\n          }\r\n        ]\r\n      },\r\n      \"disks\": [\r\n        {\r\n          \"name\": \"clid7db3801ff12a518-os-1449163242968\",\r\n          \"statuses\": [\r\n            {\r\n              \"code\": \"ProvisioningState/succeeded\",\r\n              \"level\": \"Info\",\r\n              \"displayStatus\": \"Provisioning succeeded\",\r\n              \"time\": \"2015-12-03T17:29:43.2441765+00:00\"\r\n            }\r\n          ]\r\n        }\r\n      ],\r\n      \"extensions\": [\r\n        {\r\n          \"name\": \"BGInfo\",\r\n          \"type\": \"Microsoft.Compute.BGInfo\",\r\n          \"typeHandlerVersion\": \"2.1\",\r\n          \"statuses\": [\r\n            {\r\n              \"code\": \"ProvisioningState/succeeded\",\r\n              \"level\": \"Info\",\r\n              \"displayStatus\": \"Provisioning succeeded\",\r\n              \"message\": \"Plugin enabled (name: Microsoft.Compute.BGInfo, version: 2.1).\"\r\n            }\r\n          ]\r\n        }\r\n      ],\r\n      \"statuses\": [\r\n        {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"Provisioning succeeded\",\r\n          \"time\": \"2015-12-03T17:32:31.1256551+00:00\"\r\n        },\r\n        {\r\n          \"code\": \"PowerState/running\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"VM running\"\r\n        }\r\n      ]\r\n    }\r\n  },\r\n  \"resources\": [\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Compute\",\r\n        \"type\": \"BGInfo\",\r\n        \"typeHandlerVersion\": \"2.1\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate5686/providers/Microsoft.Compute/virtualMachines/xplatvm2/extensions/BGInfo\",\r\n      \"name\": \"BGInfo\",\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"southeastasia\"\r\n    }\r\n  ],\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate5686/providers/Microsoft.Compute/virtualMachines/xplatvm2\",\r\n  \"name\": \"xplatvm2\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {\r\n    \"a\": \"b\",\r\n    \"b\": \"c\",\r\n    \"d\": \"\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '4319',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130917730403641735',
  'x-ms-request-id': 'd307ec92-112e-4783-8487-bc6f8495ffa4',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': 'd81eafb9-e4c7-4984-a52e-99bc20b8599f',
  'x-ms-routing-request-id': 'WESTUS:20151203T173254Z:d81eafb9-e4c7-4984-a52e-99bc20b8599f',
  date: 'Thu, 03 Dec 2015 17:32:53 GMT',
  connection: 'close' });
 return result; }]];