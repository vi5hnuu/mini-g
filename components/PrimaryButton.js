import { Pressable, Text, View, StyleSheet } from 'react-native'

export default function PrimaryButton({ children, onPress, style }) {
  return <View >
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed ? [styles.pressed, styles.button] : [styles.button]}
      android_ripple={{
        color: '#ffb3c1',
      }}>
      <Text style={[styles.text, style]}>{children}</Text>
    </Pressable>
  </View>
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#a4133c',
    borderRadius: 4,
    elevation: 4,
    overflow: 'hidden'
  },
  text: {
    fontFamily: 'open-sans-bold',
    color: '#fff0f3',
    paddingHorizontal: 17,
    paddingVertical: 7,
    textTransform: 'uppercase'
  },
  pressed: {
    opacity: 0.75
  }
})