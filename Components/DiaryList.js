import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    Button,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Image,
    FlatList,
    TouchableOpacity
} from 'react-native';
 class DiaryList extends Component {
    static navigationOptions = {
        title: 'LIST',
    }
    constructor(props){
        super(props);
        this.state={
            diaryName:'',
            
        };
       
        
    }
    Name=()=>
    {
        let diaryName=this.state.diaryName;
        console.log(diaryName);
        if(diaryName.length==0)
        {
            alert("no location inputted");
        }
        else{
            let SearchAPIURL="http://10.0.2.2:80/api/product-api.php";
            let header={
                'Accept':'application/json',
                'Content-Type':'application/json'
            };
            let Data={
                diaryName:diaryName
                
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
                this.props.navigation.navigate("Login",{data:response});
            }
            )
            .catch((error)=>
            {
                alert("Error "+ error);
            })
        }
    };  
    render()
    {
        const  {response} = this.props.route.params;  
    return(
<SafeAreaView>
        <View style={styles.container}>
        <TouchableOpacity  onPress={this.Name}>
           {
               response.map((res)=>(
                   
                   <View key={res.diary_name} style={styles.list}>
                       <Text style={styles.tex}>{res.owner_type}</Text>
                    <TextInput style={styles.text} 
                    value={res.diary_name}
                    onChangeText={diaryName=>this.setState({diaryName})}/>
                    
                   </View>
                   
               ))
           }
              </TouchableOpacity>          
                    
             
            
        {/* <FlatList
        data={diary}
        renderItem={renderItem}
         keyExtractor={item => item.diary_name}
         
      />
       */}
                    {/* <Text style={styles.text}>
                       {data} 
                  </Text>  */}
                  
            </View>
</SafeAreaView> 
    )
}
};
     const styles=StyleSheet.create({
        container:{
        padding:20,
        backgroundColor:'#16485f',
        marginBottom:10,
        
        },
        list:{
            padding:0,
            borderBottomWidth:1,
            borderBottomColor:'#fff',
        },
        text:{
            fontSize:20,
            padding:30,
            color:'orange',
        },
        tex:{
            fontSize:20,
            color:'#fff'
        }
    });
    export default DiaryList
