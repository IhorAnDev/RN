import {Button, Modal, StyleSheet, TextInput, View, Image} from "react-native";
import React, {useState} from 'react';
import {styles} from "./styles/goalComponentStyles";

const GoalInput = ({addGoalHandler, modalStatus, openModal}) => {

    const [goal, setGoal] = useState('');

    function goalInputHandler(text) {
        setGoal(text);
    }

    function onAddGoalHandler() {
        if (goal.trim().length === 0) {
            return;
        }
        addGoalHandler(goal);
        setGoal('');
    }

    return (
        <Modal visible={modalStatus} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={ require('../../assets/image/goal_w.png')} />
                <TextInput onChangeText={goalInputHandler}
                           style={styles.textInput}
                           underlineColorAndroid="transparent"
                           placeholder="Your course goal!"
                           value={goal}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button onPress={onAddGoalHandler}
                                color="#761be3"
                                title="Add Goal"/>
                    </View>
                    <View style={styles.button}>
                        <Button onPress={() => openModal(false)}
                                color="#eb5e6e"
                                title="Cancel"/>
                    </View>
                </View>
            </View>
        </Modal>
    )
}


export default GoalInput;
