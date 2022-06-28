import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors, FONT, Screens} from '../../../Constants';
import {useNavigation} from '@react-navigation/native';

const CategoryHorizontalScrollView = (data)=>{

    const navigation = useNavigation()

        try{
            {console.log(data)}
            return(<ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {data.data.map((item, key)=>{
                    return (
                        <View style={[styles.root, {backgroundColor:item.color?item.color :Colors.LIGHT} ]} key={key}>
                            {/*<Image source={{uri:item.backGround}} style={styles.backGroundStyling}/>*/}
                            <TouchableOpacity style={styles.transparentBackground} onPress={()=>{ navigation.navigate(Screens.AlgoListScreen, {name:"Array Cat."})}}>
                                <Text style={styles.textStyling}>{item.name + " ("+ 89 +")"}</Text>
                            </TouchableOpacity>

                        </View>
                    )
                })}
            </ScrollView>)
        }catch(e){
            return null;
        }

}

const styles = StyleSheet.create({
    root:{width:150, height:100, borderRadius:5, marginRight:15, },
    backGroundStyling:{flex:1, width:150, height:150, borderRadius:5,alignItems:'center', justifyContent:'center'},
    textStyling: {fontFamily:FONT.BOLD, fontSize:16, color:Colors.WHITE},
    transparentBackground: {backgroundColor:'rgba(0,0,0,0.42)', elevation:1, width:'100%', height:'100%', borderRadius:5, position: 'absolute', justifyContent:'center', alignItems: 'center'},
    textStylingCount: {fontFamily:FONT.BOLD, fontSize:14, color:Colors.WHITE, position:'absolute', top:28, left:8},
})



export default CategoryHorizontalScrollView;
