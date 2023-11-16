import { Entypo } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Pressable, useColorScheme, StyleSheet, View } from "react-native";

export default function NewTweet() {
  return (
    <Pressable style={styles.floatingButton}>
      {({ pressed }) => (
        <Link href="/new-tweet" asChild>
          <Entypo
            name="plus"
            size={28}
            color={"white"}
            style={{ opacity: pressed ? 0.5 : 1 }}
          />
        </Link>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  floatingButton: {
    position: "absolute",
    bottom: 90,
    right: 10,
    backgroundColor: "#1C9BF0",
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});
