import { View, Text } from "react-native";

import Title from "../../components/Title";
import styles from "./styles";

export default function Profile() {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Title title={"Profile"} />
      <Text>Nome: {user.name}</Text>
      <Text>Email: {user.email}</Text>
      <Text>Idade: {user.age}</Text>
    </View>
  );
}
