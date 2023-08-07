import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    appContainer: {
        paddingTop: 50,
        paddingHorizontal: 16,
        flex: 1,
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        padding: 16,
        backgroundColor: '#311b6b',
    },
    textInput: {
        padding: 10,
        borderColor: '#d7c5ec',
        backgroundColor: '#d7c5ec',
        color: '#1923ee',
        borderRadius: 6,
        width: '100%',
    },
    listGoalsContainer: {
        flex: 5
    },
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#761be3',

    },
    pressedItem: {
        opacity: 0.5
    },
    goalText: {
        color: 'white',
        padding: 8,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16
    },
    button: {
        width: '30%',
        marginHorizontal: 8
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    }
});
