import { ProcessPointCloudClient } from "../gen-proto/pointcloud_grpc_pb"
import * as grpc from "@grpc/grpc-js"
import { Point, PointCloud, VoxelGridPointCloud } from "../gen-proto/pointcloud_pb"

const service = new ProcessPointCloudClient('localhost:10001', grpc.credentials.createInsecure())

const voxelCloud:VoxelGridPointCloud = new VoxelGridPointCloud();
const pt = new Point();
pt.setX(1)
pt.setY(1)
pt.setZ(1)

const pc = new PointCloud();

pc.addPoints(pt)
voxelCloud.setPointcloud(pc)
voxelCloud.setResolution(1)


service.voxelGrid(voxelCloud, (err, response) => 
{

})