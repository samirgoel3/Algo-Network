import React, {useState} from 'react';
import {Colors} from '../../Constants';
import CodeEditor from '@rivascva/react-native-code-editor';
import {Text, View} from 'react-native';
const CodeView = ({code})=>{




    return(
        <View style={{ borderRadius:40, margin:10}}>
            <Text>{code}</Text>
        <CodeEditor
            style={{
                fontSize: 9,
                inputLineHeight: 10,
                highlighterLineHeight: 10,
                backgroundColor:Colors.GREEN_BACKGROUND_LIGHT
            }}
            readOnly
            language="javascript"
            showLineNumbers={false}
            initialValue={code}
        />
        </View>
    )
}

export default CodeView;
