#

# Docker Envoy
docker pull envoyproxy/envoy:v1.25-latest

docker run -v $(pwd)/envoy.yaml:/etc/envoy/envoy.yaml -e ENVOY_UID=$(id -u) envoyproxy/envoy:v1.25-latest