import {S3,config} from 'aws-sdk';

/**
 * Bucket creation
 */
// Set the region
config.update({region: 'us-east-1'});

// Create S3 service object
const s3 = new S3({apiVersion: '2006-03-01'});

// Create the parameters for calling createBucket
const bucketParams = {
  Bucket : "test-bucket-cristian-202201171949"//process.argv[2]
};

// call S3 to create the bucket
s3.createBucket(bucketParams, function(err:any, data:any) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.Location);
  }
});
