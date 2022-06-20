

const initialState = {
    header:"Header from Reduces",
    description:"description from reducer",
    show:false
}

const ErrorDialogReducer = (state = initialState, action)=>{
    console.log(" reducing error dialog")
    if(action.type === 'show_Error'){
        return {
            ...initialState,
            header:action.payload.header,
            description:action.payload.description,
            show: action.payload.show
        };
    }else{
        return state;
    }
}

export default ErrorDialogReducer;
