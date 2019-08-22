import { ImageBackground, StyleSheet, Text, View } from "react-native";
import * as firebase from "firebase";
import React from "react";

const firebaseConfig = {
  apiKey: "AIzaSyARr9mhXss5vqr1ZWzyfWw6sI6rNeNWxBQ",
  authDomain: "q-aqua.firebaseapp.com",
  databaseURL: "https://q-aqua.firebaseio.com",
  projectId: "q-aqua",
  storageBucket: "",
  messagingSenderId: "154780930991",
  appId: "1:154780930991:web:76cb93f7cf55b812"
};
export default class App extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require("./image/bimage.png")}
        style={styles.container}
      >
        <View>
          <Text style={styles.text}>Q-AQUA</Text>
          <Text style= {{bottom:"70px"}}>Get water at your doorstep within minutes</Text>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 50,
    textAlign: "justify",
    alignSelf: "center",
    bottom: 250
  }
});
