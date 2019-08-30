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
import ApiKey from "../constants/ApiKey";

export default class screenChoice extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    if (!firebase.apps.length) {
      firebase.initializeApp(ApiKey.firebaseConfig);
    }
  }
  render() {
    return (
      <ImageBackground
        source={require("../main/image/bimage.png")}
        style={styles.container}
      >
        <View>
          <Text style={styles.text}>Q-AQUA</Text>

          <View style={styles.screenContainer}>
            <TouchableOpacity onPress={this.navigateSupplierSignUp}>
              <Text style={styles.button}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.screenContainer}>
            <TouchableOpacity onPress={this.navigateSupplierLogin}>
              <Text style={styles.button2}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }

  navigateSupplierLogin = async () => {
    this.props.navigation.navigate("SupplierLog");
  };
  navigateSupplierSignUp = async () => {
    this.props.navigation.navigate("SupplierReg");
  };
}

const styles = StyleSheet.create({
  screenContainer: {
    textAlign: "center",
    top: 70
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.9
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
