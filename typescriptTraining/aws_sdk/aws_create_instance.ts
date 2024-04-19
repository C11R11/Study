import { config, EC2 } from 'aws-sdk';

// Set the region 
config.update({ region: 'us-east-1' });

// Create S3 service object
const ec2 = new EC2({ apiVersion: '2016-11-15' });

// AMI is amzn-ami-2011.09.1.x86_64-ebs
var instanceParams = {
  ImageId: 'ami-06f11f096c0fa6098',
  InstanceType: 't2.micro',
  KeyName: 'cristianrodriguezcanto2key',
  MinCount: 1,
  MaxCount: 1,
};

// Create a promise on an EC2 service object
var instancePromise = new EC2({ apiVersion: '2016-11-15' }).runInstances(instanceParams).promise();

// Handle promise's fulfilled/rejected states
instancePromise.then(
  function (data) {
    if (data.Instances) {
      console.log(data);
      var instanceId = data.Instances[0].InstanceId;
    }
    console.log("Created instance", instanceId);
    /*     // Add tags to the instance
        tagParams = {Resources: [instanceId], Tags: [
           {
              Key: 'Name',
              Value: 'SDK Sample'
           }
        ]};
        // Create a promise on an EC2 service object
        var tagPromise = new AWS.EC2({apiVersion: '2016-11-15'}).createTags(tagParams).promise();
        // Handle promise's fulfilled/rejected states
        tagPromise.then(
          function(data) {
            console.log("Instance tagged");
          }).catch(
            function(err) {
            console.error(err, err.stack);
          }); */
  }).catch(
    function (err) {
      console.error(err, err.stack);
    });