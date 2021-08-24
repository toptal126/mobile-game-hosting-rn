
import { StyleSheet} from 'react-native';


import { windowWidth,windowHeight } from '../../config/config';

export const styles = StyleSheet.create({
	
	container:{
		width: windowWidth,
		height:windowHeight,
		display: "flex", 
		flexDirection: "row", 
		flexWrap: "wrap",
		backgroundColor:'#2F3542'
	},
	userAvatar:{
		width:51,
		height:51,
		borderWidth: 3,
		borderColor:'#242A38',
		borderRadius:50
	},
	notiContainer_yellow:{
		borderRadius:50,
		backgroundColor:'#FFC542',
		width:16,
		height:16,
		zIndex:100,
		position:'absolute',
		bottom:0,
		right:0,
		borderWidth:3,
		borderColor:'#242A38'
	},
	notiContainer_green:{
		borderRadius:50,
		backgroundColor:'#3DD598',
		width:16,
		height:16,
		zIndex:100,
		position:'absolute',
		bottom:0,
		right:0,
		borderWidth:3,
		borderColor:'#242A38'
	},
	notiContainer_grey:{
		borderRadius:50,
		backgroundColor:'#858C9D',
		width:16,
		height:16,
		zIndex:100,
		position:'absolute',
		bottom:0,
		right:0,
		borderWidth:3,
		borderColor:'#242A38'
	},
	liveContainer:{
		borderRadius:4,
		backgroundColor:'#f44336',
		width:30,
		height:16,
		zIndex:100,
		position:'absolute',
		bottom:0,
		alignItems:'center',
		justifyContent:'center'
	},
	liveText:{
		color:'white',
		fontWeight:'bold',
		fontSize:10
	},
	userContainer:{
		marginTop:16,
		marginLeft:4,
		height:80
	},
	userName:{
		color:'white',
		marginTop:8,
		fontSize:12,
		fontFamily:'Inter-Regular'
	},
	userName_avatar:{
		color:'white',
		marginTop:4,
		fontSize:12
	},
	userItemContainer:{
		marginLeft:12,
		alignItems:'center',
		justifyContent:'center'
	},
	userAvatarContainer:{
		width:48,
		height:48,
		borderRadius:50,
		backgroundColor:'#595D68',
		resizeMode:'stretch',
		justifyContent:'center',
		alignItems:'center'
	},
	userAvatarContainerWithBorder:{
		width:56,
		height:56,
		borderRadius:50,
		backgroundColor:'#595D68',
		resizeMode:'stretch',
		justifyContent:'center',
		alignItems:'center',
		borderWidth:1,
		// borderColor:'rgba(240, 152, 25, 1)',
		backgroundColor:'#242A38'
	},
	userAvatarContainerWithBorder_grey:{
		width:56,
		height:56,
		borderRadius:50,
		backgroundColor:'#595D68',
		resizeMode:'stretch',
		justifyContent:'center',
		alignItems:'center',
		borderWidth:1,
		borderColor:'rgba(133, 140, 157, 1)',
		backgroundColor:'#242A38'
	},
	scrollContainer:{
		marginTop:4,
		marginLeft:1,
		height:windowHeight - 195,
	},
	messageItem:{
		width:windowWidth - 32,
		flexDirection:'row',
		marginTop:12
	},
	msgUserAvatar:{
		width:48,
		borderRadius:50,
		height:48
	},
	msgContent:{
		marginLeft:8,
		borderBottomWidth:1,
		width:windowWidth - 90,
		borderBottomColor:'rgba(89, 93, 104, 1)',
		paddingBottom:12
	},
	msgContentLine:{
		flexDirection:'row',
		justifyContent:'space-between'
	},
	msgUserName:{
		color:'white',
		fontFamily:'Inter-SemiBold',
		fontSize:16,
		lineHeight:24
	},
	msgDatetime:{
		color:'rgba(133, 140, 157, 1)',
		fontFamily:'Inter-Regular',
		fontSize:12
	},
	msgText:{
		marginLeft:8,
		color:'rgba(133, 140, 157, 1)',
		fontFamily:'Inter-Regular',
		fontSize:14
	},
	msgText_red:{
		marginLeft:8,
		color:'rgba(244, 67, 54, 1)',
		fontFamily:'Inter-Regular',
		fontSize:14
	},
	msgNotiCircle:{
		backgroundColor:'rgba(255, 121, 52, 1)',
		width:20,
		height:20,
		alignItems:'center',
		justifyContent:'center',
		borderRadius:50
	},
	msgNotiCount:{
		color:'white',
		fontFamily:'Inter-SemiBold',
		fontSize:10
	},
	msgTyping:{
		color:'white',
		fontSize:12,
		fontFamily:'Inter-Regular'
	},
	footer:{
		width:windowWidth,
		paddingHorizontal:26,
		height:48,
		alignItems:'center',
		justifyContent:'space-between',
		flexDirection:'row',
		backgroundColor:'rgba(36, 42, 56, 1)'
	},
	videoUserAvatarContainer:{
		borderRadius:50,
		flexDirection:'row',
		width:48,
		height:48
	},
	videoOtherUserContainer:{
		width:24,
		height:48
	},
	videoMainUser:{
		width:24,
		height:48,
		resizeMode:'cover'
	},
	videoOtherUser:{
		width:24,
		height:24,
		resizeMode:'cover'
	}
});