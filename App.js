import { StyleSheet, Text, View } from "react-native";
import * as firebase from "firebase";
import React from "react";
import ApiKeys from "./components/constants/ApiKeys";
import 

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
export default App
