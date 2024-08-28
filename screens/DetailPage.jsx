import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import React from "react";

const DetailPage = ({ navigation, stock, updatestock }) => {
  return (
    <View style={styles.container}>
      <Text>Detail Page</Text>
      <Text>First Stock : {stock.first}</Text>
      <Text>Second Stock : {stock.second}</Text>
      <Text>Third Stock : {stock.third}</Text>

      <Button title="Update first Stock" onPress={() => updatestock("first")} />
      <View style={styles.btnhold}>
        <TouchableOpacity
          style={styles.btns}
          onPress={() => navigation.push("Home")}
        >
          Home Page
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btns}
          onPress={() => navigation.goBack()}
        >
          Go Back
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  btns: {
    width: "40%",
    height: 40,
    backgroundColor: "orangered",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 12,
  },
  btnhold: {
    flexDirection: "row",
    width: "100%",
    gap: 30,
    justifyContent: "center",
    marginTop: 30,
  },
});
