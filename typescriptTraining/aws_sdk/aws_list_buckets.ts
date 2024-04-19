import {S3,config} from 'aws-sdk';

// Set the region 
config.update({region: 'us-east-1'});

// Create S3 service object
const s3 = new S3({apiVersion: '2006-03-01'});

s3.listBuckets(function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data.Buckets);
    }
  });