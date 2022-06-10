
const reducer = (state = 0, action)=>{
    if(action.type === 'update_count'){
        return action.payload;
    }if(action.type === 'clear_notification_count'){
        return 0;
    }else{
        return state;
    }
}

export default reducer;
