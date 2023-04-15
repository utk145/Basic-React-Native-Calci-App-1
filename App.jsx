import React, { useState } from "react";
import { Text, View, StyleSheet, SafeAreaView, Switch } from "react-native";
import { myColors } from './src/styles/Colors';
import { ThemeContext } from "./src/context/ThemeContext";
import MyKeyboard from "./src/components/MyKeyboard";


export default function App() {

  // For toggling between light/dark theme
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView style={theme === "light" ? styles.container : [styles.container, { backgroundColor: "black" }]}>
        <Switch value={theme === "dark"} onValueChange={() => setTheme(theme === "light" ? "dark" : "light")} />
      {/* onChange is used in form elements like <input>, <textarea>, and <select>, while onValueChange is used in components that have a value prop, such as the Switch component you are using. */}

      <MyKeyboard/>
      </SafeAreaView>

    </ThemeContext.Provider>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 38,
  }
})