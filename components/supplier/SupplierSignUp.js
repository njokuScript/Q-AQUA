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
      <KeyboardAvoidingView behaviour='padding' style={styles.wrapper}>
        <View style={styles.container}>
          <View style={styles.name}>
            <TextInput placeholder='First Name' maxLength={30} />
            <TextInput placeholder='Last Name' maxLength={30} />
            <TextInput placeholder='Email' maxLength={40} />
            <TextInput placeholder='Water Source' />
            <TextInput
              placeholder='Phone Number'
              keyboardType='numeric'
              maxLength={11}
            />
            <TextInput placeholder='Location' />
            <TextInput placeholder='vehicle Number' maxLength={10} />
            <TextInput
              placeholder='Password'
              maxLength={50}
              secureEntryText={true}
            />
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
  }
});
