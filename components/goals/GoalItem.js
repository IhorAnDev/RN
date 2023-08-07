import {Pressable, Text, View} from "react-native";
import {styles} from "./styles/goalComponentStyles";

function GoalItem({text, onGoalDelete, id}) {

    return (

        <View style={styles.goalItem}>
            <Pressable android_ripple={{color: "#33204BFF"}}
                       onPress={onGoalDelete.bind(this, id)}
                       style={({pressed}) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalText}>{text}</Text>
            </Pressable>
        </View>

    )
}

export default GoalItem;
