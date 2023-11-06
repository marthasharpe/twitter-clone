import { EvilIcons } from "@expo/vector-icons";

import { Text, View } from "./Themed";

interface IconButtonProps {
  icon: React.ComponentProps<typeof EvilIcons>["name"];
  text?: string | number;
}

const IconButton = ({ icon, text }: IconButtonProps) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <EvilIcons name={icon} size={16} color="grey" />
      <Text
        style={{
          color: "grey",
          marginLeft: 5,
        }}
      >
        {text}
      </Text>
    </View>
  );
};

export default IconButton;
