import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.Container}>
      <Image source={require('./src/assets/dice5.png')} />
      <TouchableOpacity>
        <Text>Play Game</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
});
