import React from 'react'

const Address = props => {
  return (
      <div>
        <div>
          <label>Street: </label>
          <input name="street"
                 value={props.street}
                 onChange={props.onChange}/>
        </div>
        <div>
          <label>City: </label>
          <input name="city"
                 value={props.city}
                 onChange={props.onChange}/>
        </div>
        <div>
          <label>State: </label>
          <input name="state"
                 value={props.state}
                 onChange={props.onChange}/>
        </div>
        <div>
          <label>Basic Zip: </label>
          <input name="basicZip"
                 value={props.basicZip}
                 onChange={props.onChange}/>
        </div>
        <div>
          <label>Plus Four Zip: </label>
          <input name="plusFourZip"
                 value={props.plusFourZip}
                 onChange={props.onChange}/>
        </div>
      </div>
  )
};

export default Address