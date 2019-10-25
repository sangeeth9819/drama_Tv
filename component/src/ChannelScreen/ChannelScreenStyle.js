import { StyleSheet } from 'react-native';

export default StyleSheet.create({
        gridView: {
        flex: 1,
    },
    itemContainer: {
        justifyContent: 'flex-end',
        padding: 10,
        height: 130,
        width: 140,
        marginTop: 20,
        marginLeft: 10,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 10.65,

        elevation: 6,
    },
    wrapper: {
        marginTop: 30,
        flex: 1
    },
    itemName: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        top: 10,
        fontSize: 16,
        color: '#6b6b47',
        fontWeight: '600',
        fontWeight: 'bold',
    },
    spinner: {
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        marginBottom: 350,
        left: 150

    },
    itemCode: {

        fontWeight: '600',
        fontSize: 12,
        color: '#000000',
    },
    spinnerTextStyle: {
        color: '#FFF',
    },

});