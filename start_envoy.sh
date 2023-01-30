#!/bin/bash

docker run -v $(pwd)/envoy.yaml:/etc/envoy/envoy.yaml -e ENVOY_UID=$(id -u) --network=host envoyproxy/envoy:v1.25-latest