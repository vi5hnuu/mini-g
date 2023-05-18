import { StyleSheet, Text, TextInput, View, StatusBar, Alert } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'
import { useState } from 'react'

function StartGameScreen({ onNumberPick }) {
  const [num, setNum] = useState('')
  function onNumChangeHandler(numText) {
    setNum(numText)
  }
  function onConfirmHandler() {
    const chosenNumber = +num
    if (isNaN(chosenNumber) || chosenNumber <= 0) {
      Alert.alert(
        'Invalid Choice!!',
        'Please enter a valid number between 1 and 99',
        [{
          text: 'okay',
          style: 'destructive',
          onPress: onResetHandler
        }])
      return;
    }
    //start game
    onNumberPick(num)
  }
  function onResetHandler() {
    setNum('')
  }
  return <>
    <StatusBar backgroundColor='#800f2f' />
    <Text style={styles.title}>Guess The Number</Text>
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={onNumChangeHandler}
        value={num}
        maxLength={2}
        cursorColor='#800f2f'
        keyboardType='numeric'
        autoCorrect={false}
        style={styles.numinput}
        placeholder='25' />
      <View style={styles.actions}>
        <PrimaryButton onPress={onResetHandler}>Reset</PrimaryButton>
        <PrimaryButton onPress={onConfirmHandler}>Confirm</PrimaryButton>
      </View>
    </View>
  </>
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#ffccd5',
    paddingHorizontal: 15,
    paddingTop: 25,
    paddingBottom: 15,
    margin: 10,
    borderRadius: 5,
    borderColor: '#590d22',
    borderWidth: 2,
    elevation: 5,
    gap: 25
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  numinput: {
    borderColor: '#590d22',
    borderWidth: 1,
    borderRadius: 3,
    color: '#590d22',
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '20%',
    fontSize: 25,
    alignSelf: 'center',
    textAlign: 'center',
  },
  title: {
    fontFamily: 'open-sans-bold',
    backgroundColor: '#800f2f',
    color: '#ffccd5',
    margin: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 25,
    borderRadius: 3,
  }
})

export default StartGameScreen