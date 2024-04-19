#!/bin/bash

echo "Split into two"
split -n 2 dpkg.log --numeric-suffixes chunk --additional-suffix .log
echo "waiting"
sleep 5  
echo "Split the first chunk into four more"
split -n 4 chunk00.log --numeric-suffixes chunkofchunk00 --additional-suffix .log
echo "waiting"
sleep 5  
echo "Split the second chunk into five more"
split -n 5 chunk01.log --numeric-suffixes chunkofchunk01 --additional-suffix .log
echo "waiting"
sleep 5  
echo "done"