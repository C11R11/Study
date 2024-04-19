import {config, EC2, SharedIniFileCredentials} from 'aws-sdk';

// Set the region 
config.update({region: 'us-east-1'});

var credentials = new SharedIniFileCredentials({profile: 'default'});
config.credentials = credentials;

// Create S3 service object
const ec2 = new EC2({apiVersion: '2016-11-15'});

var params = {
 // InstanceIds: ['i-0175bab06bd97e5e9'],
  DryRun: false
};

// Call EC2 to retrieve policy for selected bucket
ec2.describeInstances(params, function(err, data) {
  if (err) {
    console.log("Error", err.stack);
  } else {
    let instances:{}|undefined
    if(data.Reservations)
    {
      instances = data.Reservations[0].Instances
    }
    console.log("Success", instances)//JSON.stringify(data));
  }
});