
import { StyleSheet} from 'react-native';


import { windowWidth,windowHeight } from '../../config/config';

export const styles = StyleSheet.create({
	
	container:{
		backgroundColor:'#2F3542',
		flex:1,
	},
	scrollContainer:{
		marginTop:4,
		marginLeft:16,
		marginRight:16,
		flex:1,
		paddingVertical:8
	},
	userAvatar:{
		width:32,
		height:32,
		borderRadius:50
	},
	notiContainer_yellow:{
		borderRadius:50,
		backgroundColor:'#FFC542',
		width:8,
		height:8,
		zIndex:100,
		position:'absolute',
		bottom:0,
		right:0,
		borderWidth:1,
		borderColor:'rgba(255, 255, 255, 1)'
	},
	userAvatarContainer:{
		height:32,
		borderRadius:50
	},
	navTitle:{
		alignItems:'center',
		flexDirection:'row'
	},
	navUserName:{
		color:'white',
		fontSize:16,
		lineHeight:24,
		fontFamily:'Inter-SemiBold',
		marginLeft:8
	},
	navRightContainer:{
		flexDirection:'row',
		justifyContent:'space-between'
	},
	navRightButton:{
		marginRight:18
	},
	footer:{
		width:windowWidth,
		height:64,
		alignItems:'center',
		flexDirection:'row',
		backgroundColor:'rgba(36, 42, 56, 1)'
	},
	addBarContainer:{
		width:windowWidth,
		height:76,
		backgroundColor:'#2F3542'
	},
	addBarItem:{
		width:40,
		height:40,
		borderRadius:50,
		alignItems:'center',
		justifyContent:'center'
	},
	addBarText:{
		fontSize:12,
		fontFamily:'Inter-Regular',
		lineHeight:16,
		marginTop:4,
		color:'white',
		textAlign:'center'
	},
	addBarBtnContainer:{
		justifyContent:'center',
		marginRight:24
	},
	getMsgItem:{
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'#181E2C',
		alignSelf:'flex-start',
		width:'auto',
		paddingHorizontal:12,
		paddingVertical:8,
		borderRadius:8,
		marginBottom:8
	},
	sendMsgItem:{
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'#1DA1F2',
		alignSelf:'flex-end',
		width:'auto',
		paddingVertical:8,
		paddingHorizontal:12,
		borderRadius:8,
		marginBottom:8
	},
	getMsgText:{
		color:'white',
		fontFamily:'Inter-Regular',
		maxWidth: 0.6 * windowWidth,
		fontSize:14,
		lineHeight:24
	},
	getMsgTime:{
		color:'rgba(133, 140, 157, 1)',
		fontSize:12,
		lineHeight:16,
		marginBottom:16
	},
	msgTitle:{
		fontSize:12,
		fontFamily:'Inter-Regular',
		color:'rgba(133, 140, 157, 1)',
		alignSelf:'flex-start'
	},
	msgInputContainer:{
		height:48,
		marginLeft:16,
		marginRight:16,
		width: windowWidth - 80 ,
		flexDirection:'row',
		alignItems:'center',
		borderRadius:8,
		backgroundColor:'#181E2C'
	},
	msgInput:{
		width: windowWidth - 80 - 32 - 24,
		marginHorizontal:12,
		fontSize:14,
		color:'white',
		fontFamily:'Inter-Regular'
	},
	innerContainer:{
		flex: 1,
		justifyContent: "space-between"
	}
});