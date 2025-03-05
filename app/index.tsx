import { Text, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  )
}
