import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Animated,
  Alert,
} from "react-native";
import { Button, useTheme } from "react-native-paper";
import React from "react";
import ButtonComp from "../components/Button";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const WelcomeScreen = ({ navigation }) => {
  /////////////////// THEME HOOK //////////////////
  const theme = useTheme();
  //////////////////  LOGO ANIMATION FROM MID TO TOP ///////////////////
  const logoAnimation = React.useRef(
    new Animated.Value(windowHeight / 2)
  ).current;
  const logoWidth = React.useRef(new Animated.Value(238)).current;
  const logoHeight = React.useRef(new Animated.Value(50)).current;

  ////////////////////// ANIMATION TIMING SET ///////////////////
  const [isVisible, setisVisible] = React.useState(false);
  setTimeout(() => {
    setisVisible(true);
  }, 2500);

  React.useEffect(() => {
    Animated.timing(logoAnimation, {
      toValue: 70,
      duration: 2000,
      delay: 2000,
      useNativeDriver: false,
    }).start(() => {});
    Animated.timing(logoWidth, {
      toValue: 170,
      duration: 1000,
      useNativeDriver: false,
    }).start(() => {});
    Animated.timing(logoHeight, {
      toValue: 35,
      duration: 1000,
      useNativeDriver: false,
    }).start(() => {});
  }, []);

  ////////////////////////// BUTTON EVENT CALL /////////////////
  const btnEvent = () => {
    // props.navigation.replace("HomeScreen");
    console.log(navigation);
    navigation.navigate("HomeScreen");
  };
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.primary }]}>
      <Animated.View
        style={[
          styles.animatedLogoContainer,
          { position: "absolute", top: logoAnimation },
        ]}
      >
        <Animated.Image
          style={[
            styles.animatedLogo,
            { width: logoWidth, height: logoHeight },
          ]}
          source={require("../../assets/images/logo.png")}
        />
      </Animated.View>
      {isVisible ? (
        <>
          <View style={styles.groceryImgContainer}>
            <Image
              style={styles.groceryImg}
              source={require("../../assets/images/Grocery.png")}
            />
          </View>
          <View style={styles.txtContainer}>
            <View
              style={{
                width: "100%",
                height: "50%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={styles.headingTxt}>Welcome To Price Comparison</Text>
            </View>
            <View
              style={{
                width: "100%",
                height: "50%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={styles.paraTxt}>
                This price comparison app for products will help {"\n"} to
                compare the price from various {"\n"} e-commerce websites,
              </Text>
            </View>
          </View>
          <View style={styles.btnContainer}>
            <ButtonComp
              onClick={btnEvent}
              buttonType="contained"
              buttonIcon=""
              isDisable={false}
              textColor="white"
              extraStyle={[
                styles.btn,
                { backgroundColor: theme.colors.secondary },
              ]}
              buttonValue="Let's Start"
            />
          </View>
        </>
      ) : (
        ""
      )}
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  animatedLogoContainer: { zIndex: 1 },
  animatedLogo: { width: 238, height: 50 },
  groceryImgContainer: {
    flex: 0.6,
    justifyContent: "center",
    alignItems: "center",
    width: windowWidth,
  },
  groceryImg: { width: 180, height: 250, marginTop: 80 },
  txtContainer: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
    width: windowWidth,
  },
  headingTxt: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    width: "100%",
    height: "100%",
    textAlignVertical: "center",
  },
  paraTxt: {
    textAlign: "center",
    color: "white",
    height: "100%",
    width: "100%",
    textAlignVertical: "center",
  },
  btnContainer: {
    width: windowWidth,
    // width: "100%",
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
    // alignSelf: "center",
  },
  btn: {
    width: "80%",
    margin: "auto",
    height: 50,
    justifyContent: "center",
    borderRadius: 20,
  },
});
