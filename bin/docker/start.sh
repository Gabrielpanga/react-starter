#!/bin/sh

docker-compose up -d
docker exec -it react-base-project-app npm run start
docker logs react-base-project-app --follow
