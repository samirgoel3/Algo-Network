import React from 'react';
import {Text, useWindowDimensions, View} from 'react-native';
import {Colors, FONT, ICONS} from '../../Constants';
import CollapsibleView from '@eliav2/react-native-collapsible-view'
import RenderHtml from 'react-native-render-html';


const DescriptionView = ({data})=>{
    const { width } = useWindowDimensions();
    const [isCollpase, setCollapse] = React.useState(false)

    const getNonCollapsableView = ()=>{
        return(
            <View style={[{marginLeft:10, marginRight:10,marginTop:8, marginBottom:5,  borderRadius: 5, borderWidth:0},  data.backgroundColor?{ backgroundColor:data.backgroundColor, borderRadius:5, padding:10}:{}]}>
                <Text style={{fontFamily:FONT.EXTRA_BOLD, fontSize:20, color:Colors.WHITE}} >{data.heading}</Text>
                <Text style={{fontFamily:FONT.MEDIUM, color:Colors.WHITE, fontSize:12}}>{data.description}</Text>

            </View>)
    }

    const getCollapsableView = ()=>{
        return(
            <CollapsibleView style={[{margin:10, borderRadius: 5, borderWidth:0},  data.backgroundColor?{ backgroundColor:data.backgroundColor, borderRadius:5, padding:10}:{}]}
                             initExpanded={!data.collapsable}
                             noArrow
                             collapsibleProps={{ onAnimationEnd: () => setCollapse(!isCollpase) }}
                             title={
                <View style={{ flex:1, justifyContent:'space-between', flexDirection:'row'}}>
                    <RenderHtml contentWidth={width} source={data.heading}/>
                    <Text style={{fontFamily:FONT.EXTRA_BOLD, fontSize:20, color:Colors.WHITE}} >{data.heading}</Text>
                    {isCollpase?<ICONS.Up width={20} height={20}/>:<ICONS.Down width={20} height={20}/>}
                </View>}>

                {/*<Text style={{fontFamily:FONT.MEDIUM, color:Colors.WHITE, fontSize:12}}>{data.description}</Text>*/}
                <RenderHtml contentWidth={width} source={{html:data.description}}/>

            </CollapsibleView>
        )
    }






    return(
        data.collapsable?
        getCollapsableView() : getNonCollapsableView()
    )
}
export default DescriptionView;
