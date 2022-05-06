import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
    Text,
    TextInput,
    View,
    Button,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import { Component } from 'react/cjs/react.production.min';
import image from '../img/wallpaper.jpg';
class ProductList extends Component{
    static navigationOptions = {
        title: 'LIST',
    }
    constructor(props){
        super(props)
        this.state={
            userName:'',
            DiaryName:'',
            productName:'',
            productDescription:'',
            productCost:'',
            quantity:''

        }
    }
    Order =()=>{
    let userName=this.state.userName;
    let DiaryName=this.state.DiaryName;
    let productName=this.state.productName;
    let productDescription=this.state.productDescription;
    let productCost=this.state.productCost;
    let quantity=this.state.quantity;

    let FetchAPIURL="http://10.0.2.2:80/api/fetch-order.php";
      let headers={
        'Accept':'application/json',
        'Content-Type':'application/json'
      };
      let Data={
        userName:userName,
        DiaryName:DiaryName,
        productName:productName,
        productDescription:productDescription,
        productCost:productCost,
        quantity:quantity
      };
        fetch(FetchAPIURL,
            {
            method:'POST',
            header:headers,
            body:JSON.stringify(Data)
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
        
    };
    render(){
        const {response,userName} = this.props.route.params;
        
        return(
            <SafeAreaView>
                <ScrollView>
                <View style={styles.container}>
                    <TextInput style={styles.text}
                    value={userName}
                    onChangeText={userName=>this.setState({userName})}></TextInput>
                {
                response.map((res)=>(
                    <View key={res.product_name} style={styles.list}>
                    <TextInput style={styles.text} onChangeText={DiaryName=>this.setState({DiaryName})}>{res.diary_name}</TextInput>
                    <TextInput style={styles.text}onChangeText={productName=>this.setState({productName})}>{res.product_name}</TextInput>
                    <TextInput style={styles.text}onChangeText={productDescription=>this.setState({productDescription})}>{res.product_description}</TextInput>
                    <TextInput style={styles.text}onChangeText={productCost=>this.setState({productCost})}>{res.product_cost} </TextInput>
                    <TextInput style={styles.textinput} placeholder="Enter Quantity"
      placeholderTextColor="#fff" underlineColorAndroid={'transparent'}
      onChangeText={quantity=>this.setState({quantity})}/>
                    </View>
                ))
            }
            <TouchableOpacity style={styles.button} onPress={this.Order}>
                <Text style={styles.btntext}>Make Your Order</Text>
            </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
                )};
    }
   
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
        }
    });
export default ProductList