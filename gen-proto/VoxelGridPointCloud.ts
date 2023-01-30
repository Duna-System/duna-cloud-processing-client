// Original file: proto/pointcloud.proto

import type { PointCloud as _PointCloud, PointCloud__Output as _PointCloud__Output } from './PointCloud';

export interface VoxelGridPointCloud {
  'resolution'?: (number | string);
  'pointcloud'?: (_PointCloud | null);
}

export interface VoxelGridPointCloud__Output {
  'resolution': (number);
  'pointcloud': (_PointCloud__Output | null);
}
