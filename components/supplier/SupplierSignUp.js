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
      vehiclenumber: ""
    };
    //firebase initialize
    if (!firebase.apps.length) {
      firebase.initializeApp(ApiKey.firebaseConfig);
    }
  }
  componentDidMount() {
    this.authUnSubscriber = firebase.auth().onAuthStateChanged(authData => {
      this.setState(authData);
    });
    YellowBox.ignoreWarnings(["Encountered an error loading page"]);
    console.disableYellowBox = true;
    //this.firestoreUnsubscriber = this.ref.onSnapshot(this.onCollectionUpdate)
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
            onChangeText={vehiclenumber => this.setState({ vehiclenumber })}
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

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.verifyAsync}
          >
            <Text style={styles.buttonText}>CONTINUE</Text>
          </TouchableOpacity>
          <View style={styles.signinContent}>
            <Text style={styles.signinText}>Already have an account?</Text>
            <TouchableOpacity
              style={styles.signinButton}
              onPress={() => this.signInAsync}
            >
              <Text style={styles.signinButtonText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
  //verify details
  verifyAsync = async () => {
    //await AsyncStorage.setItem('userToken', 'rider');
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (
      this.state.firstname.trim() === "" ||
      // this.state.email.trim() === "" ||
      this.state.mobile.trim() === "" ||
      this.state.lastname.trim() === "" ||
      this.state.password.length == ""
    ) {
      Toast.show("All inputs must be filled!", Toast.SHORT, Toast.TOP);
      return;
    }
    // if (reg.test(this.state.email) === false) {
    //   Toast.show("INVALID EMAIL!", Toast.SHORT, Toast.TOP);
    //   return;
    // }
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(
        authData => {
          //create a supplier node with:firstname,lastname,phone,profile,vehicle number

          if (firebase.auth().currentUser) {
            userId = firebase.auth().currentUser.uid;
            if (userId) {
              AsyncStorage.setItem("SupplierId", userId);
              firebase
                .database()
                .ref(`Suppliers/${userId}/Details`)
                .set({
                  firstname: this.state.firstname,
                  lastname: this.state.lastname,
                  email: this.state.email,
                  phone: this.state.mobile,
                  vehicle_number: this.state.vehiclenumber,
                  profile_image: "default"
                })
                .then(
                  () => {
                    Toast.show("Supplier added successfully", Toast.SHORT);
                    this.setState({ color: "#ffffff" });
                    this.props.navigation.navigate("App2");
                  },
                  error => {
                    Toast.show(error.message, Toast.SHORT);
                    this.setState({ color: "#ffffff" });
                  }
                );
            }
          }

          //this.props.navigation.navigate('App2');
        },
        error => {
          Toast.show("error:" + error.message, Toast.SHORT, Toast.TOP);
          this.setState({ color: "#ffffff" });
        }
      );

    //.catch(error => this.setState({ errorMessage: error.message }))
  };
}

//-------------------------------------------------------------------------------------------------//
//SEND VERIFICATION MESSAGE
//------------------------------------------------------------------------------------------------//

const sendSMSVerification = (res, uid, phone) => {
  const code = Math.floor(Math.random() * 899999 + 100000);
  const expiration = Date.now() + 2 * 60000; // Expires in 2 minutes
  const verification = { code, expiration, valid: true };

  twilio.messages
    .create({
      body: `Your code is ${code}`,
      to: twilioConfig.phone_dev ? twilioConfig.phone_dev : phone,
      from: twilioConfig.phone_from
    })
    .then(message => {
      firebase
        .database()
        .ref(`/users/${uid}/verification`)
        .set(verification)
        .then(() => {
          return res.send({ success: true });
        })
        .catch(err => {
          return res.status(422).send(err);
        });
    })
    .catch(err => {
      return res.status(422).send(err);
    });
};

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
  },
  signinButtonText: {
    color: "#6C63FF",
    fontSize: 16,
    paddingLeft: 5
  }
});
