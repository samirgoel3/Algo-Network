const showError = (data)=>{
    console.log("********* trying to show error "+data.show)
    return async ( dispatch) =>{
        dispatch({
            type:'show_Error',
            payload:{
                header:data.header,
                description:data.description,
                show:data.show
            }
        })
    }
}


export default {showError}
