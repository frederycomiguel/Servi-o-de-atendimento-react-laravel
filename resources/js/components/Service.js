import React, { Component } from 'react';

/* Stateless component or pure component
 * { service } syntax is the object destructing
 */
const Service = ({service}) => {

  const divStyle = {
      display: 'flex',
      flexDirection: 'column',
      width: '65%',
      margin: '30px 10px 10px 30px'
  }

  //if the props for service is null, return Service doesn't exist
  if(!service) {

    return(<div style={divStyle}><h2>  No Service was selected </h2> </div>);
  }

  //Else, display the service data
  return(
    <div style={divStyle}>
      <h2> {service.title} </h2>
      <p> {service.minutes} </p>
      <h3> Price : {service.price} </h3>

    </div>
  )
}

export default Service ;
