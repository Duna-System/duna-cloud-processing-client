// Original file: proto/pointcloud.proto


export interface Point {
  'x'?: (number | string);
  'y'?: (number | string);
  'z'?: (number | string);
  'r'?: (number);
  'g'?: (number);
  'b'?: (number);
  'i'?: (number);
}

export interface Point__Output {
  'x': (number);
  'y': (number);
  'z': (number);
  'r': (number);
  'g': (number);
  'b': (number);
  'i': (number);
}
