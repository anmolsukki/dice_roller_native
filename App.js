import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Pressable } from 'react-native';

const App = () => {
  const [dice, setDice] = useState(require('./src/assets/dice1.png'));

  const playBtnTapped = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    switch (randomNumber) {
      case 1:
        setDice(require('./src/assets/dice1.png'));
        break;
      case 2:
        setDice(require('./src/assets/dice2.png'));
        break;
      case 3:
        setDice(require('./src/assets/dice3.png'));
        break;
      case 4:
        setDice(require('./src/assets/dice4.png'));
        break;
      case 5:
        setDice(require('./src/assets/dice5.png'));
        break;
      case 6:
        setDice(require('./src/assets/dice6.png'));
        break;
      default:
        setDice(require('./src/assets/dice6.png'));
        break;
    }
  };

  return (
    <View style={styles.Container}>
      <Pressable onPress={() => playBtnTapped()}>
        <Image style={styles.imgStyle} source={dice} />
      </Pressable>
      <TouchableOpacity onPress={() => playBtnTapped()}>
        <Text style={styles.playBtn}>Play Game</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#222831',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgStyle: {
    width: 200,
    height: 200,
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
