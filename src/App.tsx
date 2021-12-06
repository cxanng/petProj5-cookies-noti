import React, { useState } from 'react';
import Dialog from './component/Dialog';
import Notification from './component/Notification';

function App() {
  const [open, setOpen] = useState<boolean>(false);
  const [noti, setNoti] = useState<string>("");
  return (
    <main>
      <Notification message={noti} setNoti={setNoti}/>
      <section className='container'>
        {
          open 
          ? <Dialog setOpen={setOpen} setNoti={setNoti} />
          : <button onClick={() => setOpen(true)} className="choice-button" style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>Open setting</button>
        }
      </section>
    </main>
  );
}

export default App;
