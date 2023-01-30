
import {ProcessPointCloudClient} from "../gen-proto/PointcloudServiceClientPb";
import { Point, PointCloud, VoxelGridPointCloud} from "../gen-proto/pointcloud_pb";

const pcClient = new ProcessPointCloudClient("http://" + "0.0.0.0" + ":8080");

// function addOne() {
//   return new Promise<Point>((resolve, reject) => {
//     const request = new Point();
//     request.setX(1);
//     request.setY(1);
//     request.setZ(1);

//     pcClient
//       .addOneToPoint(request, null)
//       .then((message) => resolve(message))
//       .catch((error) => reject(error));
//   });
// }

// export async function runPointCloudCpp() {
//   const result = await addOne()
//   console.log(result.getX())
//   console.log(result.getY())
//   console.log(result.getZ())
// }

// console.log('Calling...')
// runPointCloudCpp()

// Test Voxel
var voxelInputRequest = new VoxelGridPointCloud();
var pointCloud = new PointCloud();

for (let i = 0; i < 1000000; i++) {
  var pt = new Point()
  pt.setX(Math.random() * 5)
  pt.setY(Math.random() * 5)
  pt.setZ(Math.random() * 5)
  pointCloud.addPoints(pt)
}

console.log('Input cloud size', pointCloud.getPointsList().length)

let start = performance.now()
// console.log(pointCloud)

voxelInputRequest.setPointcloud(pointCloud)
voxelInputRequest.setResolution(0.1)
// voxelInput.addPoints(1)

console.log('calling filter...')
pcClient.voxelGrid(voxelInputRequest, null).then((replyCloud) => {
  console.log('RPC call took: ', performance.now() - start, ' ms.')
  console.log('Filtered size: ', replyCloud.getPointsList().length)

})

