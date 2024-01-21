import { View, Text, StyleSheet, Dimensions } from "react-native";
import { TransitData, TransitUnit } from "../lib/routes";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const BusBlockInfo = ({ transitUnit }: { transitUnit: TransitUnit | null }) => {
  if (!transitUnit) {
    return <Text>Select a transit unit</Text>;
  }

  return (
    <View>
      <Text>
        {transitUnit.short_name} - {transitUnit.long_name}
      </Text>
      <View>
        <View>
          <Text></Text>
        </View>
      </View>
    </View>
  );
};

export default BusBlockInfo;
