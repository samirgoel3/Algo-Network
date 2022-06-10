import React, {useEffect} from 'react';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import {useDispatch, useSelector} from 'react-redux';
import {actions} from '../states/action-creators';
import {ActivityIndicator, View} from 'react-native';
import {Colors} from '../Constants';

const OverAllStack = ()=>{

    const dispatch = useDispatch()

    const [isLoading, setLoading] = React.useState(true)

    useEffect(()=>{
        try{init()}catch (e){alert(e.message)}
    }, [])

    const init =  async () => {
        await dispatch(actions.authenticationActions.checkLogin())
        setLoading(false)
    }



    const stateData = useSelector(state => state.authData)


    if(isLoading){
        return <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <ActivityIndicator size={'large'} color={Colors.GREEN_BACKGROUND}/>
        </View>
    }


    return (
        stateData.token ?  <AppStack/>:<AuthStack/>
    );
}

export default OverAllStack;
