var Minio = require('minio')
const dotenv = require('dotenv')

dotenv.config({ path: '.env.local' })

bucketConfig = {
    // endPoint: '47.101.189.236',
    endPoint: 'img.vanguo.tech',
    // port: ,
    // useSSL: false,
    accessKey: process.env.ACCESSKEY,
    secretKey: process.env.SECRETKEY
}


var minioClient = new Minio.Client(bucketConfig);



createBucket(minioClient, "books")

// getUrlsFromBucket(minioClient, 'books');

// listBuckets(minioClient);

// getPolicy(minioClient)

// function getPolicy(minioClient) {
//     minioClient.getBucketPolicy('books', 'img-', function(err, policy) {
//         if (err) throw err
//         console.log(`Bucket policy: ${policy}`)
//     })
// }




// testBook = "你不知道的JavaScript（下卷）++.pdf"

// var res = getUrl(minioClient, "books", testBook);
// // console.log(res)


// // 获取下载url，默认7天失效
// function getUrl(minioClient, bucketName, fileName) {
//     var promise = minioClient.presignedUrl('GET', bucketName, fileName)
//     var url;
//     var res;
//     promise.then(function res(result) {
//         console.log("in the call back function:", result)
//         url = result
//         // console.log(url)
//     });
//     console.log(url)
//     // test(res);
// }

// function test(fn) {
//     fn();
// }


//获取桶内所有文件的url
// function getUrlsFromBucket(minioClient, bucketName) {
//     var stream = minioClient.listObjects(bucketName,'', true)
//     var names = []
//     var res = stream.on('data')

//     stream.on('error', function(err) { console.log(err) } )
// }


function createBucket(minioClient, bucketName) {
    minioClient.makeBucket(bucketName, 'cn-north-1', function(err) {
        if (err) return console.log('Error creating bucket.', err)
        console.log('Bucket created successfully in "cn-north-1".')
    })
    console.log("we have these buckets:")
    listBuckets(minioClient)
}

function listBuckets(minioClient) {
    minioClient.listBuckets(function(err, buckets) {
        if (err) return console.log(err)
        console.log('buckets :', buckets)
      })
}

function getObjectToLocalFile(minioClient) {
    var size = 0
    minioClient.fGetObject('mybucket', 'photo.jpg', '/tmp/photo.jpg', function(err) {
      if (err) {
        return console.log(err)
      }
      console.log('success')
    })
}


// 判断是否存在桶
// minioClient.bucketExists('test', function(err, exists) {
//     if (err) {
//       return console.log(err)
//     }
//     if (exists) {
//         console.log("Bucket exists.")
//     }
// });