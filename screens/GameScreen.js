import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert, FlatList } from 'react-native'
import PrimaryButton from '../components/PrimaryButton';
import { Ionicons } from '@expo/vector-icons'

function generateRandomBeween(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);//[min,max]
}

let minBoundry = 1;
let maxBoundry = 100
export default function GameScreen({ rounds, chosenNum, onGameOver, addRound }) {
  const [guess, setGUess] = useState();

  useEffect(() => {
    if (guess == chosenNum) {
      onGameOver()
    }
  }, [chosenNum, guess])

  useEffect(() => {
    const rn = generateRandomBeween(minBoundry, maxBoundry)
    setGUess(rn)
  }, [])

  function nextGuess(type) {
    if ((type === 'lower' && guess >= chosenNum) || (type === 'higher' && guess <= chosenNum)) {
      Alert.alert(
        'Stop Lying!!',
        'This cannot be true!!',
        [{ text: 'sorry', style: 'destructive' }])
      return
    }

    if (type == "lower") {
      minBoundry = guess + 1
    } else {
      maxBoundry = guess - 1
    }
    addRound({ id: Math.random(), min: minBoundry, max: maxBoundry, type })
    const rn = generateRandomBeween(minBoundry, maxBoundry)
    setGUess(rn)
  }
  return <View style={styles.container}>
    <Text style={styles.title}>Opponent's Guess</Text>
    <Text style={styles.guess}>{guess}</Text>
    <View style={styles.actions}>
      <PrimaryButton
        style={{ fontSize: 25, paddingHorizontal: 35 }}
        onPress={nextGuess.bind(null, "lower")}
      >
        <Ionicons name='md-remove' size={24} />
      </PrimaryButton>
      <PrimaryButton
        style={{ fontSize: 25, paddingHorizontal: 35 }}
        onPress={nextGuess.bind(null, "higher")}
      >
        <Ionicons name='md-add' size={24} />
      </PrimaryButton>
    </View>
    <View style={styles.rounds}>
      <FlatList data={rounds} keyExtractor={(round) => round.id} renderItem={(roundData) => {
        return <Text style={styles.round}>Min : {roundData.item.min} | Max : {roundData.item.max} | Type : {roundData.item.type}</Text>
      }}>
      </FlatList>
    </View>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
  title: {
    textAlign: 'center',
    backgroundColor: '#800f2f',
    color: '#fff0f3',
    fontSize: 25,
    fontWeight: 'bold',
    borderColor: '#590d22',
    borderWidth: 2,
    padding: 6,
    textTransform: 'uppercase',
    borderRadius: 3,
    marginBottom: 35
  },
  guess: {
    fontSize: 75,
    color: '#590d22',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 35
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 25
  },
  rounds: {
    flex: 1,
    marginTop: 15,
    borderRadius: 5,
    padding: 7,
    borderWidth: 2,
    borderColor: '#590d22'
  },
  round: {
    fontFamily: 'open-sans',
    backgroundColor: 'red',
    marginBottom: 5,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 3,
    backgroundColor: '#ffc4d6'
  }
})