import { StyleSheet, Text, View } from "react-native";
import { createSwitchNavigator, createStackNavigator } from "react-navigation";
import * as firebase from "firebase";
import React from "react";
import ApiKeys from "./components/constants/ApiKeys";
import screenChoice from "./components/main/screenChoice";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    firebase.initializeApp(ApiKeys.FirebaseConfig);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text></Text>
      </View>
    );
  }
}

const AuthStack = createStackNavigator({
  Home: screenChoice
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
