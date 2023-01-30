// Original file: proto/pointcloud.proto

import type { Point as _Point, Point__Output as _Point__Output } from './Point';
import type { Color as _Color, Color__Output as _Color__Output } from './Color';

export interface PointCloudRGB {
  'Points'?: (_Point)[];
  'RGB'?: (_Color)[];
}

export interface PointCloudRGB__Output {
  'Points': (_Point__Output)[];
  'RGB': (_Color__Output)[];
}
