import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 2,
    },
    gridView: {

    },
    row: {
        left: 20,
        padding: 15,
        backgroundColor: 'white',
        width: 500,
        height: 80,
        borderRadius: 20,
    },
    itemContainer: {
        height: 250,
        width: 340,
        elevation: 5,
        marginTop: 42,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,
        elevation: 19,
    },

    wrapper: {
        marginTop: 30,
        flex: 1
    },
    spinner: {
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        marginBottom: 350,
        left: 150

    },
});