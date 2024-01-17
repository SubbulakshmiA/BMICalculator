import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View,Switch } from 'react-native';
// var heightValue,weightValue;

export default function App() {
  const [bmi,setBmi] = useState();
const [heightValue,setheightValue] = useState();
const [weightValue,setweightValue] = useState();
const [category,setCategory] = useState();
// const calculateBMI = () => {
//  setBmi(weightValue / (heightValue * heightValue));
//  if(bmi<18.5){
//   setCategory('Under weight')
//  }else if(bmi>=18.5 && bmi<=24.9){
//   setCategory('healthy weight')
//  }else if(bmi>=25 && bmi<=30){
//   setCategory('over weight')
//  }else if(bmi>30){
//   setCategory('obese')
//  }else{
//   setCategory('Invalid inputs')
//  }
//  console.log(bmi, category);

// }
const calculateBMI = () => {
  // if (isEnable && heightValue < 2.5 && heightValue > 0.3) { 
  //   if (weightValue < 300 && weightValue > 10) {
  //      var b = Math.round(weightValue/(heightValue*heightValue))
  //     setBmi(b)
  //     if(b<18.5){
  //       setCategory('Underweight')
  //     }else if(b<24.9){
  //       setCategory('Normal Weight')
  //    }else if(b<29.9){
  //        setCategory('Overweight')
  //    }else{
  //      setCategory('Obesity')
  //     }
  //   }
  // }else {
  //     setCategory('Invalid Values')
  //   }
  if (isEnable && heightValue < 2.5 && heightValue > 0.3) { 
    if (weightValue < 300 && weightValue > 10) {
       findCategory()
    }
  }else if(!isEnable && heightValue >= 11){
        if(weightValue > 4){
          findCategory()
        }
  }
  else {
      setCategory('Invalid Values')
    }
}
const clear = () => { 
  setheightValue();
  setweightValue();
  setBmi();
  setCategory('');
}
const findCategory = () =>{
  var b = Math.round(weightValue/(heightValue*heightValue))
      setBmi(b)
      if(b<18.5){
        setCategory('Underweight')
      }else if(b<24.9){
        setCategory('Normal Weight')
     }else if(b<29.9){
         setCategory('Overweight')
     }else{
       setCategory('Obesity')
      }
}
// var heightUnit, weightUnit;
const [heightUnit, setheightUnit] = useState('cm');
const [weightUnit, setweightUnit] = useState('kg');
const [isEnable, setIsEnable] = useState(false);
console.log(" before of togg"+isEnable)
 
const toggleMode = () =>{
  console.log(isEnable)
  setIsEnable(isEnable => !isEnable)
 

 }
const setUnit = () =>{  
console.log(" setUnit fun"+isEnable)
  if(!isEnable){
    setheightUnit('cm');
    setweightUnit('kg');
    
  }else{
    setheightUnit('in');
    setweightUnit('lb');
  }
}
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
      <View style={styles.nestedView}>
      <Text style={styles.textStyle}>Your Height</Text>
     <TextInput style={styles.textInputStyle} 
          placeholder='Height'
          value={heightValue}
          onChangeText={(v)=>{
            setheightValue(v);
          }}></TextInput>
     <Text style={{...styles.textStyle,marginStart:10}}>{heightUnit}</Text>
    
     </View>
     <View style={styles.nestedView}>
      <Text style={styles.textStyle}>Your Weight</Text>
      <TextInput style={styles.textInputStyle} 
                 value={weightValue}
                 placeholder='Weight'
                 onChangeText={(v)=>{
                 setweightValue(v);
                 }}></TextInput>
     <Text style={{...styles.textStyle,marginStart:10}}>{weightUnit}</Text>
      
      </View>
      <Button title='COmpute BMI'
          // color="#7fffd4"
          style={styles.buttonStyle}
      onPress={calculateBMI}></Button>
      <Button title='Clear' onPress={clear} > </Button>
      <Switch
        onValueChange={() => { 
          toggleMode()
          setUnit()
        }}
        value={isEnable}
      ></Switch>
     
     
      </View>
      <View style={styles.bottomView}>
        <Text style={styles.textStyle}>Your BMI is : {bmi}</Text>
        <Text style={styles.textStyle}>Your BMI fall in the category of {category}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  topView:{
    flex:1,
    backgroundColor: '#e4bbd9',
    justifyContent:'center',
    borderWidth:2,
    borderColor:'black'
  },
  bottomView:{
    flex:1,
    borderWidth:2,
    borderColor:'black',
    justifyContent:'center',
    alignItems:'center'
  },
  nestedView:{
    margin:20,
flexDirection:'row',
// justifyContent:'space-around'

  },
  textStyle:{
    fontSize:20,
    marginEnd:10
  },
  textInputStyle:{
    flex:1,
    borderWidth:2,
    fontSize:20,
    borderColor:'black'
  },
  buttonStyle:{
    alignSelf:'center',
    justifyContent:'flex-start'
   }
});
