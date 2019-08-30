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
import SupplierSignUp from "./SupplierSignUp";
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
    //firebase initialize
    if (!firebase.apps.length) {
      firebase.initializeApp(ApiKey.firebaseConfig);
    }
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
          <TouchableOpacity style={styles.buttonCan}>
            <Text style={styles.buttonTextCan}>CANCEL</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.signInAsync}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.buttonText}>Reset Password</Text>
          </TouchableOpacity>
          <View style={styles.signupContent}>
            <Text style={styles.signupText}>Don't have an account?</Text>
            <TouchableOpacity
              style={styles.signupButton}
              onPress={this.verifyAsync}
            >
              <Text style={styles.signupButtonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
  signInAsync = async () => {
    //await AsyncStorage.setItem('userToken', 'rider');

    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (this.state.email.trim() === "") {
      Toast.show("email input must be filled!", Toast.SHORT, Toast.TOP);
      return;
    }
    if (this.state.password.length == "") {
      Toast.show("password must be filled!", Toast.SHORT, Toast.TOP);
      return;
    }
    if (this.state.email === false) {
      Toast.show("INVALID EMAIL!", Toast.SHORT, Toast.TOP);
      return;
    }
    //this.setState({animating:true})
    this.setState({ color: "#42A5F5" });
    //this.props.navigation.navigate('App1');
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(
        () => {
          AsyncStorage.setItem("SupplierId", firebase.auth().currentUser.uid);
          //AsyncStorage.setItem('userToken', 'rider');
          //create a rider node with:firstname,lastname,phone,profile
          this.setState({ color: "#ffffff" });

          this.props.navigation.navigate("App2");
        },
        error => {
          Toast.show("error:" + error.message, Toast.SHORT, Toast.TOP);
          this.setState({ color: "#ffffff" });
        }
      );
  };
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "white"
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  inputField: {
    backgroundColor: "#F3F3F3",
    width: 315,
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 16,
    marginVertical: 9
  },
  button: {
    backgroundColor: "#6C63FF",
    width: 315,
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
  buttonCan: {
    backgroundColor: "#DCEAF2",
    width: 315,
    height: 50,
    borderRadius: 10,
    paddingVertical: 6,
    marginVertical: 11
  },
  buttonTextCan: {
    textAlign: "center",
    color: "#707070",
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
  },
  signupButtonText: {
    color: "#6C63FF",
    fontSize: 16,
    paddingLeft: 10
  }
});
