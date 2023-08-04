import {FlatList, StyleSheet, Text, View} from "react-native";
import {styles} from "./styles/goalComponentStyles";
import GoalItem from "./GoalItem";

const GoalTemplate = ({goals, onDeleteGoal}) => {

    return (
        <View style={styles.listGoalsContainer}>
            <FlatList
                keyExtractor={item => item.id}
                alwaysBounceVertical={true}
                data={goals} renderItem={(itemData) => (
                <GoalItem id={itemData.item.id} onGoalDelete={onDeleteGoal} text={itemData.item.text}/>
            )}/>
        </View>
    )
}
export default GoalTemplate;
