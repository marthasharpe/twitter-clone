import { Image, StyleSheet } from "react-native";

import { Text, View } from "./Themed";

interface TweetProps {
  tweet: {
    id: string;
    createdAt: string;
    user: {
      id: string;
      name: string;
      username: string;
      image?: string;
    };
    content: string;
    image?: string;
    numberOfComments?: number;
    numberOfRetweets?: number;
    numberOfLikes?: number;
  };
}

export default function Tweet({ tweet }: TweetProps) {
  return (
    <View style={styles.container}>
      <Image src={tweet.user.image} style={styles.userImage} />
      <View style={styles.tweetContainer}>
        <Text style={styles.name}>{tweet.user.name}</Text>
        <Text style={styles.content}>{tweet.content}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "lightgrey",
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
  name: {
    fontWeight: "bold",
  },
  content: {
    marginTop: 5,
    fontSize: 16,
    lineHeight: 16 * 1.5,
  },
});
