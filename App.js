import React, { useEffect } from "react";
import { StyleSheet, View, Button } from "react-native";
import * as GoogleSignIn from "expo-google-sign-in";

export default function App() {
  // Initialize Google Sign-In when the component mounts
  useEffect(() => {
    GoogleSignIn.initAsync({
      iosClientId:
        "379794665637-4hr31jd2tqe86oesias63049ke7nh68a.apps.googleusercontent.com",
      androidClientId:
        "379794665637-4hhv9prtkclq69usmmttdcjbjl4i4jvd.apps.googleusercontent.com",
    });
  }, []);

  const signInAsync = async () => {
    try {
      await GoogleSignIn.askForPlayServicesAsync();
      const { type, user } = await GoogleSignIn.signInAsync();
      if (type === "success") {
        // Successfully signed in
        console.log(user);
      }
    } catch (error) {
      console.error("Google Sign-In error:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Sign in with Google" onPress={signInAsync} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
