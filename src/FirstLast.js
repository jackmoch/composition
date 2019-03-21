import React from 'react'

const FirstLast = props => {
  return (
      <div>
        <div>
          <label>First Name: </label>
          <input name="client.firstName"
                 value={props.client.firstName}
                 onChange={props.onChange}/>
        </div>
        <div>
          <label>Last Name: </label>
          <input name="client.lastName"
                 value={props.client.lastName}
                 onChange={props.onChange}/>
        </div>
      </div>
  )
};

export default FirstLast
