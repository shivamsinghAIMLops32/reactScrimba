import React ,{useId}from 'react'

// trivia : only different component will have different value
const UniqueId = () => {
    const uniqueId = useId();  // it doesnt take any args
  return (
    <div>
        <label htmlFor={`${uniqueId}-name`}>enter your name : </label>
        <input type="text" id={`${uniqueId}-name`}/>
        <br /><br />
        <label htmlFor={`${uniqueId}-passoword`}>enter your passowrd : </label>
        <input type="text" id={`${uniqueId}-password`}/>
    </div>
  )
}

export default UniqueId