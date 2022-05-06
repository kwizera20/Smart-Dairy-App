import React,{Component} from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    View,
    Button,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';
class Login extends Component {
    static navigationOptions = {
        title: 'Register',
    }
    constructor(props){
        super(props)
        this.state={
            userName:'',
            password:''
        }
    }
    Login =()=>{
        let {userName,password}=this.state;
        let FetchAPIURL="http://10.0.2.2:80/api/fetch.php";
      let headers={
        'Accept':'application/json',
        'Content-Type':'application/json'
      };
        fetch(FetchAPIURL,{
            method:'POST',
            header:headers,
            body:JSON.stringify({
                userName:userName,
                password:password,
            })
        })
            .then((response)=>response.json())
        .then((response)=>
        {
          if(response == "ok"){
                alert("Successfully login");
                const {data}=this.props.route.params;
                this.props.navigation.navigate("ProductDetails",{response:data,userName:userName});
                //  console.log(userName);
          }
          else
          {
              alert("wrong details");
          }
        })
        .catch((error)=>
        {
         alert("error"+error); 
        })
        
    };
    Register=()=>{
        this.props.navigation.navigate("Register");
    }
    render (){
        
    return (
        <View style={styles.container}>
        <Text style={styles.text}>Login here</Text>
        <TextInput style={styles.textinput} placeholder="User Name"
      placeholderTextColor="#fff" underlineColorAndroid={'transparent'}
      onChangeText={userName=>this.setState({userName})}/>

<TextInput style={styles.textinput} placeholder="Password"
      placeholderTextColor="#fff" underlineColorAndroid={'transparent'}
      onChangeText={password=>this.setState({password})}/>

<TouchableOpacity style={styles.button} onPress={this.Login}>
<Text style={styles.btntext}>LOGIN</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.button} onPress={this.Register}>
<Text style={styles.btntext}>Register</Text>
</TouchableOpacity>
</View>

            
    )
}
}
const styles=StyleSheet.create({
    container:{
        flex: 1,
      justifyContent: 'center',
      backgroundColor:'#16485f',
      paddingLeft:60,
      paddingRight:60
      },
    textinput:{
        alignSelf:'stretch',
        height: 40,
        marginBottom: 30,
        color: '#fff', 
        borderBottomColor:'#f8f8f8',
        borderBottomWidth:1
        },
        text:{
            paddingBottom:30,
            fontSize:30,
            color:'#fff',
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
        register:{
            width:20,
        }
});
export default Login