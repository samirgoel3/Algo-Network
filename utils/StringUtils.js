const getStringAccordingToAlgoLevel = (level)=>{
    try{
        if(level === 1){
            return "Easy"
        }if(level === 2){
            return "Medium"
        }if(level === 3){
            return "HARD"
        }else{
            return "NA"
        }
    }catch (e){
        return 'NAE'
    }
}

export  {getStringAccordingToAlgoLevel}
