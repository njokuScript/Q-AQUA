import {
  ImageBackground,
  TouchableOpacity,
  Button,
  StyleSheet,
  Text,
  View
} from "react-native";

import * as firebase from "firebase";
import React from "react";
//import ApiKey from "../constants/ApiKey";

export default class screenChoice extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    //firebase.initializeApp(ApiKeys.FirebaseConfig);
  }
  render() {
    return (
      <View>
        <Text style={styles.text}>Q-AQUA</Text>

        <View style={styles.screenContainer}>
          <TouchableOpacity>
            <Text style={styles.button}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.screenContainer}>
          <TouchableOpacity>
            <Text style={styles.button2}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    textAlign: "center",
    top: 70
  },
  button: {
    backgroundColor: "#C1C1C1",
    alignSelf: "center",
    color: "#24292E",
    fontSize: 16,
    overflow: "hidden",
    textAlign: "center",
    width: 300,
    borderRadius: 20,
    padding: 10
  },
  button2: {
    backgroundColor: "#C1C1C1",
    alignSelf: "center",
    color: "#24292E",
    fontSize: 16,
    overflow: "hidden",
    textAlign: "center",
    marginTop: 30,
    width: 300,
    borderRadius: 20,
    padding: 10
  }
});
