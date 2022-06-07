import React from 'react';
import {ScrollView, Text, View, StyleSheet, ImageBackground, Image} from 'react-native';
import {Colors, FONT} from '../../../Constants';
import Mock from '../../../constants-data';

const AlgosCategories = ()=>{
    return(
        <View>
            <Text style={styles.headerText}>Top Algo Categories</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {Mock.MockData.algo_Categories.map((item, index)=>{
                   return (
                       <View style={styles.root}>
                           <Image source={{uri:item.backGround}} style={styles.backGroundStyling}/>
                           <View style={styles.transparentBackground}>
                               <Text style={styles.textStyling}>{item.category_name + " ("+item.algo_count+")"}</Text>
                           </View>

                       </View>
                   )
                })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    root:{width:150, height:100, borderRadius:5, backgroundColor:Colors.LIGHT, marginRight:15, },
    backGroundStyling:{flex:1, width:150, height:150, borderRadius:5,alignItems:'center', justifyContent:'center'},
    textStyling: {fontFamily:FONT.BOLD, fontSize:16, color:Colors.WHITE},
    transparentBackground: {backgroundColor:'rgba(0,0,0,0.42)', elevation:1, width:'100%', height:'100%', borderRadius:5, position: 'absolute', justifyContent:'center', alignItems: 'center'},
    textStylingCount: {fontFamily:FONT.BOLD, fontSize:14, color:Colors.WHITE, position:'absolute', top:28, left:8},
    headerText:{fontSize:20, marginBottom:5, fontFamily:FONT.BOLD, color:Colors.WHITE, marginTop:15}
})


export default AlgosCategories;
