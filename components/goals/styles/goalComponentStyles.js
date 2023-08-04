import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
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
    textInput: {
        padding: 8,
        paddingVertical: 4,
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8
    },
    listGoalsContainer: {
        flex: 5
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
