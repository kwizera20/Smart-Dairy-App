import { tsConstructorType } from '@babel/types';
import React,{Component} from 'react';
import {
  StyleSheet,
   Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView, 
} from 'react-native';

class Register extends Component  {
  constructor(props)
  {
    super(props);
    this.state={names:'',userName:'',email:'',phoneNumber:'',location:'',password:'',confirmPassword:''};
  }
  InsertRecord=()=>
  {
    let names=this.state.names;
    let userName=this.state.userName;
    let email=this.state.email;
    let phoneNumber=this.state.phoneNumber;
    let location=this.state.location;
    let password=this.state.password;
    let confirmPassword=this.state.confirmPassword;
    if(names.length==0 || userName.length==0 ||email.length==0 || phoneNumber.length==0 || location.length==0 || password.length==0 ||confirmPassword.length==0)
    {
      alert("Required Field is Missing");
    }
    else
    {
      let InsertAPIURL="http://10.0.2.2:80/api/insert.php";
      let headers={
        'Accept':'application/json',
        'Content-Type':'application/json'
      };
      let Data={
        names:names,
        userName:userName,
        email:email,
        phoneNumber:phoneNumber,
        location:location,
        password:password,
        confirmPassword:confirmPassword
      };
      fetch(InsertAPIURL,
        {
          method:'POST',
          headers:headers,
          body: JSON.stringify(Data)
        })
        .then((response)=>response.json())
        .then((response)=>
        {
          alert(response[0].Message);
        })
        .catch((error)=>
        {
         alert("error"+error); 
        })
    }
  }
  render(){
  return (
    <SafeAreaView>
      <ScrollView>
      <View style={styles.regForm}>
      <Text style={styles.header}>REGISTER HERE</Text>
      <TextInput style={styles.textinput} placeholder="Full Names"
      placeholderTextColor="#fff"  underlineColorAndroid={'transparent'}
      onChangeText={names=>this.setState({names})}/>

      <TextInput style={styles.textinput} placeholder="User Name"
      placeholderTextColor="#fff" underlineColorAndroid={'transparent'}
      onChangeText={userName=>this.setState({userName})}/>

      <TextInput style={styles.textinput} placeholder="Email Address"
      placeholderTextColor="#fff" underlineColorAndroid={'transparent'}
      onChangeText={email=>this.setState({email})}/>

      <TextInput style={styles.textinput} placeholder="Phone Number"
      placeholderTextColor="#fff" underlineColorAndroid={'transparent'}
      onChangeText={phoneNumber=>this.setState({phoneNumber})}/>

      <TextInput style={styles.textinput} placeholder="Location"
      placeholderTextColor="#fff" underlineColorAndroid={'transparent'}
      onChangeText={location=>this.setState({location})}/>

      <TextInput style={styles.textinput} placeholder="Password"
      placeholderTextColor="#fff" underlineColorAndroid={'transparent'}
      onChangeText={password=>this.setState({password})}/>

      <TextInput style={styles.textinput} placeholder="Confirm Password"
      placeholderTextColor="#fff" underlineColorAndroid={'transparent'}
      onChangeText={confirmPassword=>this.setState({confirmPassword})}/>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.btntext} onPress={this.InsertRecord}>SIGN UP</Text>
    </TouchableOpacity>
    </View>
      </ScrollView>
    </SafeAreaView>
    
  );
}
}
const styles=StyleSheet.create({
regForm:{
  alignSelf:'stretch',
  backgroundColor:'#16485f'
},
header:{
fontSize: 24,
color:'#fff',
paddingBottom: 10,
marginBottom: 40,
borderBottomColor:'#199187',
borderBottomWidth:1,
},
textinput:{
alignSelf:'stretch',
height: 40,
marginBottom: 30,
color: '#fff', 
borderBottomColor:'#f8f8f8',
borderBottomWidth:1
},
button:{
    alignSelf:'stretch',
    alignItems:'center',
    padding:20,
    backgroundColor:'#59cbbd',
    marginTop:30,
},
btntext:{
    color:'#fff',
    fontWeight:'bold',
},
})

export default Register;