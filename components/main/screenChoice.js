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
  constructor(props) {
    super(props);
    //firebase.initializeApp(ApiKeys.FirebaseConfig);
  }
  render() {
    return (
      <View>
        <Text style={styles.text}>Q-AQUA</Text>
        <Text style={{ bottom: 230, color: "white" }}>
          Get water at your doorstep within minutes
        </Text>

        <View style={styles.container}>
          <TouchableOpacity>
            <Text style={styles.button}>Continue as a Water Supplier</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <TouchableOpacity>
            <Text style={styles.button}>Continue as a Customer</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    textAlign: "center"
  },
  text: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 50,
    textAlign: "justify",
    alignSelf: "center",
    bottom: 250
  },
  button: {
    backgroundColor: "#C1C1C1",
    alignSelf: "center",
    color: "white",
    borderRadius: 20,
    borderWidth: 30,
    fontSize: 16,
    overflow: "hidden",
    textAlign: "center"
  }
});
