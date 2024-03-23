import React, { useEffect } from "react";
import { StyleSheet, View, Button } from "react-native";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";

GoogleSignin.configure({
  webClientId:
    "379794665637-i327atg6nqmisc1g8lc1kcerfa0baola.apps.googleusercontent.com",
});

export default function App() {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        "379794665637-i327atg6nqmisc1g8lc1kcerfa0baola.apps.googleusercontent.com",
    });
  }, []);

  const signInAsync = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log("User cancelled the login flow");
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log("Sign in is in progress already");
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log("Play services not available or outdated");
      } else {
        console.log("Something went wrong:", error);
      }
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
