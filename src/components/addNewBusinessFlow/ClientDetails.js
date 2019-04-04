import React from 'react';

const ClientDetails = props => {

  return (
      <div>
        <div>
          <label>Name: </label>
          <input name="name"
                 value={props.name}
                 onChange={props.onChange}/>
        </div>
        <div>
          <label>Plan Effective Date: </label>
          <input name="planEffectiveDate"
                 value={props.planEffectiveDate}
                 onChange={props.onChange}/>
        </div>
        <div>
          <label>Plan End Date: </label>
          <input name="planEndDate"
                 value={props.planEndDate}
                 onChange={props.onChange}/>
        </div>
        <div>
          <label>Number of Eligible Employees: </label>
          <input name="numOfEligibleEmployees"
                 value={props.numOfEligibleEmployees}
                 onChange={props.onChange}/>
        </div>
      </div>
  )
};


export default ClientDetails