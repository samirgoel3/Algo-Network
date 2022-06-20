import React from 'react';

const ErrorBoundary = ({children})=>{
    return(
        <ErrorBoundary onError={()=>{alert('Error Happened')}} >{children}</ErrorBoundary>
    )
}

export default ErrorBoundary
