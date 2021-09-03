#!/bin/bash

cd $HOME/metal-slug-maker

echo "Retrieving the Container ID if exits"
container=$(sudo docker ps --filter status=running --filter name=msm -q)

if [ ! -z $container ];
then
    echo "Container = $container"
    echo "Retrieving the Image Name associated to the container"
    imageName=$(sudo docker inspect --format='{{.Config.Image}}' $container)
    echo "ImageName = $imageName"
    if [ $imageName ];
    then
        imageID=$(sudo docker inspect --format='{{.Id}}' $imageName)
        if [ $imageID ];
        then
            sudo docker rm -f $container
            sudo docker rmi -f $imageID
            sudo docker pull $FULL_IMAGE_NAME:$TAG
        fi
    fi
fi
# Deploying
sudo docker run --name msm -p 3000:3000 -d -v $HOME/keys:/keys/ $FULL_IMAGE_NAME:$TAG