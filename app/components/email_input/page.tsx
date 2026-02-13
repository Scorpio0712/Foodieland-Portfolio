'use client'

import React from 'react'
import style from './email_input.module.css'

interface EmailInputProps {
    placeholder: string;
    buttonText: string;
    onSubmit?: (email: string) => void;
}

function EmailInput({placeholder = "Your email address..."}) {
  return (
    <div>EmailInput</div>
  )
}

export default EmailInput