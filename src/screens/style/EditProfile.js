
import { StyleSheet} from 'react-native';


import { windowWidth } from '../../config/config';

export const styles = StyleSheet.create({
	topRightHeader:{
		marginRight:16,
		flexDirection:'row',
		alignItems:'center',
		// width:70,
		// height:40
	},
	innerContainer:{
		flex: 1,
		justifyContent: "space-between"
	},
	container:{
		backgroundColor:'#2F3542',
		flex:1,
	},
	scrollContainer:{
		flex:1
	},
	profileBack:{
		width:windowWidth,
		height:windowWidth / 2
	},
	bottomBack:{
		width:windowWidth,
		height:32,
		marginTop:-32,
		zIndex:1,
		alignItems:'flex-end',
		justifyContent:'center'
	},
	updateButton:{
		width:70,
		height:16,
		marginRight:16,
		alignItems:'center',
		justifyContent:'center',
		flexDirection:'row',
		zIndex:1001
	},
	profileAvatarView:{
		marginLeft:16,
		flexDirection:'row',
		justifyContent:'space-between',
		alignItems:'center',
		zIndex:2
	},
	buttonText:{
		color:'white',
		fontFamily:'Inter-SemiBold',
		fontSize:12,
		marginLeft:6
	},
	profileAvatar:{
		width:120,
		height:120,
		borderWidth:2,
		borderRadius:100,
		borderColor:'white',
		marginTop:-60
	},
	editItem:{
		marginTop:16,
		marginHorizontal:16
	},
	fieldLabel:{
		fontSize:12,
		lineHeight:16,
		fontFamily:'Inter-Regular',
		color:'#858C9D'
	},
	fieldInput:{
		fontSize:14,
		lineHeight:24,
		fontFamily:'Inter-SemiBold',
		color:'white',
		margin:0,
		paddingHorizontal:0,
		paddingVertical:4,
		borderBottomWidth:1,
		borderColor:'rgba(133, 140, 157, 1)'
	},
	areaLabel:{
		color:'#858C9D',
		fontSize:12,
		lineHeight:16,
		letterSpacing:1,
		fontFamily:'Inter-SemiBold',
		marginHorizontal:16,
		marginTop:40
	}
});