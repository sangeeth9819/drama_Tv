import { StyleSheet } from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const PRIMARY_COLOR = "#7444C0";
const SECONDARY_COLOR = "#5636B8";
const WHITE = "#FFFFFF";
const GRAY = "#757E90";
const DARK_GRAY = "#363636";
const BLACK = "#000000";

const ONLINE_STATUS = "#46A575";
const OFFLINE_STATUS = "#D04949";

const STAR_ACTIONS = "#FFA200";
const LIKE_ACTIONS = "#B644B2";
const DISLIKE_ACTIONS = "#363636";
const FLASH_ACTIONS = "#5028D7";

const ICON_FONT = "tinderclone";
export default StyleSheet.create({
        gridView: {
        flex: 1,
    },
    itemContainer: {
        justifyContent: 'flex-end',
        padding: 10,
        height: 200,
        width: 145,
        marginTop: 20,
        marginLeft: 10,
        borderRadius: 10,
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
        flex: 1,
    
    },
    itemName: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        top: 20,
        fontSize: 16,
        color: '#363636',
        fontWeight: '600',
        fontWeight: 'bold',
    },
    spinner: {
       
      

    },
    itemCode: {

        fontWeight: '600',
        fontSize: 12,
        color: '#000000',
    },
    spinnerTextStyle: {
        color: '#FFF',
    },
    status: {
		paddingBottom: 10,
		flexDirection: "row",
        alignItems: "center",
      justifyContent:"center",
        marginTop:25,
	},
	statusText: {
		color: GRAY,
		fontSize: 12
	},
	online: {
		width: 6,
		height: 6,
		backgroundColor: OFFLINE_STATUS,
		borderRadius: 3,
		marginRight: 4
	},
	offline: {
		width: 6,
		height: 6,
		backgroundColor: ONLINE_STATUS,
		borderRadius: 3,
		marginRight: 4
	},

});