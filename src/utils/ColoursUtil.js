import {Colors} from '../Constants';

const getColourAccordingToAlgoLevel = (level)=>{
    try{
        if(level === 1){
            return Colors.EASY
        }if(level === 2){
            return Colors.MEDIUM
        }if(level === 3){
            return Colors.HARD
        }else{
            return '#bbbbbb'
        }
    }catch (e){
        return '#333333'
    }
}

export  {getColourAccordingToAlgoLevel}
