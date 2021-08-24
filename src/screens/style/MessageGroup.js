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
	scrollContainer:{
		height:windowHeight - 195,
		width:windowWidth - 32,
		marginLeft:16
	},
	groupLine:{
		flexDirection:'row',
		width:'100%',
		paddingHorizontal:8,
		marginTop:11,
		justifyContent:'space-between'
	},
	groupImg:{
		width:48,
		height:48
	},
	groupBoxCont:{
		alignItems:'center',
		justifyContent:'center',
		marginTop:4
	},
	groupTitle:{
		color:'white',
		fontSize:14,
		lineHeight:24,
		fontFamily:'Inter-SemiBold',
		marginTop:8
	},
	groupMembers:{
		marginTop:8,
		flexDirection:'row'
	},
	gMemImg:{
		width:24,
		height:24,
		borderRadius:50,
		borderWidth:2,
		borderColor:'rgba(36, 42, 56, 1)'
	},
	groupBox:{
		alignItems:'center',
		// justifyContent:'center',
		backgroundColor:'#242A38',
		marginTop:16,
		marginRight:16,
		borderRadius:16,
		width:windowWidth / 2 - 24,
		height:windowWidth / 2 - 24,
		shadowColor: "black",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 1,
		shadowRadius: 5,
		elevation: 6
	},
	groupBoxCircle:{
		borderRadius:50,
		alignItems:'center',
		justifyContent:'center',
		backgroundColor:'rgba(89, 93, 104, 1)',
		width:48,
		height:48
	},
	newGroupBoxText:{
		color:'white',
		fontSize:14,
		fontFamily:'Inter-SemiBold',
		marginTop:8,
		lineHeight:24
	},
	footer:{
		width:windowWidth,
		paddingHorizontal:26,
		height:48,
		alignItems:'center',
		justifyContent:'space-between',
		flexDirection:'row',
		backgroundColor:'rgba(36, 42, 56, 1)'
	}
});