import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    imagebutton: {
        backgroundColor: '#f44336',
        width: 50,
        height: 50,
        borderRadius: 100,
    },

    buttonStyle4: {
        fontWeight: 'bold',
    },

    itemCode: {
        fontWeight: '100',
        fontSize: 8,
        color: '#fff',
    },

    row: {
        left: 20,
        backgroundColor: 'white',
        borderRadius: 20,
    },
    itemContainer: {
        height: 130,
        marginLeft: 10,
        width: 340,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
            borderRadius: 4,
            borderWidth: 0.5,
            borderColor: '#d6d7da',
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 10,
        width: 375,
        marginTop: 20,
        marginLeft: 6,
        borderRadius: 20,
        padding: 20,
        height: 108,
    },
    wrapper: {
        marginTop: 50,
        flex: 1
    },
    itemName: {
        fontSize: 14,
        left: 200,
        height: 100,
        width: 120,
        bottom: 100,
        color: 'black',
        fontWeight: 'bold',

    },
    spinner: {
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        marginBottom: 350,
        left: 150

    },

});