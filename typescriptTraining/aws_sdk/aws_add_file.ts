import {S3,config} from 'aws-sdk';
import {createReadStream} from "fs"
import {basename} from "path"

// Set the region 
config.update({region: 'us-east-1'});

// Create S3 service object
const s3 = new S3({apiVersion: '2006-03-01'});

const bucket_name = "test-bucket-cristian-202201171949"
const filename = "/home/cristian/Downloads/unnamed.jpg"

const file = filename//process.argv[3];

// Configure the file stream and obtain the upload parameters
const fileStream = createReadStream(file);
fileStream.on('error', function(err) {
  console.log('File Error', err);
});

// call S3 to retrieve upload file to specified bucket
var uploadParams = {Bucket: bucket_name/*process.argv[2]*/, Key: '', Body: fileStream};

uploadParams.Key = basename(file);

// call S3 to retrieve upload file to specified bucket
s3.upload (uploadParams, function (err:any, data:any) {
  if (err) {
    console.log("Error", err);
  } if (data) {
    console.log("Upload Success", data.Location);
  }
});