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
        <Text style={{ bottom: 230, color: "white", fontSize: 17 }}>
          Get water at your doorstep within minutes
        </Text>

        <View style={styles.screenContainer}>
          <TouchableOpacity>
            <Text style={styles.button}>Continue as a Water Supplier</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.screenContainer}>
          <TouchableOpacity onPress={this._navigateCustomer}>
            <Text style={styles.button2}>Continue as a Customer</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  _navigateSupplier = async () => {
    this.props.navigation.navigate("RiderScreen");
  };
  _navigateCustomer = () => {
    this.props.navigation.navigate("CustomerScreen");
  };
  
const AuthStackCustomer = createStackNavigator({ Customer: CustomerHome });

}

const styles = StyleSheet.create({
  screenContainer: {
    textAlign: "center",
    top: 70
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
