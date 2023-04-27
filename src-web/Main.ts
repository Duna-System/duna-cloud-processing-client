
import { Stream } from "stream";
import {ProcessPointCloudClient} from "../gen-proto/PointcloudServiceClientPb";
import { VoxelFilterInput, PointCloud, Point } from "../gen-proto/pointcloud_pb";
import { Empty } from "google-protobuf/google/protobuf/empty_pb"
const pcClient = new ProcessPointCloudClient("http://" + location.hostname + ":5000");

// Test Voxel
var voxelInputRequest = new VoxelFilterInput();
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
voxelInputRequest.setResolution(0.5)

console.log('calling voxelGrid...')
pcClient.voxelGrid(voxelInputRequest, null).then((replyCloud) => {
  console.log('RPC call took: ', performance.now() - start, ' ms.')
  console.log('Filtered size: ', replyCloud.getPointsList().length)
  for (let i = 0; i < 100032; i++) {
    // Print x values.
    // console.log(replyCloud.getPointsList()[i].getX())
  }

  console.log('calling Stream...')
  const stream = pcClient.cloudStream(new Empty)
  stream.on("data", (response)=> {
    
    for ( let i = 0 ; i < response.getPointsList().length; ++i)
      console.log(response.getPointsList()[i].getX())
  })
})