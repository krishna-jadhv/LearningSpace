#!/bin/bash

read -p "Enter IP : " TARGET

# Google Public DNS

echo "Checking connectivity to $TARGET ..."

# Send 1 packet (-c 1) with a 2-second timeout (-W 2)
if ping -c 1 -W 2 $TARGET > /dev/null 2>&1; then
    echo "STATUS: [ONLINE] - Host $TARGET is reachable."
else
    echo "STATUS: [OFFLINE] - Could not reach $TARGET."
fi
