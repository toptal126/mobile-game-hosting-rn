
import { StyleSheet} from 'react-native';


import { windowWidth,windowHeight } from '../../config/config';

export const widthRate = windowWidth / 360;

export const styles = StyleSheet.create({
	container:{
		width: windowWidth,
		height:windowHeight,
		display: "flex", 
		flexDirection: "row", 
		flexWrap: "wrap",
		backgroundColor:'#242A38'
	},
	topHeader:{
		height:50,
		width:windowWidth,
		paddingHorizontal:21,
		justifyContent:'center'
	},
	mainContainer:{
		alignItems:'center',
		width:windowWidth,
		marginTop:10
	},
	welcomeText:{
		color:'white',
		fontSize:24,
		lineHeight:32,
		fontWeight:'bold',
		letterSpacing:0.5
	},
	welcomeDesc:{
		color:'#858C9D',
		marginTop:4,
		lineHeight:20,
		fontSize:14,
		letterSpacing:0.5
	},
	checkBoxComp:{
		width:296*widthRate,
		marginTop:16
	},
	formInput:{
		width:296*widthRate,
		height:40,
		borderRadius:8,
		backgroundColor:'#595D68',
		alignItems:'center',
		paddingHorizontal:9,
		flexDirection:'row',
		// justifyContent:'space-between',
		marginTop:16
	},
	formtextInput:{
		fontSize:14,
		marginLeft:5,
		lineHeight:20,
		color:'white',
		width:260*widthRate
	},
	formtextInput_password:{
		fontSize:14,
		marginLeft:5,
		lineHeight:20,
		color:'white',
		width:240*widthRate
	},
	signInButton:{
		height:48,
		width:296 * widthRate,
		borderRadius:24,
		alignItems:'center',
		justifyContent:'center',
		flexDirection:'row'
	},
	signText:{
		color:'white',
		fontSize:16,
		fontWeight:'bold'
	},
	forgottext:{
		color:'white',
		fontSize:14,
		lineHeight:24
	},
	orText:{
		marginVertical:8,
		color:'white',
		lineHeight:20,
		fontSize:14,
		letterSpacing:1
	},
	verifyfooter:{
		marginTop:8,
		width:296*widthRate,
		height:20,
		justifyContent:'space-between',
		flexDirection:'row'
	}
});