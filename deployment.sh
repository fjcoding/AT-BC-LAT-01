#!/bin/bash

cd $HOME/metal-slug-maker

echo "Retrieving the Container ID if exits"
container=$(docker ps --filter status=running --filter name=msm -q)

if [ ! -z $container ];
then
    echo "Container = $container"
    echo "Retrieving the Image Name associated to the container"
    imageName=$(docker inspect --format='{{.Config.Image}}' $container)
    echo "ImageName = $imageName"
    if [ $imageName ];
    then
        imageID=$(docker inspect --format='{{.Id}}' $imageName)
        if [ $imageID ];
        then
            docker rm -f $container
            docker rmi -f $imageID
            docker pull $FULL_IMAGE_NAME:$TAG
        fi
    fi
fi
# Deploying
docker run --name msm -p 3000:3000 -d -v $HOME/keys:/keys/ $FULL_IMAGE_NAME:$TAG