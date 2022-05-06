import React, { PureComponent } from 'react';
import {
Text,
Button,
StyleSheet,
View,
SafeAreaView,
ScrollView,
TextInput
} from 'react-native'

const Order=()=>
{
    return(
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text>Product Name : IKIVUGUTO</Text>
                    <Text>Quantity:<TextInput></TextInput></Text>
                   
                    <Text>Total: {calcTotal()}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const calcTotal=()=>{
    const sum=700*3;
}
export default Order