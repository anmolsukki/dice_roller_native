import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import { RNCamera } from 'react-native-camera';

const PaddingView = () => (
  <View style={styles.paddingContainer}>
    <Text style={styles.paddingText}>Loading...</Text>
  </View>
);

const CameraHandle = () => {
  const [image, setImage] = useState(null);

  const takePicture = async (camera) => {
    try {
      const options = { quality: 0.9, base64: false };
      const data = await camera.takePictureAsync(options);
      setImage(data.uri);
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <View style={styles.mainContainer}>
      {image ? (
        <View style={styles.preview}>
          <Text style={styles.camText}>Here is your new profile pic</Text>
          <Image style={styles.clicked} source={{ uri: image, width: '100%', height: '80%' }} />
          <Button title="Click New Image" onPress={() => setImage(null)} />
        </View>
      ) : (
        <RNCamera
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          captureAudio={false}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'permission to use camera',
            message: 'longer text to use camera',
            buttonPositive: 'OK',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'permission to use audio',
            message: 'longer text to use audio',
            buttonPositive: 'OK',
            buttonNegative: 'Cancel',
          }}>
          {({ camera, status }) => {
            if (status !== 'READY') {
              return <PaddingView />;
            }
            return (
              <View style={styles.cameraStyle}>
                <TouchableOpacity style={styles.capture} onPress={() => takePicture(camera)}>
                  <Text>Snap</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        </RNCamera>
      )}
    </View>
  );
};

export default CameraHandle;

const styles = StyleSheet.create({
  paddingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paddingText: {
    fontSize: 30,
    color: 'red',
  },

  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#0A79DF',
  },
  preview: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  cameraStyle: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: 'orange',
    padding: 20,
    alignSelf: 'center',
  },

  camText: {
    backgroundColor: '#3498DB',
    color: '#FFFFFF',
    marginBottom: 10,
    width: '100%',
    textAlign: 'center',
    paddingVertical: 20,
    fontSize: 25,
  },
  clicked: {
    width: 300,
    height: 300,
    borderRadius: 150,
  },
});
