import React, { Component } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import { getLeads } from '../../actions/leads';

export class Leads extends Component {
  static propTypes = {
    leads: Proptypes.array.isRequired
  };

  componentDidMount() {
    this.props.getLeads();
  }

  render() {
    return (
      <>
        <h2>Leads List</h2>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.leads.map(lead => {
              return (
                <tr key={lead.id}>
                  <td>{lead.id}</td>
                  <td>{lead.name}</td>
                  <td>{lead.email}</td>
                  <td>{lead.message}</td>
                  <td>
                    <button className='btn btn-danger btn-sm'>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

const mapStateToProps = state => ({
  leads: state.leads.leads
});

export default connect(
  mapStateToProps,
  { getLeads }
)(Leads);
