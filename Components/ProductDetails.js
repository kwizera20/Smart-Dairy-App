import React, { PureComponent } from 'react';
import image from '../img/wallpaper.jpg';
import {
Text,
TextInput,
Button,
StyleSheet,
SafeAreaView,
View,
ScrollView,
Image,
TouchableOpacity
} from 'react-native'
import { Component } from 'react';

class ProductDetails extends Component{
    static navigationOptions = {
        title: 'LIS',
    }
    constructor(props){
        super(props);
        this.state={
            productName:'',
            diaryName:'',
            userName:''
        };
       
        
    }
    productDetails=()=>
    {
        let productName=this.state.productName;
        let diaryName=this.state.diaryName;
        let userName=this.state.userName;
        console.log(productName );
        console.log(diaryName);
        if(productName.length==0 || diaryName.length==0)
        {
            alert("no product name and diary name inputted");
        }
        else{
            let SearchAPIURL="http://10.0.2.2:80/api/product-search-api.php";
            let header={
                'Accept':'application/json',
                'Content-Type':'application/json'
            };
            let Data={
                productName:productName,
                diaryName:diaryName,
                userName:userName
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
                
                // const userName=this.props.route.params;
                console.log(userName);
                this.props.navigation.navigate("ProductList",{response,userName:userName});
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
        const {response,userName} = this.props.route.params;
        
        
        return(
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.container}>
                        <TouchableOpacity onPress={this.productDetails}>
                            <TextInput style={styles.text} value={userName}
                            onChangeText={userName=>this.setState({userName})}></TextInput>
            {
                response.map((res)=>(
                    <View key={res.product_name} style={styles.list}>
                    <TextInput style={styles.text}
                    onChangeText={diaryName=>this.setState({diaryName})}
                    value={res.diary_name}/> 

                    <TextInput style={styles.text}
                    onChangeText={productName=>this.setState({productName})}
                    value={res.product_name}/>
                    <Text style={styles.tex}>{res.product_description}</Text>
                    </View>
                ))
            }
            </TouchableOpacity>
                    {/* <View style={styles.image}>
                        <Image source={image} style={styles.img}></Image>
                    </View>
                    </View>
                    <View style={styles.text}>
                        <Text style={styles.word}>IKIVUGUTO</Text>
                        <Text style={styles.word}>Amata Y' I Nyanza</Text>
                        <Text style={styles.word}>Cost: 600 rwf/little</Text>
                    </View>
                    <View>
                    <TouchableOpacity style={styles.button}>
                    <Text style={styles.btntext} onPress={()=>navigation.navigate('Order')} title='Order'>Add To Cart</Text>
                </TouchableOpacity> */}
                    </View>
                </ScrollView>
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
            fontSize:16,
            color:'#fff',
            paddingLeft:150
        }
    });
export default ProductDetails