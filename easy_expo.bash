#!/bin/bash          

sudo rm -r .expo-shared;
sudo rm -r  .expo;
sudo rm -r  ios;
sudo rm -r  android;

npm install;
expo prebuild;

project="easyexpo";
rm ios/${project}/${project}.entitlements;
cp ${project}.entitlements ios/${project};