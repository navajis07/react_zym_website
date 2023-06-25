import React from 'react'

function Contact() {
  return (
    <div id='contact'>
      <h1>CONTACT US</h1>
      <form action="">
        <input type="text" placeholder='Full name'required/>
        <input type="email" placeholder='E-mail'required/>
        <textarea name="message" placeholder='Write Here.....'></textarea>
        <input type="submit" value='send'/>
      </form>
    </div>
  )
}

export default Contact