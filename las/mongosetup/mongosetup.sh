#!/usr/bin/env bash
#echo "Initialize replicaset"
#sleep 10
#mongosh "mongodb://mongodb1:27017" --eval "load('mongosetup.js')"

#!/usr/bin/env bash

echo "Initialize replicaset"
while true; do
    if mongosh "mongodb://mongodb2:27017" --eval "load('mongosetup.js')" ; then
        echo "Replicaset initialization successful"
        break
    else
        echo "Replicaset initialization failed, trying again in 10 seconds"
        sleep 10
    fi
done
