import { S3, config } from 'aws-sdk';
import {writeFile} from "fs"

// Set the region 
config.update({ region: 'us-east-1' });

// Create S3 service object
const s3 = new S3({ apiVersion: '2006-03-01' });

const myBucket = "test-bucket-cristian-202201171949"
const myKey = "unnamed.jpg"
const signedUrlExpireSeconds = 60 * 5

const url = s3.getSignedUrl('getObject', {
    Bucket: myBucket,
    Key: myKey,
    Expires: signedUrlExpireSeconds
})

console.log(url)
