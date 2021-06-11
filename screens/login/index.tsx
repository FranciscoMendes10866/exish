import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

export default function Login({ navigation }: any) {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.landing}>
        <ImageBackground
          style={styles.image}
          source={{
            uri: "https://bit.ly/3iwvXjq",
          }}
        >
          <Text style={styles.text}>EXISH</Text>
        </ImageBackground>
      </View>
      <View>
        <View style={styles.inputWrapper}>
          <TextInput style={styles.input} placeholder="Username" />
          <TextInput style={styles.input} placeholder="Password" />
        </View>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => console.log("Logged in!")}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column",
  },
  landing: {
    alignItems: "center",
  },
  image: {
    resizeMode: "cover",
    height: 450,
    width: "100%",
  },
  text: {
    color: "white",
    textAlign: "left",
    alignItems: "center",
    marginLeft: 20,
    marginTop: 250,
    fontSize: 48,
    fontWeight: "bold",
  },
  loginButton: {
    backgroundColor: "#2455EF",
    paddingVertical: 16,
    marginHorizontal: 20,
    borderRadius: 6,
  },
  loginButtonText: {
    fontSize: 14,
    color: "white",
    textAlign: "center",
  },
  registerButton: {
    marginTop: 20,
    backgroundColor: "#c6d3fd",
    paddingVertical: 16,
    marginHorizontal: 20,
    borderRadius: 6,
  },
  registerButtonText: {
    fontSize: 14,
    color: "#2455EF",
    textAlign: "center",
  },
  inputWrapper: {
    flexDirection: "column",
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  input: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#edf2f6",
    borderRadius: 12,
    marginTop: 10,
    marginBottom: 10,
  },
});
