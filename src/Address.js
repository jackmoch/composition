import React from 'react'

const Address = props => {
  return (
      <div>
        <div>
          <label>Street: </label>
          <input name="address.street"
                 value={props.address.street}
                 onChange={props.onChange}/>
        </div>
        <div>
          <label>City: </label>
          <input name="address.city"
                 value={props.address.city}
                 onChange={props.onChange}/>
        </div>
        <div>
          <label>State: </label>
          <input name="address.state"
                 value={props.address.state}
                 onChange={props.onChange}/>
        </div>
      </div>
  )
};

export default Address