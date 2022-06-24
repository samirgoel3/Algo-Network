import React from 'react';
import {ScrollView, View} from 'react-native';
import DescriptionView from './DescriptionView';

const ProblemStatementScreen = ({data})=>{


    return(
        <ScrollView>
            <View>
                {data.map((data, index)=>{
                    return (
                        <View key={index}>
                            <DescriptionView data={data} />
                        </View>

                    )
                })}
            </View>
        </ScrollView>

    )
}

export default ProblemStatementScreen;
