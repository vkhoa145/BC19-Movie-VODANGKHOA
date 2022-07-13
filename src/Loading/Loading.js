import React from 'react'

const Loading = () => {
    
  return (
    <div style={{position:"fixed",height:"100%",top:"0",left:"0",width:"100%",backgroundColor:"rgba(0,0,0,.5",display:"flex",justifyContent:"center",alignItems:"center",zIndex:"999"}}>
        <div className="text-white">Loading...</div>
    </div>
  )
}

export default Loading