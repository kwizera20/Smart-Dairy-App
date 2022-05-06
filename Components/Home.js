import React from 'react';
import {
    View,
    Button,
    Text,
    StyleSheet
} from 'react-native';
const Home=({navigation}) =>{
    return (
        <View style={styles.container}>
            {/* <Button onPress={()=>navigation.navigate('Register')} title="Register" style={styles.register}></Button> */}
        <Text style={styles.text}>Welcome To smart Diary system</Text>
        <Text style={styles.text}>Hello World!!!</Text>
        <View style={styles.login}>
        {/* <Button onPress={()=>navigation.navigate('Login')} title="Login" ></Button>
        </View>
        <View style={styles.login}>
        <Button onPress={()=>navigation.navigate('Register')} title="Register" style={styles.register}></Button>
        </View>
        <View>
        <Button onPress={()=>navigation.navigate('DiaryList')} title="DiaryList" style={styles.register}></Button>
        </View>
        <View> */}
        <Button onPress={()=>navigation.navigate('Location')} title="Get Started" style={styles.register}></Button>
        </View>
        
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
      flex: 1,
    justifyContent: 'center',
    backgroundColor:'#16485f',
    paddingLeft:60,
    paddingRight:60
    },
    login:{
        paddingTop:30,
        paddingBottom:20,
    },
    text:{
        fontSize:20,
        color:'#fff',
        paddingBottom:50,
    },
    register:{
        paddingTop:0,
        width:20,
    }
  })
export default Home