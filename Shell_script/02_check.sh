#!/bin/bash

str=$(ls -l $1 | awk '{print $1}')
#echo " STR variable is : $str"

target="-"

#echo " TARGET variable is : $target"

#echo "${str:0:1} == $target"
if [ ${str:0:1} == $target ]; then
	echo "Given is File."
else
	echo "Given is Directory."
fi

path=$(pwd $1)

echo "Path of given Dir/File : $path"
