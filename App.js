import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import StartGameScreen from './screens/StartGameScreen';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { useFonts } from 'expo-font'

export default function App() {
  const [loaded, error] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
  const [rounds, setRounds] = useState([])
  const [userNumber, setUserNumber] = useState()
  const [gameOver, setGameOver] = useState(false);

  function gameOverHanlder() {
    setGameOver(true);
  }
  function pickedNumber(pickedNumber) {
    setUserNumber(pickedNumber)
  }
  if (!loaded) {
    return <View><Text>Loading...</Text></View>
  }
  function onRestartHandler() {
    setGameOver(false);
    setUserNumber(null)
    setRounds([])
  }
  function onAddRoundHandler(round) {
    setRounds((rounds) => {
      return [round, ...rounds]
    })
  }
  return <LinearGradient
    colors={['#800f2f', '#ff4d6d']}
    style={{ flex: 1 }}>
    <ImageBackground
      style={{ flex: 1 }}
      source={require('./assets/puzzle.jpg')}
      resizeMode='cover'
      imageStyle={{ opacity: 0.3 }}
    >
      {!gameOver && !userNumber && <StartGameScreen onNumberPick={pickedNumber} />}
      {!gameOver && userNumber && <GameScreen
        rounds={rounds}
        addRound={onAddRoundHandler}
        onGameOver={gameOverHanlder}
        chosenNum={userNumber} />}
      {gameOver && <GameOverScreen
        roundCount={rounds.length}
        chosenNumber={userNumber}
        onRestart={onRestartHandler} />}
    </ImageBackground>
  </LinearGradient>
}


