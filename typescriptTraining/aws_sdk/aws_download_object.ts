import { S3, config } from 'aws-sdk';
import { writeFile } from "fs"

// Set the region 
config.update({ region: 'us-east-1' });

// Create S3 service object
const s3 = new S3({ apiVersion: '2006-03-01' });

const bucket_name = "test-bucket-cristian-202201171949"
const file_name = "unnamed.jpg"

var bucketParams = {
    Bucket: bucket_name,
    Key: file_name
};

// Call S3 to obtain a list of the objects in the bucket
s3.getObject(bucketParams, function (err: any, data: any) {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("Loaded " + data.ContentLength + " bytes");
        writeFile("/home/cristian/Desktop/unnamed.jpg", data.Body, function (err) {
            if (err) return console.log(err);
        });
    }
});