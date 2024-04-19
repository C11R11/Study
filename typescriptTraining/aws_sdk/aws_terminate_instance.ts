import { config, EC2 } from 'aws-sdk';

// Set the region 
config.update({ region: 'us-east-1' });

// Create S3 service object
const ec2 = new EC2({ apiVersion: '2016-11-15' });

// setup params
const params = {
  InstanceIds: [
    'i-036648896d6804245'    
  ]
};

ec2.terminateInstances(params, function(err, data) {
  if (err) {
    console.log(err, err.stack); // an error occurred
  } else {
    console.log(data);           // successful response
  }  
});