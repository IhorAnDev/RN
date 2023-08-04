import {Button, StyleSheet, TextInput, View} from "react-native";
import {useState} from 'react';
import {styles} from "./styles/goalComponentStyles";

const GoalInput = ({addGoalHandler}) => {

    const [goal, setGoal] = useState('');

    function goalInputHandler(text) {
        setGoal(text);
    }

    function onAddGoalHandler() {
        addGoalHandler(goal);
        setGoal('');
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput onChangeText={goalInputHandler}
                       style={styles.textInput}
                       placeholder="Your course goal!"
                       value={goal}/>

            <Button onPress={onAddGoalHandler} title="Add Goal"/>
        </View>
    )
}


export default GoalInput;
