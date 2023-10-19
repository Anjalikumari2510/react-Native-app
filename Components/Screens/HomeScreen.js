import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';


export default function HomeScreen() {
     const[enteredGoalText, setEnteredGoalText] = useState('');
     const[courseGoals, setCourseGoals] = useState([]);
     function goalInputHandler(enterdText){
       setEnteredGoalText(enterdText);
     };
     function addGoalHandler(){
       setCourseGoals(currentCourseGoals => [...currentCourseGoals, enteredGoalText]);
     };
     return (
          <View style={styles.appContainer1}>
               <View style={styles.inputContainer}>
                    <TextInput style={styles.textInput} placeholder='Your Course Goal' onChangeText={goalInputHandler}/>
                    <Button title='Add Goal' onPress={addGoalHandler}/>
               </View>
               <View style={styles.goalContainer}>
                    {courseGoals.map((goal)=> <Text key={goal}>{goal}</Text>)}
               </View>
          </View>
     );
}
const styles = StyleSheet.create({ 
     appContainer1: {
          flex:1,
          paddingTop: 50,
          paddingHorizontal: 16
        },   
     inputContainer:{
       flex: 1,
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
       flex: 5,
       paddingTop:10,
     },
   });
   