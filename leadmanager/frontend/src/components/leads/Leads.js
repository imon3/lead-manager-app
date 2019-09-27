import React, { Component } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import { getLeads, deleteLead } from '../../actions/leads';

export class Leads extends Component {
  static propTypes = {
    leads: Proptypes.array.isRequired,
    getLeads: Proptypes.func.isRequired,
    deleteLead: Proptypes.func.isRequired
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
              const { id, name, email, message } = lead;
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>{message}</td>
                  <td>
                    <button
                      onClick={() => this.props.deleteLead(id)}
                      className='btn btn-danger btn-sm'
                    >
                      Delete
                    </button>
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
  { getLeads, deleteLead }
)(Leads);
