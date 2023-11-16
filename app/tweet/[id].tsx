import Tweet from "../../components/Tweet";
import tweets from "../../assets/data/tweets";
import { Stack, useLocalSearchParams } from "expo-router";
import { Text, View } from "../../components/Themed";

export default function TweetScreen() {
  const { id } = useLocalSearchParams();

  const tweet = tweets.find((tweet) => tweet.id === id);

  if (!tweet) {
    return <Text> Tweet {id} not found.</Text>;
  }

  return (
    <View>
      <Stack.Screen options={{ title: "Tweet" }} />
      <Tweet tweet={tweet} />
    </View>
  );
}
