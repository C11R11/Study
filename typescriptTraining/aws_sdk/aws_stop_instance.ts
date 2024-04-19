import { config, EC2 } from 'aws-sdk';

// Set the region 
config.update({ region: 'us-east-1' });

// Create S3 service object
const ec2 = new EC2({ apiVersion: '2016-11-15' });

var params = {
  InstanceIds: ['i-0175bab06bd97e5e9'],
  DryRun: true
};

// Call EC2 to stop the selected instances
ec2.stopInstances(params, function (err, data) {
  if (err && err.code === 'DryRunOperation') {
    params.DryRun = false;
    ec2.stopInstances(params, function (err, data) {
      if (err) {
        console.log("Error", err);
      } else if (data) {
        console.log("Success", data.StoppingInstances);
      }
    });
  } else {
    console.log("You don't have permission to stop instances");
  }
});