sudo rm -r .expo-shared;
sudo rm -r  .expo;
sudo rm -r  ios;
sudo rm -r  android;

npm install;
expo prebuild;
rm ios/easyexpo/easyexpo.entitlements;
cp easyexpo.entitlements ios/easyexpo;