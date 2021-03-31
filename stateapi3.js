import React, { Component } from "react";
class StateApiThree extends Component {
  constructor() {
    super();
    this.state = {
      servicelist: [],
    };
  }
  getData = () => {
    fetch("http://firstenquiry.com/api/react/live/allservice.php")
      .then((response) => response.json())
      .then((result) => this.setState({ servicelist: result }));
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2>All Service List</h2>

            <table className="table table-bordered table-sm">
              <thead>
                <tr className="text-info text-center">
                  <th>Index</th>
                  <th>Name</th>
                  <th>Seo Name</th>
                  <th>Active</th>
                </tr>
              </thead>
              <tbody>
                {this.state.servicelist.map((xservice, index) => {
                  return (
                    <tr key={index}>
                      <td>{index}</td>
                      <td>{xservice.name}</td>
                      <td>{xservice.seoname}</td>
                      <td>{xservice.active}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default StateApiThree;
