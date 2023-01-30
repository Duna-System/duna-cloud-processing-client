// Original file: proto/pointcloud.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Point as _Point, Point__Output as _Point__Output } from './Point';
import type { PointCloud as _PointCloud, PointCloud__Output as _PointCloud__Output } from './PointCloud';
import type { VoxelGridPointCloud as _VoxelGridPointCloud, VoxelGridPointCloud__Output as _VoxelGridPointCloud__Output } from './VoxelGridPointCloud';

export interface ProcessPointCloudClient extends grpc.Client {
  AddOneToPoint(argument: _Point, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_Point__Output>): grpc.ClientUnaryCall;
  AddOneToPoint(argument: _Point, metadata: grpc.Metadata, callback: grpc.requestCallback<_Point__Output>): grpc.ClientUnaryCall;
  AddOneToPoint(argument: _Point, options: grpc.CallOptions, callback: grpc.requestCallback<_Point__Output>): grpc.ClientUnaryCall;
  AddOneToPoint(argument: _Point, callback: grpc.requestCallback<_Point__Output>): grpc.ClientUnaryCall;
  addOneToPoint(argument: _Point, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_Point__Output>): grpc.ClientUnaryCall;
  addOneToPoint(argument: _Point, metadata: grpc.Metadata, callback: grpc.requestCallback<_Point__Output>): grpc.ClientUnaryCall;
  addOneToPoint(argument: _Point, options: grpc.CallOptions, callback: grpc.requestCallback<_Point__Output>): grpc.ClientUnaryCall;
  addOneToPoint(argument: _Point, callback: grpc.requestCallback<_Point__Output>): grpc.ClientUnaryCall;
  
  ComputeCentroid(argument: _PointCloud, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_Point__Output>): grpc.ClientUnaryCall;
  ComputeCentroid(argument: _PointCloud, metadata: grpc.Metadata, callback: grpc.requestCallback<_Point__Output>): grpc.ClientUnaryCall;
  ComputeCentroid(argument: _PointCloud, options: grpc.CallOptions, callback: grpc.requestCallback<_Point__Output>): grpc.ClientUnaryCall;
  ComputeCentroid(argument: _PointCloud, callback: grpc.requestCallback<_Point__Output>): grpc.ClientUnaryCall;
  computeCentroid(argument: _PointCloud, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_Point__Output>): grpc.ClientUnaryCall;
  computeCentroid(argument: _PointCloud, metadata: grpc.Metadata, callback: grpc.requestCallback<_Point__Output>): grpc.ClientUnaryCall;
  computeCentroid(argument: _PointCloud, options: grpc.CallOptions, callback: grpc.requestCallback<_Point__Output>): grpc.ClientUnaryCall;
  computeCentroid(argument: _PointCloud, callback: grpc.requestCallback<_Point__Output>): grpc.ClientUnaryCall;
  
  VoxelGrid(argument: _VoxelGridPointCloud, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_PointCloud__Output>): grpc.ClientUnaryCall;
  VoxelGrid(argument: _VoxelGridPointCloud, metadata: grpc.Metadata, callback: grpc.requestCallback<_PointCloud__Output>): grpc.ClientUnaryCall;
  VoxelGrid(argument: _VoxelGridPointCloud, options: grpc.CallOptions, callback: grpc.requestCallback<_PointCloud__Output>): grpc.ClientUnaryCall;
  VoxelGrid(argument: _VoxelGridPointCloud, callback: grpc.requestCallback<_PointCloud__Output>): grpc.ClientUnaryCall;
  voxelGrid(argument: _VoxelGridPointCloud, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_PointCloud__Output>): grpc.ClientUnaryCall;
  voxelGrid(argument: _VoxelGridPointCloud, metadata: grpc.Metadata, callback: grpc.requestCallback<_PointCloud__Output>): grpc.ClientUnaryCall;
  voxelGrid(argument: _VoxelGridPointCloud, options: grpc.CallOptions, callback: grpc.requestCallback<_PointCloud__Output>): grpc.ClientUnaryCall;
  voxelGrid(argument: _VoxelGridPointCloud, callback: grpc.requestCallback<_PointCloud__Output>): grpc.ClientUnaryCall;
  
}

export interface ProcessPointCloudHandlers extends grpc.UntypedServiceImplementation {
  AddOneToPoint: grpc.handleUnaryCall<_Point__Output, _Point>;
  
  ComputeCentroid: grpc.handleUnaryCall<_PointCloud__Output, _Point>;
  
  VoxelGrid: grpc.handleUnaryCall<_VoxelGridPointCloud__Output, _PointCloud>;
  
}

export interface ProcessPointCloudDefinition extends grpc.ServiceDefinition {
  AddOneToPoint: MethodDefinition<_Point, _Point, _Point__Output, _Point__Output>
  ComputeCentroid: MethodDefinition<_PointCloud, _Point, _PointCloud__Output, _Point__Output>
  VoxelGrid: MethodDefinition<_VoxelGridPointCloud, _PointCloud, _VoxelGridPointCloud__Output, _PointCloud__Output>
}
