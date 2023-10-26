import { StyleSheet } from "react-native";

const styles = StyleSheet.create({ 
     appContainer1: {
          flex:1,
          paddingTop: 50,
          paddingHorizontal: 16
        },   
     inputContainer:{
       flex: 0.2,
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'center',
       marginBottom: '24',
       borderBottomWidth: 1,
       borderBottomColor: '#cccccc',
     },
     textInput:{
       borderWidth: 1,
       borderColor: '#cccccc',
       width: '70%',
       marginRight: 8,
       padding: 8
     },
     goalContainer:{
       flex: 4,
       paddingTop:10,
     },
     itemsBackgroundColor:{
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor:'#d3d3d3'
        // width:'75%',
        
     },
    //  goalBackground:{
    //     color:'white'
    //  },
     textStyleSave:{
      backgroundColor:'#3cb3a7',
      padding:7,
      textAlign:'center',
      borderColor: '#cccccc',
      width: '35%',
      marginLeft: '30%',
      borderRadius: 6
     },
     textStyleHide:{
      backgroundColor:'#cd3232e8',
      padding:7,
      textAlign:'center',
      borderColor: '#cccccc',
      width: '35%',
      marginLeft: '30%',
      borderRadius: 6
     },
     modelStyle:{
      // backgroundColor:'red',
      alignContent:'center',
      width:'80%',
      marginLeft:40,
      marginTop:180,

     },
     listStyle:{
      width:'70%',
     }
   });

   export {styles}