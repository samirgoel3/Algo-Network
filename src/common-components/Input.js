import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {FONT, ICON_NAME, ICONS, Colors} from '../Constants';

const Input = ({label, iconName, error, password, onFocus = () => {}, ...props})=>{
    const [hidePassword, setHidePassword] = React.useState(password);
    const [isFocused, setIsFocused] = React.useState(false);


    return(
        <View style={{marginBottom: 20}}>
            <Text style={style.label}>{label?label:'Header'}</Text>
            <View style={[style.inputRoot, {borderColor:error?Colors.RED:isFocused?Colors.GREEN_BACKGROUND:Colors.LIGHT}]}>
                {iconName? getIcon(iconName) : null }
                <TextInput style={style.inputView}
                           secureTextEntry={hidePassword}
                           onFocus={()=>{ onFocus(); setIsFocused(true)}}
                           onBlur={()=>{setIsFocused(false)}}
                           {...props}
                />

                {password &&(
                    hidePassword ?
                    <ICONS.EyeClose width={20} height={20} onPress={()=>{ setHidePassword(false)}}/> :
                        <ICONS.EyeOpen width={20} height={20} onPress={()=>{ setHidePassword(true)}}/>)
                }

            </View>
            {error? <Text style={style.errorDesign}>
                {error}
            </Text>:null}

        </View>

    );
}


const getIcon = (iconName)=>{
    if(iconName == ICON_NAME.Mail){
        return (
            <ICONS.Mail width={20} height={20}/>
        );
    }
    if(iconName == ICON_NAME.Lock){
        return (
            <ICONS.Lock width={20} height={20}/>
        );
    }
    if(iconName == ICON_NAME.Forbidden){
        return (
            <ICONS.Forbidden width={20} height={20}/>
        );
    }
    if(iconName == ICON_NAME.EyeClose){
        return (
            <ICONS.EyeClose width={20} height={20}/>
        );
    }
    if(iconName == ICON_NAME.EyeOpen){
        return (
            <ICONS.EyeOpen width={20} height={20}/>
        );
    }if(iconName == ICON_NAME.User){
        return (
            <ICONS.User width={20} height={20}/>
        );
    }else{
        return (
            <ICONS.Forbidden width={20} height={20}/>
        );
    }


}

const style = StyleSheet.create({
    inputRoot:{
        height: 55,
        backgroundColor: Colors.WHITE,
        flexDirection: 'row',
        paddingHorizontal: 15,
        borderWidth: 0.5,
        alignItems:'center',
        borderRadius:5,
        justifyContent:'space-between'
    },
    inputView: {
        marginStart:5,
        fontFamily:FONT.LIGHT,
        flex:1,
        color:Colors.GREEN_BACKGROUND
    },
    label: {
        marginVertical: 5,
        fontSize: 14,
        color: Colors.GREY,
        fontFamily:FONT.BOLD
    },
    errorDesign: {
        marginTop: 3,
        color: Colors.RED,
        fontSize: 12,
        fontFamily:FONT.SEMI_BOLD
    },
    iconStyle:{
        width:20,
        height:20
    }
}) ;


export default Input ;
