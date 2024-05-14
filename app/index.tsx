import { Stack } from 'expo-router';


export default function Index() {

    return (
        <Stack.Screen
            options={{
                headerTitle: 'Hello World'
            }}
        />
    )
}