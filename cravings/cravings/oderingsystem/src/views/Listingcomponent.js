import React, { Component } from 'react';
 
 
class Listing extends Component {
 
    constructor(props) {
        super(props)   
        this.state = {
            records: []
        }
         
    }
 
    componentDidMount() {
        fetch("http://localhost:8080/customer/getcustomer")
            .then(response => response.json())
            .then(records => {
                this.setState({
                    records: records
                })
            })
            .catch(error => console.log(error))
    }
 
    renderListing() {
        let recordList = []
        this.state.records.map(record => {
            return recordList.push(`<li key={record.id}>{record.name}</li>`)
        })
 
        return recordList;
    }
 
    render() {
        return (
            `<ul>
                {this.renderListing()}
            </ul>`
        );
    }
}
 
export default Listing;