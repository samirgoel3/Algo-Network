import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {Colors, FONT, ICONS} from '../../Constants';
import CodeView from './CodeView';
import LanguageSelectorView from './LanguageSelectorView';
import CodeEditor from '@rivascva/react-native-code-editor';

const SolutionScreen = ()=>{

    const MockSolutions = [
        {
            language:'JAVA',
            solutions:[
                {code:'This is Java solution one'},
                {code:'This is Java solution two'},
                {code:'This is Java solution three'},
                {code:'This is Java solution four'},
            ]
        },
        {
            language:'Javascript',
            solutions:[
                {code:'This is JS solution one'},
                {code:'This is JS solution two'},
                {code:'This is JS solution three'},
            ]
        },
        {
            language:'Swift',
            solutions:[
                {code:'This is Swift solution one'},
                {code:'This is Swift solution two'},
            ]
        },
    ]

    const [selectedSolutionPosition, setSelectedSolutionPosition] = React.useState(0)
    const [selectedLanguagePosition, setLanguagePosition] = React.useState(0)

    const getSolutionAccordingToSelectedLanguage = (position)=>{
        return MockSolutions[position].solutions;
    }

    const getCodeAccordingToSelectedSolution = ()=>{
        return MockSolutions[selectedLanguagePosition].solutions[selectedSolutionPosition].code
    }

    const handleOnLanguageChange = (position)=>{
        setLanguagePosition(position);
        setSelectedSolutionPosition(0)
    }

    const getCodeView = (code)=>{
        return <CodeEditor
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
    }


    return(<View style={{flex:1}}>


        <View style={{ flexDirection:'row', padding:10, alignItems:'center', justifyContent:'flex-start'}}>
            {getSolutionAccordingToSelectedLanguage(selectedLanguagePosition).map((item, index)=>{
               return(<Text style={  selectedSolutionPosition === index ? styles.solutionTextStyle_SELECTED: styles.solutionTextStyle_UNSELECTED} key={index}
                            onPress={()=>{setSelectedSolutionPosition(index)}}> Solution {index+1}</Text>)
            })}
        </View>

        <ScrollView>
            <CodeView code={getCodeAccordingToSelectedSolution()}/>
        </ScrollView>


        <LanguageSelectorView languages={MockSolutions} onLanguageSelect={(langauge, position)=>{handleOnLanguageChange(position)}}/>

    </View>)


}



const styles = StyleSheet.create({
    solutionTextStyle_SELECTED:{fontSize: 18, fontFamily: FONT.EXTRA_BOLD, color:Colors.GREEN_LIGHT, marginRight:10  }
    ,solutionTextStyle_UNSELECTED:{fontSize:15, fontFamily:FONT.BOLD, color:Colors.WHITE, marginRight:10
    }
})

export default SolutionScreen ;
