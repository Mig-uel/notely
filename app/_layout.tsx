import { Stack } from 'expo-router'

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#FF8C00',
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: 'bold',
        },
        contentStyle: {
          paddingHorizontal: 10,
          paddingTop: 10,
          backgroundColor: '#FFF',
        },
      }}
    >
      <Stack.Screen name='index' options={{ title: 'Home' }} />
    </Stack>
  )
}
