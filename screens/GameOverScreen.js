import { View, Text, StyleSheet, Image, Button } from 'react-native'
import React from 'react'
import PrimaryButton from '../components/PrimaryButton'

export default function GameOverScreen({ roundCount, chosenNumber, onRestart }) {

  return <View style={styles.container}>
    <Text style={styles.heading}>Game Over!</Text>
    <Image
      source={require('./../assets/stars.png')}
      resizeMode='cover'
      style={styles.image} />
    <Text
      style={styles.info}>You needed
      <Text style={styles.highlightInfo}> {roundCount} </Text>
      rounds to guess the number
      <Text style={styles.highlightInfo}> {chosenNumber} </Text>
      .
    </Text>
    <PrimaryButton onPress={onRestart}>Restart</PrimaryButton>
  </View>
}


const styles = StyleSheet.create({
  container: {
    margin: 25,
    alignItems: 'center',
    gap: 15,
    flex: 1,
    justifyContent: 'center',
    marginTop: -25,
  },
  heading: {
    fontFamily: 'open-sans-bold',
    textAlign: 'center',
    fontSize: 25,
    color: '#590d22'
  },
  image: {
    opacity: 0.55,
  },
  info: {
    fontFamily: 'open-sans',
    fontSize: 25,
    textAlign: 'justify',
    borderColor: '#590d22',
    borderWidth: 2,
    padding: 15,
    borderRadius: 10
  },
  highlightInfo: {
    fontFamily: 'open-sans-bold',
  }
})