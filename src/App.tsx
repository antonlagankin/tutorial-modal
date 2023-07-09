import React, { useContext, useState } from 'react';
import { Modal } from './components/Modal';
import { ModalContext, ModalState } from './context/ModalContext';

export default function App() {
  function click() {
      console.debug('====')
  }

  const modalWindowContext = useContext(ModalContext)

  return (
      <div className='grid h-screen place-items-center bg-gray-200'>
        <button className=" bg-white p-4 rounded-xl shadow-md" 
            onClick={() => {
              console.log('========')
              modalWindowContext.setVisible(true)
            }}
        >Open modal window</button>
        <Modal>
          <img src="https://media.giphy.com/media/plUTJQbOO1PPoFImdu/giphy.gif"/>
        </Modal>
      </div>
  )
}