import { Stack } from 'expo-router';

export default function TabLayout() {

  return (
    <Stack
      initialRouteName='test'
    >
      <Stack.Screen
        name="index"
        options={{
          title: 'My-Chats',
        }}
      />
    </Stack>
  );
}
