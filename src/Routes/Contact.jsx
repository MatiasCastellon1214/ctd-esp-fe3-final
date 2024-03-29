import React from 'react'
import Form from '../Components/Form'
import { useDetailState } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const {state} = useDetailState();
  return (
    <div className='contact'>
      <div className={state.theme === 'dark' ? 'dark' : ''}>
        <h2>Want to know more?</h2>
        <p>Send us your questions and we will contact you</p>
        <Form/>
      </div>
    </div>
  )
}

export default Contact