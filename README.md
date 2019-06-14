# Camera-QR-Scanner-React-Native
A camera app that doubles as a QR code scanner using React Native. The project uses react-native-camera library.

Add         missingDimensionStrategy 'react-native-camera', 'general' to /android/app/build.gradle under defaultConfig

Add            <uses-permission android:name="android.permission.CAMERA" />
  <uses-permission android:name="android.permission.RECORD_AUDIO"/>
  <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
  <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
to /android/app/src/main/AndroidManifest.xml
