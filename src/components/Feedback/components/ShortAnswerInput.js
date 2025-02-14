import React from 'react'

import { useShortAnswerInput } from 'react-google-forms-hooks'

export default function ShortAnswerInput({ id, location }) {
  const { register } = useShortAnswerInput(id)
  if (id == "199330391") {
    const myCurl = location
    return (
      <div>
        <input type='text' value={myCurl} {...register()} />
      </div>
    )
  } else {
    return (
      <div>
        <input type='text' {...register()} />
      </div>
    )
  }
  
}
