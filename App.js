import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { createStackNavigator } from "react-navigation";

//Nav
const navigator = createStackNavigator({
  Main,
  Chat
});

export default navigator;
