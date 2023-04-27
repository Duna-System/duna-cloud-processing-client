import { ProcessPointCloudClient } from "../gen-proto/pointcloud_grpc_pb"
import * as grpc from "@grpc/grpc-js"
import { Point, PointCloud, VoxelFilterInput } from "../gen-proto/pointcloud_pb"
import { Empty } from "google-protobuf/google/protobuf/empty_pb"

const service = new ProcessPointCloudClient('localhost:10001', grpc.credentials.createInsecure())

const voxelCloud = new VoxelFilterInput();
const pt = new Point();
pt.setX(1)
pt.setY(1)
pt.setZ(1)

const pc = new PointCloud();

pc.addPoints(pt)
voxelCloud.setPointcloud(pc)
voxelCloud.setResolution(1)

const service_stream = service.cloudStream(new Empty) as any
service_stream.on('data', (response:PointCloud) => {
    console.log(response.getPointsList()[0].getX())
    console.log(response.getPointsList()[1].getX())
})