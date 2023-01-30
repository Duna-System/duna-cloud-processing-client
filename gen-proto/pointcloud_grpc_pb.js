// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var pointcloud_pb = require('./pointcloud_pb.js');

function serialize_Point(arg) {
  if (!(arg instanceof pointcloud_pb.Point)) {
    throw new Error('Expected argument of type Point');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Point(buffer_arg) {
  return pointcloud_pb.Point.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PointCloud(arg) {
  if (!(arg instanceof pointcloud_pb.PointCloud)) {
    throw new Error('Expected argument of type PointCloud');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_PointCloud(buffer_arg) {
  return pointcloud_pb.PointCloud.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_VoxelGridPointCloud(arg) {
  if (!(arg instanceof pointcloud_pb.VoxelGridPointCloud)) {
    throw new Error('Expected argument of type VoxelGridPointCloud');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_VoxelGridPointCloud(buffer_arg) {
  return pointcloud_pb.VoxelGridPointCloud.deserializeBinary(new Uint8Array(buffer_arg));
}


var ProcessPointCloudService = exports.ProcessPointCloudService = {
  addOneToPoint: {
    path: '/ProcessPointCloud/AddOneToPoint',
    requestStream: false,
    responseStream: false,
    requestType: pointcloud_pb.Point,
    responseType: pointcloud_pb.Point,
    requestSerialize: serialize_Point,
    requestDeserialize: deserialize_Point,
    responseSerialize: serialize_Point,
    responseDeserialize: deserialize_Point,
  },
  computeCentroid: {
    path: '/ProcessPointCloud/ComputeCentroid',
    requestStream: false,
    responseStream: false,
    requestType: pointcloud_pb.PointCloud,
    responseType: pointcloud_pb.Point,
    requestSerialize: serialize_PointCloud,
    requestDeserialize: deserialize_PointCloud,
    responseSerialize: serialize_Point,
    responseDeserialize: deserialize_Point,
  },
  voxelGrid: {
    path: '/ProcessPointCloud/VoxelGrid',
    requestStream: false,
    responseStream: false,
    requestType: pointcloud_pb.VoxelGridPointCloud,
    responseType: pointcloud_pb.PointCloud,
    requestSerialize: serialize_VoxelGridPointCloud,
    requestDeserialize: deserialize_VoxelGridPointCloud,
    responseSerialize: serialize_PointCloud,
    responseDeserialize: deserialize_PointCloud,
  },
};

exports.ProcessPointCloudClient = grpc.makeGenericClientConstructor(ProcessPointCloudService);
