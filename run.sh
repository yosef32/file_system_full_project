#!/bin/bash
echo "build the server"
docker build -t "go-server" ./server

echo "download proto file"
cd client
npm run proto
cd ..

echo "build the client"
docker build -t "node-client" ./client

docker-compose up