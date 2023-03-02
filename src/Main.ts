
import {ProcessPointCloudClient} from "../gen-proto/PointcloudServiceClientPb";
import { Point, PointCloud, VoxelGridPointCloud} from "../gen-proto/pointcloud_pb";

const pcClient = new ProcessPointCloudClient("http://" + "0.0.0.0" + ":5000");

// Test Voxel
var voxelInputRequest = new VoxelGridPointCloud();
var pointCloud = new PointCloud();

for (let i = 0; i < 1000; i++) {
  var pt = new Point()
  pt.setX(Math.random() * 5)
  pt.setY(Math.random() * 5)
  pt.setZ(Math.random() * 5)
  pointCloud.addPoints(pt)
}

console.log('Input cloud size', pointCloud.getPointsList().length)

let start = performance.now()

voxelInputRequest.setPointcloud(pointCloud)
voxelInputRequest.setResolution(0.01)

console.log('calling voxelGrid...')
pcClient.voxelGrid(voxelInputRequest, null).then((replyCloud) => {
  console.log('RPC call took: ', performance.now() - start, ' ms.')
  console.log('Filtered size: ', replyCloud.getPointsList().length)
  for (let i = 0; i < 1000; i++) {
    // Print x values.
    console.log(replyCloud.getPointsList()[i].getX()
    )
  }


})