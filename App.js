import { SafeAreaView, Text, View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import {useState} from 'react';

export default function App() {
  const gradePoints = {'F': 0,'D': 1.5,'C': 2,'C+': 2.75, 'B': 3, 'B+': 3.5,  'A': 4 };
  
  const [sswd, setSswd] = useState('D');
  const [ob, setOb] = useState('D');
  
  var gpa=0;
  var credits=5;
  var totalPossibleCredits = 10;
  var totalGradeScores = 0;
  
  function clickMe(){
    alert("this is the click me button"); //alert for web
    Alert.alert("this is the click me button"); //alert for phone
    //get the student's gradePointsfor SSWD, multiply it by the credits 
    //add the result to totalGradeScores as an accumulator variable (e.g. tgs=tgs+sswd)
    totalGradeScores = totalGradeScores + (gradePoints[sswd] * credits);

    
    //get the student's gradePointsfor Ob, multiply it by the credits
    //add the result to totalGradeScores as an accumulator variable (e.g. tgs=tgs+ob)
    totalGradeScores = totalGradeScores + (gradePoints[ob] * credits);
    //calculate the gpa as the totalsGradeScores divided by the totalPossibleCredits
    gpa = totalGradeScores / totalPossibleCredits;
    //Output the calculated GPA result to the user using an alert (you must concatenate the gpa)
    alert("Your GPA is: " + gpa.toFixed(2));
    Alert.alert("Your GPA is: " + gpa.toFixed(2));


  }


return (
    <SafeAreaView>
      <View><Text style={{flexDirection: "row", fontWeight: "bold", fontSize: 24, textAlign:"center", marginTop: "%10"}}>GPA Calculator</Text></View>
      <View>
        <Text>Maths</Text>
        <TextInput  placeholder="Grade" onChangeText={setSswd}/>
      </View>
      <View >
        <Text>Organisational Behaviour</Text>
        <TextInput placeholder="Grade" onChangeText={setOb}/>
      </View>
      <View >
        <Button title="submit" onPress={clickMe}/>
      </View>
    </SafeAreaView>
  );
}
