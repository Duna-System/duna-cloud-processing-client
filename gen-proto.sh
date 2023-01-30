#!/bin/bash
PROTO_DIR=./gen-proto

rm -rf ./gen-proto/*

# Generate JavaScript code
npx grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:${PROTO_DIR} \
    --grpc_out=grpc_js:${PROTO_DIR} \
    --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
    -I ./proto \
    proto/*.proto

# Generate TypeScript code (d.ts)
npx grpc_tools_node_protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=grpc_js:${PROTO_DIR} \
    -I ./proto \
    proto/*.proto

# Generate Types
npx proto-loader-gen-types --longs=String --enums=String --defaults --oneofs --grpcLib=@grpc/grpc-js --outDir=${PROTO_DIR} proto/*.proto
# Generate JS and TS code
protoc -I=./proto ./proto/*.proto \
  --js_out=import_style=commonjs:${PROTO_DIR} \
  --grpc-web_out=import_style=typescript,mode=grpcwebtext:${PROTO_DIR}