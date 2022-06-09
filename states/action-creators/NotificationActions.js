 const updateNotificationCount = (count)=>{
    return (dispatch) =>{
        dispatch({
            type:'update_count',
            payload:count
        })
    }
}

 const clearNotificationCount = ()=>{
    return (dispatch) =>{``
        dispatch({
            type:'clear_notification_count',
            payload:0
        })
    }
}

export default {updateNotificationCount, clearNotificationCount}
