import { S3, config } from 'aws-sdk';
import express from 'express';

config.update({ region: 'us-east-1' });
const s3 = new S3({ apiVersion: '2006-03-01' });

const PORT = 8000;
const app = express();

app.get('/', (req: any, res: any) => res.send('Express + TypeScript Server'));

app.get('/api/listBuckets', (req: any, res: any) => {

    // Set the region 
    config.update({ region: 'us-east-1' });

    // Create S3 service object
    const s3 = new S3({ apiVersion: '2006-03-01' });

    s3.listBuckets((response: any, data: any) => {
        console.log(response);
        console.log(data);
        res.json(data);
    });
})

app.get('/api/listObjects', (req: any, res: any) => {

    // Set the region 
    config.update({ region: 'us-east-1' });

    // Create S3 service object
    const s3 = new S3({ apiVersion: '2006-03-01' });

    const bucket_name = "test-bucket-cristian-202201171949"

    // Create the parameters for calling listObjects
    var bucketParams = {
        Bucket: bucket_name,
    };

    // Call S3 to obtain a list of the objects in the bucket
    s3.listObjects(bucketParams, function (err: any, data: any) {
        if (err) {
            console.log("Error", err);
            res.json(
                {
                    "Error": err
                }
            );
        } else {
            console.log("Success", data);
            res.json(data);
        }
    });
})

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
