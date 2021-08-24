
import { StyleSheet} from 'react-native';


import { windowWidth,windowHeight } from '../../config/config';

export const styles = StyleSheet.create({
	topTitle:{
		color:'white',
		fontSize:24,
		fontFamily:'Inter-SemiBold',
		lineHeight:32
	},
	tablabel:{
		color:'white',
		fontSize:14,
		fontFamily:'Inter-SemiBold',
		lineHeight:24
	},
	tabIndicator:{
		backgroundColor:'rgba(255, 121, 52, 1)',
		width:8,
		height:8,
		borderRadius:50,
		position:'absolute',
		bottom:8
	},
	topRightCircle:{
		marginLeft:5,
		width:30,
		height:30,
		borderRadius:50,
		alignItems:'center',
		justifyContent:'center'
	},
	topRightHeader:{
		borderRadius:24,
		marginRight:16,
		flexDirection:'row',
		alignItems:'center',
		width:70,
		height:40,
		backgroundColor:'#181E2C'
	},
	topHeader:{
		height:50,
		width:windowWidth,
		paddingHorizontal:16,
		alignItems:'center',
		flexDirection:'row',
		justifyContent:'space-between',
		marginTop:25
	}
});