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
import * as firebase from "firebase";
import ApiKey from "../constants/ApiKey";
export default class SupplierSignUp extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#42A5F5"
    },
    headerTitleStyle: {
      color: "#fff"
    },
    headerBackTitleStyle: {
      color: "#fff"
    },
    headerTintColor: "#fff",
    title: "Register"
  };
  render() {
    return (
      <View>
        <Text>HEY</Text>
      </View>
    );
  }
}
