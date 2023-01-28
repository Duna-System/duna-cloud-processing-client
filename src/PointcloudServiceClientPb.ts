/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.21.6
// source: pointcloud.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as pointcloud_pb from './pointcloud_pb';


export class ProcessPointCloudClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorAddOneToPoint = new grpcWeb.MethodDescriptor(
    '/ProcessPointCloud/AddOneToPoint',
    grpcWeb.MethodType.UNARY,
    pointcloud_pb.Point,
    pointcloud_pb.Point,
    (request: pointcloud_pb.Point) => {
      return request.serializeBinary();
    },
    pointcloud_pb.Point.deserializeBinary
  );

  addOneToPoint(
    request: pointcloud_pb.Point,
    metadata: grpcWeb.Metadata | null): Promise<pointcloud_pb.Point>;

  addOneToPoint(
    request: pointcloud_pb.Point,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pointcloud_pb.Point) => void): grpcWeb.ClientReadableStream<pointcloud_pb.Point>;

  addOneToPoint(
    request: pointcloud_pb.Point,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pointcloud_pb.Point) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ProcessPointCloud/AddOneToPoint',
        request,
        metadata || {},
        this.methodDescriptorAddOneToPoint,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ProcessPointCloud/AddOneToPoint',
    request,
    metadata || {},
    this.methodDescriptorAddOneToPoint);
  }

  methodDescriptorComputeCentroid = new grpcWeb.MethodDescriptor(
    '/ProcessPointCloud/ComputeCentroid',
    grpcWeb.MethodType.UNARY,
    pointcloud_pb.PointCloud,
    pointcloud_pb.Point,
    (request: pointcloud_pb.PointCloud) => {
      return request.serializeBinary();
    },
    pointcloud_pb.Point.deserializeBinary
  );

  computeCentroid(
    request: pointcloud_pb.PointCloud,
    metadata: grpcWeb.Metadata | null): Promise<pointcloud_pb.Point>;

  computeCentroid(
    request: pointcloud_pb.PointCloud,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pointcloud_pb.Point) => void): grpcWeb.ClientReadableStream<pointcloud_pb.Point>;

  computeCentroid(
    request: pointcloud_pb.PointCloud,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pointcloud_pb.Point) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ProcessPointCloud/ComputeCentroid',
        request,
        metadata || {},
        this.methodDescriptorComputeCentroid,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ProcessPointCloud/ComputeCentroid',
    request,
    metadata || {},
    this.methodDescriptorComputeCentroid);
  }

  methodDescriptorVoxelGrid = new grpcWeb.MethodDescriptor(
    '/ProcessPointCloud/VoxelGrid',
    grpcWeb.MethodType.UNARY,
    pointcloud_pb.VoxelGridPointCloud,
    pointcloud_pb.PointCloud,
    (request: pointcloud_pb.VoxelGridPointCloud) => {
      return request.serializeBinary();
    },
    pointcloud_pb.PointCloud.deserializeBinary
  );

  voxelGrid(
    request: pointcloud_pb.VoxelGridPointCloud,
    metadata: grpcWeb.Metadata | null): Promise<pointcloud_pb.PointCloud>;

  voxelGrid(
    request: pointcloud_pb.VoxelGridPointCloud,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pointcloud_pb.PointCloud) => void): grpcWeb.ClientReadableStream<pointcloud_pb.PointCloud>;

  voxelGrid(
    request: pointcloud_pb.VoxelGridPointCloud,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pointcloud_pb.PointCloud) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ProcessPointCloud/VoxelGrid',
        request,
        metadata || {},
        this.methodDescriptorVoxelGrid,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ProcessPointCloud/VoxelGrid',
    request,
    metadata || {},
    this.methodDescriptorVoxelGrid);
  }

}

