#!/bin/bash
PROTO_DIR=./gen-proto

rm -rf ./gen-proto
mkdir ./gen-proto

# Generate JavaScript code
npx grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:${PROTO_DIR} \
    --ts_out=service=grpc-node,mode=grpc-js:${PROTO_DIR} \
    --grpc_out=grpc_js:${PROTO_DIR} \
    -I ./proto \
    proto/*.proto

# # Generate Types
# npx proto-loader-gen-types --longs=String --enums=String --defaults --oneofs --grpcLib=@grpc/grpc-js --outDir=${PROTO_DIR} proto/*.proto
# Generate JS and TS code
protoc -I=./proto ./proto/*.proto \
  --js_out=import_style=commonjs:${PROTO_DIR} \
  --grpc-web_out=import_style=typescript,mode=grpcwebtext:${PROTO_DIR}