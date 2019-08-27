import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { createSwitchNavigator, createStackNavigator } from "react-navigation";
import * as firebase from "firebase";
import React from "react";
//import ApiKey from "./components/constants/ApiKey";
import ScreenChoice from "./components/main/ScreenChoice";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    //firebase.initializeApp(ApiKeys.FirebaseConfig);
  }

  render() {
    return (
      <ImageBackground
        source={require("./components/main/image/bimage.png")}
        style={styles.container}
      >
        <View style={styles.container}>
          <ScreenChoice />
        </View>
      </ImageBackground>
    );
  }
}

const AuthStack = createStackNavigator({
  Home: ScreenChoice
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    opacity: 60
  }
});
