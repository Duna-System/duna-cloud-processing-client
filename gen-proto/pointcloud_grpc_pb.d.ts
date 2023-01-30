// package: 
// file: pointcloud.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as pointcloud_pb from "./pointcloud_pb";

interface IProcessPointCloudService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    addOneToPoint: IProcessPointCloudService_IAddOneToPoint;
    computeCentroid: IProcessPointCloudService_IComputeCentroid;
    voxelGrid: IProcessPointCloudService_IVoxelGrid;
}

interface IProcessPointCloudService_IAddOneToPoint extends grpc.MethodDefinition<pointcloud_pb.Point, pointcloud_pb.Point> {
    path: "/ProcessPointCloud/AddOneToPoint";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pointcloud_pb.Point>;
    requestDeserialize: grpc.deserialize<pointcloud_pb.Point>;
    responseSerialize: grpc.serialize<pointcloud_pb.Point>;
    responseDeserialize: grpc.deserialize<pointcloud_pb.Point>;
}
interface IProcessPointCloudService_IComputeCentroid extends grpc.MethodDefinition<pointcloud_pb.PointCloud, pointcloud_pb.Point> {
    path: "/ProcessPointCloud/ComputeCentroid";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pointcloud_pb.PointCloud>;
    requestDeserialize: grpc.deserialize<pointcloud_pb.PointCloud>;
    responseSerialize: grpc.serialize<pointcloud_pb.Point>;
    responseDeserialize: grpc.deserialize<pointcloud_pb.Point>;
}
interface IProcessPointCloudService_IVoxelGrid extends grpc.MethodDefinition<pointcloud_pb.VoxelGridPointCloud, pointcloud_pb.PointCloud> {
    path: "/ProcessPointCloud/VoxelGrid";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pointcloud_pb.VoxelGridPointCloud>;
    requestDeserialize: grpc.deserialize<pointcloud_pb.VoxelGridPointCloud>;
    responseSerialize: grpc.serialize<pointcloud_pb.PointCloud>;
    responseDeserialize: grpc.deserialize<pointcloud_pb.PointCloud>;
}

export const ProcessPointCloudService: IProcessPointCloudService;

export interface IProcessPointCloudServer extends grpc.UntypedServiceImplementation {
    addOneToPoint: grpc.handleUnaryCall<pointcloud_pb.Point, pointcloud_pb.Point>;
    computeCentroid: grpc.handleUnaryCall<pointcloud_pb.PointCloud, pointcloud_pb.Point>;
    voxelGrid: grpc.handleUnaryCall<pointcloud_pb.VoxelGridPointCloud, pointcloud_pb.PointCloud>;
}

export interface IProcessPointCloudClient {
    addOneToPoint(request: pointcloud_pb.Point, callback: (error: grpc.ServiceError | null, response: pointcloud_pb.Point) => void): grpc.ClientUnaryCall;
    addOneToPoint(request: pointcloud_pb.Point, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pointcloud_pb.Point) => void): grpc.ClientUnaryCall;
    addOneToPoint(request: pointcloud_pb.Point, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pointcloud_pb.Point) => void): grpc.ClientUnaryCall;
    computeCentroid(request: pointcloud_pb.PointCloud, callback: (error: grpc.ServiceError | null, response: pointcloud_pb.Point) => void): grpc.ClientUnaryCall;
    computeCentroid(request: pointcloud_pb.PointCloud, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pointcloud_pb.Point) => void): grpc.ClientUnaryCall;
    computeCentroid(request: pointcloud_pb.PointCloud, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pointcloud_pb.Point) => void): grpc.ClientUnaryCall;
    voxelGrid(request: pointcloud_pb.VoxelGridPointCloud, callback: (error: grpc.ServiceError | null, response: pointcloud_pb.PointCloud) => void): grpc.ClientUnaryCall;
    voxelGrid(request: pointcloud_pb.VoxelGridPointCloud, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pointcloud_pb.PointCloud) => void): grpc.ClientUnaryCall;
    voxelGrid(request: pointcloud_pb.VoxelGridPointCloud, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pointcloud_pb.PointCloud) => void): grpc.ClientUnaryCall;
}

export class ProcessPointCloudClient extends grpc.Client implements IProcessPointCloudClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public addOneToPoint(request: pointcloud_pb.Point, callback: (error: grpc.ServiceError | null, response: pointcloud_pb.Point) => void): grpc.ClientUnaryCall;
    public addOneToPoint(request: pointcloud_pb.Point, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pointcloud_pb.Point) => void): grpc.ClientUnaryCall;
    public addOneToPoint(request: pointcloud_pb.Point, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pointcloud_pb.Point) => void): grpc.ClientUnaryCall;
    public computeCentroid(request: pointcloud_pb.PointCloud, callback: (error: grpc.ServiceError | null, response: pointcloud_pb.Point) => void): grpc.ClientUnaryCall;
    public computeCentroid(request: pointcloud_pb.PointCloud, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pointcloud_pb.Point) => void): grpc.ClientUnaryCall;
    public computeCentroid(request: pointcloud_pb.PointCloud, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pointcloud_pb.Point) => void): grpc.ClientUnaryCall;
    public voxelGrid(request: pointcloud_pb.VoxelGridPointCloud, callback: (error: grpc.ServiceError | null, response: pointcloud_pb.PointCloud) => void): grpc.ClientUnaryCall;
    public voxelGrid(request: pointcloud_pb.VoxelGridPointCloud, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pointcloud_pb.PointCloud) => void): grpc.ClientUnaryCall;
    public voxelGrid(request: pointcloud_pb.VoxelGridPointCloud, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pointcloud_pb.PointCloud) => void): grpc.ClientUnaryCall;
}
