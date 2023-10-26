import { useState } from 'react';
import { Button, FlatList, Modal, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { styles } from '../../StyleCss/styles';
import GoalItem from './GoalItem';
import { Ionicons } from '@expo/vector-icons';


export default function HomeScreen() {

     const[courseGoals, setCourseGoals] = useState([]);
     const[enteredGoalText, setEnteredGoalText] = useState('');
     const[modalVisible, setModalVisible]   = useState(false);
     const[updatedText, setUpdatedText]   = useState();
     const[updatedId,setUpdatedId] = useState();

     function goalInputHandler(enterdText){
       setEnteredGoalText(enterdText);
     };
     
     const deleteHandler = (id) => {
          const filter = courseGoals.filter(item => item.id !== id)         

     }

     const updateHandler = (id) => {
          setModalVisible(true)
          setUpdatedId(id);
          const filter = courseGoals.filter(item => item.id !== id)
          setCourseGoals(filter);
     }

     const goalUpdateInputHandler = (updatedTextt) => {
          setUpdatedText(updatedTextt);          
     }
     
     const saveUpdatedValue = () =>{ 
          setCourseGoals(currentCourseGoals => [...currentCourseGoals,
               { text: updatedText,id:Math.random().toString() },
          ]);
               setModalVisible(false)
     }

     function addGoalHandler(){
       setCourseGoals(currentCourseGoals => [...currentCourseGoals, 
          { text: enteredGoalText,id:Math.random().toString() },
     ]);
     };

     return (
          <View style={styles.appContainer1}>
               <View style={styles.inputContainer}>
                    <TextInput style={styles.textInput} placeholder='Your Course Goal' onChangeText={goalInputHandler}/>
                    <Button  style={styles.button} title='Add Goal' onPress={addGoalHandler}/>
               </View>
               <FlatList
               data={courseGoals}
               style={styles.listStyle}
               renderItem={(itemData) =>{ 
                    return  (
                         <View>
                         <GoalItem text={itemData.item.text}/>
                         <Ionicons name='md-trash' size={25} color='red' onPress={()=>{deleteHandler(itemData.item.id)}}/>
                         <Ionicons name='md-create' size={25} onPress={()=>{updateHandler(itemData.item.id)}}/>
                         </View>
                    );
               }}
               keyExtractor={(item, index) =>{
                    return item.id;
               } }
               alwaysBounceVertical={false}
               />
               <Modal
               animationType="slide"
               transparent={true}
               visible={modalVisible}               
               >
                    <View style={styles.modelStyle}>
                    <TextInput  onChangeText={goalUpdateInputHandler} style={styles.itemsBackgroundColor}></TextInput>
                    <Pressable
                         style={[styles.button, styles.buttonClose]}
                         onPress={() => setModalVisible(!modalVisible)}>
                         <Text style={styles.textStyleHide}>Hide Modal</Text>
                    </Pressable>
                    <Pressable
                         style={[styles.button, styles.buttonClose]}
                         onPress={() => saveUpdatedValue()}
                          >
                         <Text style={styles.textStyleSave}>SAVE</Text>
                    </Pressable>
                    </View>
               </Modal>
          </View>
     );
}

   