import {Pressable, Text, View} from "react-native";
import {styles} from "./styles/goalComponentStyles";

function GoalItem({text, onGoalDelete, id}) {

    return (
        <Pressable onPress={onGoalDelete.bind(this, id)}>
            <View style={styles.goalItem}>
                <Text style={styles.goalText}>{text}</Text>
            </View>
        </Pressable>
    )
}

export default GoalItem;
