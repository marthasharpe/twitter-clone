import Tweet from "../../components/Tweet";
import tweets from "../../assets/data/tweets";
import { Stack, useLocalSearchParams } from "expo-router";
import { Text, View } from "../../components/Themed";

export default function TweetScreen() {
  const { id } = useLocalSearchParams();

  const tweet = tweets.find((tweet) => tweet.id === id);

  if (!tweet) {
    return <Text> Tweet not found.</Text>;
  }

  return <Tweet tweet={tweet} />;
}
