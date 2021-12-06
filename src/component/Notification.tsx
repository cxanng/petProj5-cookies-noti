import React from "react";

interface Iprops {
  message: string,
  setNoti: Function,
}

const Notification: React.FC<Iprops> = ({ message, setNoti }) => {
  return (
    <>
    {message !== "" && 
    <div className="noti">
      <p style={{marginLeft: "40px"}}>{message}</p>
      <button className="close-button" onClick={() => setNoti("")} style={{backgroundColor: '#405287', color: 'white', borderStyle: 'none', margin: "5px 5px auto auto"}}>X</button>
    </div>}
    </>
  )
}

export default Notification;