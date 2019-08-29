import React, { Component } from "react";
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
export default class SupplierSignUp extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      password: "",
      email: "",
      mobile: "",
      vehiclenumber: "",
      watersource: ""
    };
    //firebase initialize
    if (!firebase.apps.length) {
      firebase.initializeApp(ApiKey.FirebaseConfig);
    }
  }
  render() {
    return (
      <KeyboardAvoidingView behaviour='padding' style={styles.wrapper}>
        <View style={styles.container}>
          <TextInput
            placeholder='First Name'
            maxLength={30}
            style={styles.inputField}
            underlineColorAndroid='rgba(0,0,0,0)'
            onChangeText={firstname => this.setState({ firstname })}
          />
          <TextInput
            placeholder='Last Name'
            maxLength={30}
            style={styles.inputField}
            underlineColorAndroid='rgba(0,0,0,0)'
            onChangeText={lastname => this.setState({ lastname })}
          />
          <TextInput
            placeholder='Email'
            maxLength={40}
            style={styles.inputField}
            underlineColorAndroid='rgba(0,0,0,0)'
            onChangeText={email => this.setState({ email })}
          />
          <TextInput
            placeholder='Water Source'
            style={styles.inputField}
            underlineColorAndroid='rgba(0,0,0,0)'
            onChangeText={watersource => this.setState({ watersource })}
          />
          <TextInput
            placeholder='Mobile'
            keyboardType='numeric'
            maxLength={11}
            style={styles.inputField}
            underlineColorAndroid='rgba(0,0,0,0)'
            onChangeText={mobile => this.setState({ mobile })}
          />
          <TextInput
            placeholder='vehicle Number'
            maxLength={10}
            style={styles.inputField}
            underlineColorAndroid='rgba(0,0,0,0)'
            onChangeText={vehiclenumber => this.setState({ watersource })}
          />
          <TextInput
            placeholder='Password'
            maxLength={50}
            secureTextEntry={true}
            style={styles.inputField}
            underlineColorAndroid='rgba(0,0,0,0)'
            onChangeText={password => this.setState({ password })}
          />

          <Text style={styles.textStyle}>
            By signing Up, you agree to our Privacy Policy and Terms and
            Conditions
          </Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>CONTINUE</Text>
          </TouchableOpacity>
          <View style={styles.signinsContent}>
            <Text style={styles.signinText}>Already have an account?</Text>
            <TouchableOpacity
              style={styles.signinButton}
              onPress={this.navigateSupplierLogin}
            >
              <Text>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
  //verify details
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
  signinContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  signinText: {
    color: "#2F2E41",
    fontSize: 16
  },
  signinButton: {
    color: "#6C63FF",
    fontSize: 16,
    fontWeight: "500"
  }
});
