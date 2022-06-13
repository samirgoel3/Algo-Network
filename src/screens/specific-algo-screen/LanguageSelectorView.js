import React , {useRef}from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Colors, FONT, ICONS} from '../../Constants';
import RBSheet from "react-native-raw-bottom-sheet";



const LanguageSelectorView = ({languages, onLanguageSelect})=>{
    const [value, setValue] = React.useState('left');
    const [selectedLanguage, setLanguage] = React.useState(languages[0].language)
    const refRBSheet = useRef();

    const getListOfLanguage = ()=>{
        return(
            <View style={{flex:1}}>
                <Text style={{fontSize:15, fontFamily:FONT.BOLD, padding:10, color:Colors.BLACK_MUTED}}>Select Programming Language</Text>
                {languages.map((item , index)=>{
                    return <Text
                        onPress={()=>{
                            onLanguageSelect(item, index); refRBSheet.current.close();
                            setLanguage(languages[index].language)
                        }}
                        style={{fontSize:17, fontFamily:FONT.REGULAR, padding:10, color:Colors.BLACK_MUTED}}>{"\u2B23 "+item.language}</Text>
                })}
            </View>
        )
    }



    return (
        <TouchableOpacity style={{padding:10, backgroundColor:Colors.GREEN_MUTED, borderRadius:5, position:'absolute',bottom:10, right:10}} onPress={()=>refRBSheet.current.open()}>
            <Text style={{fontSize:10, color:Colors.WHITE, fontFamily:FONT.BOLD}}>Language </Text>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Text style={{fontSize:13, color:Colors.WHITE, fontFamily:FONT.BOLD, marginRight:5}}>{selectedLanguage}</Text>
                <ICONS.Down width={12} height={12}/>
            </View>

            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={false}
                customStyles={{
                    wrapper: {backgroundColor: "transparent"},
                    draggableIcon: {backgroundColor: "#000"}
                }}>
                {getListOfLanguage()}
            </RBSheet>

        </TouchableOpacity>
    );
}
export default LanguageSelectorView
