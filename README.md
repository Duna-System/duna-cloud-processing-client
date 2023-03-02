# Overview
This is a gRPC application that consumes an point cloud processing server API defined by proto services. Make sure both ends MATCH the proto file. 


# Docker 
- `docker build -t marcusforte/duna-cloud-processing-client.`

# Docker compose
Docker compose spins up the envoy proxy, the client application which simply calls the filter as the server application.
Note that you must build the server application docker image first. See https://github.com/Duna-System/duna-cloud-processing.

# Roadmap
- Improve development enviroment. Try to enable changing source files and immediately hot-loading the changes. See https://code.visualstudio.com/docs/devcontainers/containers.
- Maybe use a different tool other than `Parcel`? Vite, ...
