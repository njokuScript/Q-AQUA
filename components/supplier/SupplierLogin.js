import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  YellowBox,
  AsyncStorage,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Image,
  Platform,
  ActivityIndicator
} from "react-native";
import PhoneInput from "react-native-phone-input";
import Toast from "react-native-simple-toast";
import { Ionicons } from "@expo/vector-icons";
import * as firebase from "firebase";
import ApiKey from "../constants/ApiKey";

export default class SupplierLogin extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  render() {
    return (
      <KeyboardAvoidingView behaviour='padding' style={styles.wrapper}>
        <View style={styles.container}>
          <TextInput
            placeholder='Email Address'
            maxLength={30}
            style={styles.inputField}
            underlineColorAndroid='rgba(0,0,0,0)'
            onChangeText={email => this.setState({ email })}
          />
          <TextInput
            placeholder='Password'
            maxLength={50}
            secureTextEntry={true}
            style={styles.inputField}
            underlineColorAndroid='rgba(0,0,0,0)'
            onChangeText={password => this.setState({ password })}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
          <View style={styles.signupContent}>
            <Text style={styles.signupText}>Don't have an account?</Text>
            <TouchableOpacity
              style={styles.signupButton}
              onPress={this.navigateSupplierSignUp}
            >
              <Text>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  inputField: {
    backgroundColor: "#F3F3F3",
    width: 306,
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 16,
    marginVertical: 9
  },
  button: {
    backgroundColor: "#6C63FF",
    width: 306,
    height: 50,
    borderRadius: 10,
    paddingVertical: 6,
    marginVertical: 11
  },
  buttonText: {
    textAlign: "center",
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 20
  },
  textStyle: {
    color: "#2F2E41",
    alignItems: "center",
    justifyContent: "center",
    width: 300
  },
  signupContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  signupText: {
    color: "#2F2E41",
    fontSize: 16
  },
  signupButton: {
    color: "#6C63FF",
    fontSize: 16,
    fontWeight: "500"
  }
});
