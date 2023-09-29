import React from "react";
import { Text } from "react-native"; // Muutettu "Text" import-lausekkeen oikeaksi

export default function Row({ person }) {
  return <Text>{person.lastname}</Text>;
}
