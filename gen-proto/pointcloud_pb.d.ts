import * as jspb from 'google-protobuf'



export class Color extends jspb.Message {
  getR(): number;
  setR(value: number): Color;

  getG(): number;
  setG(value: number): Color;

  getB(): number;
  setB(value: number): Color;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Color.AsObject;
  static toObject(includeInstance: boolean, msg: Color): Color.AsObject;
  static serializeBinaryToWriter(message: Color, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Color;
  static deserializeBinaryFromReader(message: Color, reader: jspb.BinaryReader): Color;
}

export namespace Color {
  export type AsObject = {
    r: number,
    g: number,
    b: number,
  }
}

export class Point extends jspb.Message {
  getX(): number;
  setX(value: number): Point;

  getY(): number;
  setY(value: number): Point;

  getZ(): number;
  setZ(value: number): Point;

  getR(): number;
  setR(value: number): Point;

  getG(): number;
  setG(value: number): Point;

  getB(): number;
  setB(value: number): Point;

  getI(): number;
  setI(value: number): Point;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Point.AsObject;
  static toObject(includeInstance: boolean, msg: Point): Point.AsObject;
  static serializeBinaryToWriter(message: Point, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Point;
  static deserializeBinaryFromReader(message: Point, reader: jspb.BinaryReader): Point;
}

export namespace Point {
  export type AsObject = {
    x: number,
    y: number,
    z: number,
    r: number,
    g: number,
    b: number,
    i: number,
  }
}

export class PointCloud extends jspb.Message {
  getPointsList(): Array<Point>;
  setPointsList(value: Array<Point>): PointCloud;
  clearPointsList(): PointCloud;
  addPoints(value?: Point, index?: number): Point;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PointCloud.AsObject;
  static toObject(includeInstance: boolean, msg: PointCloud): PointCloud.AsObject;
  static serializeBinaryToWriter(message: PointCloud, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PointCloud;
  static deserializeBinaryFromReader(message: PointCloud, reader: jspb.BinaryReader): PointCloud;
}

export namespace PointCloud {
  export type AsObject = {
    pointsList: Array<Point.AsObject>,
  }
}

export class PointCloudRGB extends jspb.Message {
  getPointsList(): Array<Point>;
  setPointsList(value: Array<Point>): PointCloudRGB;
  clearPointsList(): PointCloudRGB;
  addPoints(value?: Point, index?: number): Point;

  getRgbList(): Array<Color>;
  setRgbList(value: Array<Color>): PointCloudRGB;
  clearRgbList(): PointCloudRGB;
  addRgb(value?: Color, index?: number): Color;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PointCloudRGB.AsObject;
  static toObject(includeInstance: boolean, msg: PointCloudRGB): PointCloudRGB.AsObject;
  static serializeBinaryToWriter(message: PointCloudRGB, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PointCloudRGB;
  static deserializeBinaryFromReader(message: PointCloudRGB, reader: jspb.BinaryReader): PointCloudRGB;
}

export namespace PointCloudRGB {
  export type AsObject = {
    pointsList: Array<Point.AsObject>,
    rgbList: Array<Color.AsObject>,
  }
}

export class VoxelGridPointCloud extends jspb.Message {
  getResolution(): number;
  setResolution(value: number): VoxelGridPointCloud;

  getPointcloud(): PointCloud | undefined;
  setPointcloud(value?: PointCloud): VoxelGridPointCloud;
  hasPointcloud(): boolean;
  clearPointcloud(): VoxelGridPointCloud;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VoxelGridPointCloud.AsObject;
  static toObject(includeInstance: boolean, msg: VoxelGridPointCloud): VoxelGridPointCloud.AsObject;
  static serializeBinaryToWriter(message: VoxelGridPointCloud, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VoxelGridPointCloud;
  static deserializeBinaryFromReader(message: VoxelGridPointCloud, reader: jspb.BinaryReader): VoxelGridPointCloud;
}

export namespace VoxelGridPointCloud {
  export type AsObject = {
    resolution: number,
    pointcloud?: PointCloud.AsObject,
  }
}

