import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Service from './Service';
import AddService from './AddService';

/* Main Component */
class Main extends Component {

  constructor() {

    super();
    //Initialize the state in the constructor
    this.state = {
        services: [],
        currentService: null

    }
     this.handleAddService = this.handleAddService.bind(this);
  }
  /*componentDidMount() is a lifecycle method
   * that gets called after the component is rendered
   */
  componentDidMount() {
    /* fetch API in action */
    fetch('/api/services')
        .then(response => {
            return response.json();
        })
        .then(services => {
            //Fetched service is stored in the state
            this.setState({ services });
        });
  }

 renderServices() {
        const listStyle = {
            listStyle: 'none',
            fontSize: '18px',
            lineHeight: '1.8em',
        }
    return this.state.services.map(service => {
        return (
            /* When using list you need to specify a key
             * attribute that is unique for each list item
            */
            <li style={listStyle} onClick={
                () =>this.handleClick(service)} key={service.id} >
                { service.title }
            </li>
        );
    })
  }

  handleClick(service) {

      //handleClick is used to set the state
      this.setState({currentService:service});

  }

   handleAddService(service) {

    service.price = Number(service.price);
    /*Fetch API for post request */
    fetch( 'api/services/', {
        method:'post',
        /* headers are important*/
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },

        body: JSON.stringify(service)
    })
    .then(response => {
        return response.json();
    })
    .then( data => {

        this.setState((prevState)=> ({
            services: prevState.services.concat(data),
            currentService : data
        }))
    })
 //update the state of services and currentService
  }

  render() {

   const mainDivStyle =  {
        display: "flex",
        flexDirection: "row"
    }

    const divStyle = {

        justifyContent: "flex-start",
        padding: '10px',
        width: '35%',
        background: '#f0f0f0',
        padding: '20px 20px 20px 20px',
        margin: '30px 10px 10px 30px'

    }

    return (
        <div>
          <div style= {mainDivStyle}>
            <div style={divStyle}>
                <h3> All services </h3>
                  <ul>
                    { this.renderServices() }
                  </ul>

            </div>
                <Service service={this.state.currentService} />
                <AddService onAdd={this.handleAddService} />
          </div>

        </div>

    );
  }
}

export default Main;

/* The if statement is required so as to Render the component
 * on pages that have a div with an ID of "root";
 */

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
