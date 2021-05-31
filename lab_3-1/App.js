import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useState } from "react";
import Facto from "./Ferma.js";

export default function App() {
  const [data, setData] = useState(null);
  const [res, setRes] = useState(null);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Please,enter your number"
        onChangeText={(numb) => {
          setData(numb);
          keyboardType = "numeric";
          console.log(data);
        }}
      />

<Text style={styles.expression}> {res && `${res.x} *  ${res.y}`}</Text>

      <View style = {styles.btn}>
      <Button
        title="calculate"
        color="white"
        onPress={() => {
          setRes(Facto(data));
        }}
        style={{height:50}}
      />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    top: 20,
    width: "90%",
    alignSelf: "center",
    marginVertical: 10,
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: "#9D9FE7",
    borderRadius: 5,
    color: "#222222",
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    top: 200,
    height: 50,
    width: 150,
    backgroundColor: "#9D9FE7",
    borderRadius: 10,
  },
  expression: {
    marginTop: 10,
    fontSize: 15,
  },
});

// const p = new Promise((res,rej)=>{
//   console.log('dsds');
//   res()

// })
// p.then((data)=>)