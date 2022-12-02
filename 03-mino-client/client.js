var Minio = require('minio')

bucketConfig = {
    endPoint: '47.101.189.236',
    port: 9000,
    useSSL: false,
    accessKey: 'wSOn9oYPeHP9kW1y',
    secretKey: 'UnEBxuMFqfx9xbEbyq4Cb3Olfagq3hml'
}

  // 创建bucket

var minioClient = new Minio.Client(bucketConfig);

// createBucket(minioClient, "photos");v
var obejctNames = getUrlsFromBucket(minioClient, 'videos');
// console.log(obejctNames);

// 获取下载url，默认7天失效
function getUrl(bucketName, fileName) {
    minioClient.presignedUrl('GET', bucketName, fileName, function(err, presignedUrl) {
        if (err) return console.log(err)
        console.log(presignedUrl);
      })
}

function getUrlsFromBucket(minioClient, bucketName) {
    var stream = minioClient.listObjects(bucketName,'', true)
    var names = []
    stream.on('data', function(obj) { 
        names.push(obj.name);
        // var urls = getUrl(bucketName, obj.name)
        // console.log(urls)
        // return urls
    })
    stream.on('error', function(err) { console.log(err) } )
    console.log(names)
}


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