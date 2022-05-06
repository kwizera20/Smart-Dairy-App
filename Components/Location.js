import React,{Component} from 'react';
import { useState } from 'react';
import {
    View,
    Button,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';
class Location extends Component {
    static navigationOptions = {
        title: 'Home',
    }
    constructor(props){
        super(props)
        this.state={
            diaryLocation:'',
            
        };
    }
    Location=()=>
    {
        let diaryLocation=this.state.diaryLocation;
        if(diaryLocation.length==0)
        {
            alert("no location inputted");
        }
        else{
            let SearchAPIURL="http://10.0.2.2:80/api/search.php";
            let header={
                'Accept':'application/json',
                'Content-Type':'application/json'
            };
            let Data={
                diaryLocation:diaryLocation
            };
            fetch(
                SearchAPIURL,
                {
                    method:'POST',
                    headers:header,
                    body: JSON.stringify(Data)
                }
            )
            .then((response)=>response.json())
            //  .then(json=>console.log(json))
             .then((response)=>
            
            {
                // //  this.setState({ownerType:response[0].owner_type});
                // //  this.setState({diaryName:response[0].diary_name});
                // //  this.setState({location:response[0].location});
                // response.map((response)=>{
                //     // {diary}
                //     //  console.log(diary);
                //     //  console.log(diary.diary_name);
                //     this.props.navigation.navigate("DiaryList",{response});
                // });
                this.props.navigation.navigate("DiaryList",{response});
            }
            )
            .catch((error)=>
            {
                alert("Error "+ error);
            })
        }
    };  
    render (){
    return (
        
        <View style={styles.container}>
        <Text style={styles.text}>Enter Your Location</Text>
        <TextInput style={styles.textinput} placeholder="Enter Your Location"
      placeholderTextColor="#fff" underlineColorAndroid={'transparent'}
      onChangeText={diaryLocation=>this.setState({diaryLocation})}/>


<TouchableOpacity style={styles.button} onPress={this.Location} 
>

<Text style={styles.btntext} >Search</Text>

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
});
export default Location
