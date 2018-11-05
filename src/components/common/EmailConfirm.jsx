import React from 'react'
import emailnotification from '../../aserts/email-not.gif'

 const EmailConfirm = () => {
  return (
    <div className="email-not">
      <img  className="email-image" src={emailnotification} alt="email-notification" />
      <h3>An important mail have been sent to your mail, confirm to continue</h3>
    </div>
  )
}
export default EmailConfirm