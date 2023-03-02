FROM node:latest

WORKDIR /app
COPY . /app

# Install node modules and dependencies
RUN npm install
RUN apt-get update && apt-get install -y protobuf-compiler
# grpc web plugin
RUN mkdir /app/bin && \
    wget https://github.com/grpc/grpc-web/releases/download/1.4.2/protoc-gen-grpc-web-1.4.2-linux-x86_64 -O /app/bin/protoc-gen-grpc-web && \
    chmod +x /app/bin/protoc-gen-grpc-web
ENV PATH="${PATH}:/app/bin"
# Generate protos.
RUN echo $PATH && ./gen-proto.sh 

CMD npm run dev
