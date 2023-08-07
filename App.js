import React, {useState} from 'react';
import {Button, View} from 'react-native';
import GoalTemplate from "./components/goals/GoalTemplate";
import GoalInput from "./components/goals/GoalInput";
import {styles} from "./components/goals/styles/goalComponentStyles";
import {StatusBar} from "expo-status-bar";

export default function App() {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [goals, setGoals] = useState([]);

    function addGoalHandler(goal) {
        setGoals(currentCourseGoals => [
            ...currentCourseGoals,
            {text: goal, id: Math.random().toString()}
        ]);
        openModal(false);
    }

    function deleteGoalHandler(id) {
        setGoals(currentCourseGoals => {
            return currentCourseGoals.filter(goal => goal.id !== id);
        });
    }

    function openModal(status) {
        setModalIsOpen(status);
    }

    return (
        <>
            <StatusBar style="light"/>
            <View style={styles.appContainer}>
                <Button title="Add New Goal" color="#761be3" onPress={() => openModal(true)}/>
                <GoalInput modalStatus={modalIsOpen} openModal={openModal} addGoalHandler={addGoalHandler}/>
                <GoalTemplate onDeleteGoal={deleteGoalHandler} goals={goals}/>
            </View>
        </>
    );
}

