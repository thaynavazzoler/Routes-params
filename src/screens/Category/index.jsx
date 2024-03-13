import { View } from "react-native";

import Title from "../../components/Title";

import styles from "./styles.js";

export default function Category() {
  return (
    <View style={styles.container}>
      <Title title={"Category"} />
    </View>
  );
}
