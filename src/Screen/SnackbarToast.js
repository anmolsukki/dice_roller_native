import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Snackbar from 'react-native-snackbar';

const SnackbarToast = () => {
  const showToast = () => {
    Snackbar.show({
      text: 'Hello world',
      duration: Snackbar.LENGTH_SHORT,
      textColor: 'blue',
      backgroundColor: 'red',
    });
  };

  return (
    <View style={styles.Container}>
      <TouchableOpacity onPress={() => showToast()}>
        <Text style={styles.playBtn}>Show Toast</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SnackbarToast;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#222831',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playBtn: {
    fontSize: 20,
    marginTop: 30,
    color: '#f2a365',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderColor: '#30475e',
    borderRadius: 5,
    borderWidth: 3,
    fontWeight: 'bold',
  },
});
