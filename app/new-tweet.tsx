import {
  StyleSheet,
  Image,
  TextInput,
  SafeAreaView,
  Button,
  KeyboardAvoidingView,
} from "react-native";
import { View, Text } from "../components/Themed";
import { Link } from "expo-router";

const user = {
  id: "u1",
  username: "VadimNotJustDev",
  name: "Vadim",
  image:
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png",
};

export default function NewTweet() {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={{ paddingHorizontal: 15 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link href="../">Cancel</Link>
          <Button title="Tweet" onPress={() => {}} />
        </View>
        <View style={styles.inputContainer}>
          <Image src={user.image} style={styles.image} />
          <TextInput
            multiline
            numberOfLines={5}
            style={{ flex: 1, marginLeft: 10 }}
            placeholder={"What's happening?"}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});
