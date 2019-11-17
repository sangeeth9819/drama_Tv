import { StyleSheet } from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
    container: {
        flex: 2,
    },
   
    itemContainer: {
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        height: hp('20%'),
        width: wp('95%'),
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,
        elevation: 19,
        marginBottom:15,
    },

    wrapper: {
        marginTop: 20,
        flex: 1
    },
    spinner: {


    },
});