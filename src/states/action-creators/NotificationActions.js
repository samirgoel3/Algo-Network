 const updateNotificationCount = (count)=>{
    return async ( dispatch) =>{
        dispatch({
            type:'update_count',
            payload:count
        })
    }
}

 const clearNotificationCount = ()=>{
    return async (dispatch) =>{
        dispatch({
            type:'clear_notification_count',
            payload:0
        })
    }
}

export default {updateNotificationCount, clearNotificationCount}
