import React from "react";

interface IProps {
  setOpen: Function,
  setNoti: Function,
};

const Dialog: React.FC<IProps> = ({setOpen, setNoti}) => {

  const handleAccept = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setNoti("We are now part of Salesforce.");
    setTimeout(() => {
      setNoti("");
    }, 5000);
  }

  const handleReject = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setNoti("Cookies rejected");
    setTimeout(() => {
      setNoti("");
    }, 5000);
  }

  return (
    <div className="dialog">
      <button className="close-button" onClick={() => setOpen(false)}>X</button>
      <img className="cookie-img" src="https://png.pngtree.com/png-clipart/20201208/original/pngtree-cartoon-big-half-chocolate-bean-cookie-cookie-clipart-png-image_5528096.jpg" alt="cookie" />
      <p className="text-area">
        By clicking "Accept All Cookies", you agree to the storing of cookies 
        on your device to enhance site navigation, analyze site usage, and assist 
        in our marketing efforts. <a href="#">More info</a> 
      </p>
      <div>
        <button className="choice-button" onClick={handleAccept}>Accept cookies</button>
        <button className="choice-button" onClick={handleReject}>Decline cookies</button>
      </div>
      <p><a href="#">Cookie settings</a></p>
    </div>
  )
}

export default Dialog;