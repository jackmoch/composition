import React from 'react'

const FirstLast = props => {
  return (
      <div>
        <div>
          <label>First Name: </label>
          <input name="firstName"
                 value={props.firstName}
                 onChange={props.onChange}/>
        </div>
        <div>
          <label>Last Name: </label>
          <input name="lastName"
                 value={props.lastName}
                 onChange={props.onChange}/>
        </div>
      </div>
  )
};

export default FirstLast
