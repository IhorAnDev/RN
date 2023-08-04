import {useState} from 'react';
import {Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import GoalTemplate from "./components/goals/GoalTemplate";
import GoalInput from "./components/goals/GoalInput";
import {styles} from "./components/goals/styles/goalComponentStyles";

export default function App() {

    const [goals, setGoals] = useState([]);

    function addGoalHandler(goal) {
        setGoals(currentCourseGoals => [
            ...currentCourseGoals,
            {text: goal, id: Math.random().toString()}
        ]);

    }

    function deleteGoalHandler(id) {
        setGoals(currentCourseGoals => {
            return currentCourseGoals.filter(goal => goal.id !== id);
        });
    }

    return (
        <View style={styles.appContainer}>
            <GoalInput addGoalHandler={addGoalHandler}/>
            <GoalTemplate onDeleteGoal={deleteGoalHandler} goals={goals}/>
        </View>
    );
}

