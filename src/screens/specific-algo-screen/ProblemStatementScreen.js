import React from 'react';
import {ScrollView, View} from 'react-native';
import DescriptionView from './DescriptionView';

const ProblemStatementScreen = ()=>{
    const MockData = [
        {
            heading:'Climbing the Leaderboard',
            description:'An arcade game player wants to climb to the top of the leaderboard and track their ranking. The game uses Dense Ranking, so its leaderboard works like this:\n\n\u2B23 The player with the highest score is ranked number  on the leaderboard.\n\n\u2B23 Players who have equal scores receive the same ranking number, and the next player(s) receive the immediately following ranking number.',
            backgroundColor:'',
            collapsable:false
        },
        {
            heading:'Example',
            description:'-----------------------------\nranked = [100, 90, 90, 80]\nplayer = [70, 80, 105]\n-----------------------------\nThe ranked players will have ranks 1, 2, 2, and 3, respectively. If the player\'s scores are 70, 80 and 105, their rankings after each game are 4th, 3rd and 1st. Return [4, 3, 1].',
            backgroundColor:'',
            collapsable:false
        },
        {
            heading:'Function Description',
            description:'Complete the climbingLeaderboard function in the editor below.\n'+
                'climbingLeaderboard has the following parameter(s):\n' +
                '\u2B23 int ranked[n]: the leaderboard scores\n' +
                '\u2B23 int player[m]: the player\'s scores',
            backgroundColor:'',
            collapsable:false
        },
        {
            heading:'Return',
            description:'\u2B23 int[m]: the player\'s rank after each new score',
            backgroundColor:'',
            collapsable:false
        },
        {
            heading:'Input Format',
            description:'The first line contains an integer , the number of players on the leaderboard.\n' +
                'The next line contains  space-separated integers ranked[i], the leaderboard scores in decreasing order.\n' +
                'The next line contains an integer, , the number games the player plays.\n' +
                'The last line contains  space-separated integers , the game scores',
            backgroundColor:'',
            collapsable:false
        },
        {
            heading:'Hint 3',
            description:'Example about algo will goes here accordingly',
            backgroundColor:'#207f79',
            collapsable:true
        },
    ]


    return(
        <ScrollView>
            <View>
                {MockData.map((data, index)=>{
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
