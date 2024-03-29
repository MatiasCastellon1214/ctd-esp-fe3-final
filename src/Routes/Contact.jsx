import React from 'react'
import Form from '../Components/Form'
import { useDetailState } from '../Components/utils/global.context'

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