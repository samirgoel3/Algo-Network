import React, {useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Colors, FONT, ICONS} from '../Constants';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {actions} from '../states/action-creators';


const ErrorComponent = ()=>{

    const stateData = useSelector(state => state)
    const refRBSheet = useRef();
    const dispatch = useDispatch()






    return(<View>
        <RBSheet
            ref={refRBSheet}
            closeOnDragDown={true}
            closeOnPressMask={false}
            onClose={()=>{dispatch(actions.ErrorDialogActions.clearError())}}
            onOpen={()=>{console.log("Opening Error dialog..")}}
            customStyles={{
                wrapper: {backgroundColor: "rgba(0,0,0,0.68)"},
                draggableIcon: {backgroundColor: Colors.GREEN_BACKGROUND}
            }}>


            <View style={{alignItems:'center', padding:20}}>
                <ICONS.Error width={40} height={40}/>
                <Text style={{fontSize:20, fontFamily:FONT.EXTRA_BOLD,color:Colors.BLACK_MUTED, marginTop:10}}> {stateData.errorDialogData.header} </Text>
                <Text style={styles.description_text}>{stateData.errorDialogData.description}   </Text>
                <TouchableOpacity style={styles.BUTTON_PRIMARY} onPress={()=>{

                    refRBSheet.current.close()
                }}>
                    <Text style={styles.button_text_style}>Ok</Text>
                </TouchableOpacity>
            </View>

        </RBSheet>

        {stateData.errorDialogData.show?refRBSheet.current.open():null}
    </View>)
}

const styles = StyleSheet.create({
    description_text:{fontSize:14, fontFamily:FONT.REGULAR,color:Colors.BLACK_MUTED, marginTop:10, textAlign:'center',marginBottom:10},
    BUTTON_PRIMARY:{borderRadius:20, backgroundColor:Colors.GREEN_BACKGROUND, width:'100%', height:50, alignItems:'center', justifyContent:'center'},
    button_text_style:{color:Colors.WHITE, fontFamily:FONT.EXTRA_BOLD, fontSize:16}
})

export default ErrorComponent
