import React , { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';


const FilterToggle = ({ title, activeState}) => {
  let backgroundColor = activeState? '#F0A047': '#888888';

  return (

      <View style={[styles.container, { backgroundColor}]}>
         <Text style={styles.labelText}>{title}</Text>
      </View>

  );
};

//toggle featuree within 
// const FilterToggle = ({ title, activeState}) => {
//   const [isToggled, setIsToggled] = useState(activeState || false);

//   let backgroundColor = isToggled? '#F0A047': '#888888';

//   return (
//     <TouchableOpacity 
//     onPress={() => setIsToggled(!isToggled)} 
//     style={{ backgroundColor: 'transparent' }} >

//       <View style={[styles.container, { backgroundColor}]}>
//          <Text style={styles.labelText}>{title}</Text>
//          {/* <Text>{isToggled.toString()}</Text> */}
//       </View>

//     </TouchableOpacity> 

//   );
// };


const styles = StyleSheet.create({
  container: {
    borderRadius: 36,
    padding: 9,
    margin:5,
    flexDirection: 'row' 
    
    // alignSelf: 'flex-start',
  },
  labelText:{
    color:'#F6F3F0',
    fontSize: 14,
  },
});

export default FilterToggle;
