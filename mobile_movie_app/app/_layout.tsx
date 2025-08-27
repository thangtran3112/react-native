import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import "./globals.css";

if (__DEV__) {
  import("../ReactotronConfig").then(() =>
    console.log("Reactotron Configured")
  );
}

export default function RootLayout() {
  return (
    <>
      <StatusBar hidden={true} />

      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="movie/[id]"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}
