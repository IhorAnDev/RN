import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Button, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';

export default function App() {

    const [goal, setGoal] = React.useState('');
    const [goals, setGoals] = React.useState([]);

    function goalInputHandler(text) {
        setGoal(text);
    }

    function addGoalHandler() {
        if (goal.trim() !== '') {
            setGoals(currentCourseGoals => [...currentCourseGoals, goal]); // Add the new goal to the goalsList array
            setGoal(''); // Clear the input after adding the goal
        }
    }

    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput onChangeText={goalInputHandler}
                           style={styles.textInput}
                           placeholder="Your course goal!"
                           value={goal}/>

                <Button onPress={addGoalHandler} title="Add Goal"/>
            </View>
            <View style={styles.listGoalsContainer}>
                <ScrollView>
                    {goals.map((goal, index) => (
                        <View style={styles.goalItem} key={index}>
                            <Text style={styles.goalText}>{goal}</Text>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        paddingTop: 50,
        paddingHorizontal: 16,
        flex: 1,
        backgroundColor: '#F7F6D8',
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        flex: 1
    },
    listGoalsContainer: {
        flex: 5
    },
    textInput: {
        padding: 8,
        paddingVertical: 4,
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8
    },

    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        padding: 8,
    },
    goalText: {
        color: 'white',
    }
});
