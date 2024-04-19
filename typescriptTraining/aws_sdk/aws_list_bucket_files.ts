import {S3,config} from 'aws-sdk';

// Set the region 
config.update({region: 'us-east-1'});

// Create S3 service object
const s3 = new S3({apiVersion: '2006-03-01'});

const bucket_name = "test-bucket-cristian-202201171949"

// Create the parameters for calling listObjects
var bucketParams = {
  Bucket : bucket_name,
};

// Call S3 to obtain a list of the objects in the bucket
s3.listObjects(bucketParams, function(err:any, data:any) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
});