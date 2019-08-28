import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { createSwitchNavigator, createStackNavigator } from "react-navigation";
import * as firebase from "firebase";
import React from "react";
//import ApiKey from "./components/constants/ApiKey";
import ScreenChoice from "./components/main/ScreenChoice";
import AuthLoadingScreen from "./components/main/AuthLoadingScreen";
import SupplierLogSign from "./components/supplier/SupplierLogSign";
import CustomerHome from "./components/customer/CustomerHome";
import SupplierHome from "./components/supplier/SupplierHome";

class App extends React.Component {
  constructor(props) {
    super(props);
    firebase.initializeApp(ApiKey.FirebaseConfig);
  }

  render() {
    return (
      <ImageBackground
        source={require("./components/main/image/bimage.png")}
        style={styles.container}
      >
        <View>
          <ScreenChoice />
        </View>
      </ImageBackground>
    );
  }
}

const AuthStack = createStackNavigator(
  {
    Home: ScreenChoice,
    SupplierScreen: SupplierLogSign,
    CustomerScreen: CustomerHome
  },
  {
    initialRouteName: "Home"
  }
);

const AuthStackCustomer = createStackNavigator({ Customer: CustomerHome });
const AuthStackSupplier = createStackNavigator({ Supplier: SupplierHome });

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App1: AuthStackCustomer,
    App2: AuthStackSupplier,
    Auth: AuthStack
  },
  {
    initialRouteName: "AuthLoading"
  }
);
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center"
  }
});
