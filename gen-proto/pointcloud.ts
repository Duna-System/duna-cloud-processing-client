import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { ProcessPointCloudClient as _ProcessPointCloudClient, ProcessPointCloudDefinition as _ProcessPointCloudDefinition } from './ProcessPointCloud';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  Color: MessageTypeDefinition
  Point: MessageTypeDefinition
  PointCloud: MessageTypeDefinition
  PointCloudRGB: MessageTypeDefinition
  ProcessPointCloud: SubtypeConstructor<typeof grpc.Client, _ProcessPointCloudClient> & { service: _ProcessPointCloudDefinition }
  VoxelGridPointCloud: MessageTypeDefinition
}

