#!/bin/bash          
project="easyexpo";
rm ios/${project}/${project}.entitlements;
cp ${project}.entitlements ios/${project};