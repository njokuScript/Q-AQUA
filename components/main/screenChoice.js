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
      <ImageBackground
        source={require("../main/image/bimage.png")}
        style={styles.container}
      >
        <View>
          <Text style={styles.text}>Q-AQUA</Text>
          <Text style={{ bottom: 230 }}>
            Get water at your doorstep within minutes
          </Text>

          <View style={styles.button}>
            <Button>
              <Text style={styles.buttonText}>
                Continue as a Water Supplier
              </Text>
            </Button>
          </View>
          <View style={styles.button}>
            <Button>
              <Text style={styles.buttonText}>Continue as a Customer</Text>
            </Button>
          </View>
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
  },
  button: {}
});
