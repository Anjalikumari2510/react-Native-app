import React from 'react';
import { styles } from '../../StyleCss/styles';
import { Text, View } from 'react-native';

function GoalItem(props) {
  return (
     <View style={styles.itemsBackgroundColor}>
          <Text style={styles.goalBackground}>{props.text}</Text>
     </View>
     
  )
}

export default GoalItem