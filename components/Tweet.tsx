import { Image, Pressable, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Text, View } from "./Themed";
import { TweetType } from "../types";
import IconButton from "./IconButton";

interface TweetProps {
  tweet: TweetType;
}

export default function Tweet({ tweet }: TweetProps) {
  return (
    <Link href={`/tweet/${tweet.id}`} asChild>
      <Pressable style={styles.container}>
        <Image src={tweet.user.image} style={styles.userImage} />
        <View style={styles.tweetContainer}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.name}>{tweet.user.name}</Text>
            <Text style={styles.username}>@{tweet.user.username} 2h</Text>
            <Entypo
              name="dots-three-horizontal"
              size={12}
              color="grey"
              style={{ marginLeft: "auto" }}
            />
          </View>
          <Text style={styles.content}>{tweet.content}</Text>
          {tweet.image && <Image src={tweet.image} style={styles.image} />}
          <View style={styles.footer}>
            <IconButton icon="comment" text={tweet.numberOfComments || 0} />
            <IconButton icon="retweet" text={tweet.numberOfRetweets || 0} />
            <IconButton icon="heart" text={tweet.numberOfLikes || 0} />
            <IconButton icon="share-apple" text={tweet.impressions || 0} />
          </View>
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "lightgrey",
    backgroundColor: "white",
  },
  tweetContainer: {
    flex: 1,
    marginLeft: 10,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  image: {
    width: "100%",
    aspectRatio: 16 / 9,
    borderRadius: 15,
    marginTop: 10,
  },
  name: {
    fontWeight: "bold",
  },
  username: {
    color: "grey",
    marginLeft: 5,
  },
  content: {
    marginTop: 5,
    fontSize: 16,
    lineHeight: 16 * 1.5,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
});
