import { StyleSheet } from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

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
        height: 170,
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
        width: wp('95%'),
        height: hp('16.7%'),
        marginTop: 20,
        marginLeft: 6,
        borderRadius: 20,
        padding: 20,
       
    },
    wrapper: {
        marginTop: 50,
        flex: 1
    },
    itemName: {
        fontSize: 14,
        left: 170,
        height: 120,
        width: 140,
        bottom: 130,
        color: 'black',
        fontWeight: 'bold',

    },
    spinner: {
        

    },
    
});