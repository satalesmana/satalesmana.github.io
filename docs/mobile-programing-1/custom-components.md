---
sidebar_position: 23
---

# Custom Components
A reusable component can be built by importing the necessary native component such as Text, TouchableOpacity etc, as shown below.

We can create dynamic components by passing a string, array or any object, similar to passing objects in functions in other languages. The attributes of components can be passed in Props.

Let’s consider the example of passing a dynamic text property and onClick property to our CustomText component. We have to import PropTypes for passing properties and TouchableOpacity for passing the onClick event.

```js
import * as React from 'react';
import { 
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';


export const PrimaryButton=(props)=>{
    return(
        <TouchableOpacity 
            onPress={props.onPress} 
            style={[style.primaryBtnStyle, props.style]}>
            <Text style={style.texBtn}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export const SecondaryButton=(props)=>{
    return(
        <TouchableOpacity 
            onPress={props.onPress} 
            style={[style.secondaryBtnStyle,props.style]}>
                <Text style={style.texBtnSecondary}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export const InfoButton=(props)=>{
    return(
        <TouchableOpacity 
            onPress={props.onPress} 
            style={[style.infoBtnStyle, props.style]}>
                <Text style={style.texBtnInfo}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    primaryBtnStyle:{
        backgroundColor:'#006175',
        padding:10,
        border:1,
        borderRadius:10,
        marginLeft: 12,
        marginRight: 12,
    },
    texBtn:{
        color:'white',
        textAlign:'center'
    },
    secondaryBtnStyle:{
        padding:10,
        border:1,
        borderRadius:10,
        marginLeft: 12,
        marginRight: 12,
        flexDirection:'row'
    },
    texBtnSecondary:{
        textAlign:'center',
        fontWeight:'bold',
        marginLeft:8
    },
    infoBtnStyle:{
        padding:10,
        border:1,
        borderRadius:10,
        marginLeft: 12,
        marginRight: 12,
        flexDirection:'row',
        backgroundColor:'#EAF5F9',
    },
    texBtnInfo:{
        textAlign:'center',
        fontWeight:'bold',
        marginLeft:8,
        color:'#259AD5'
    }
})
```