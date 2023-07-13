import React from "react";
import { StyleSheet, Text, View } from "react-native";

const GoalItem = (props) => {
  return (
    /*react-native는 스타일 상속의 개념이 없습니다.*/
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    padding: 8,
    color: "white",
  },
  goalText: {
    color: "white",
  },
});
