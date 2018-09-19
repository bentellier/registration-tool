import React, { Component } from "react";

import SingleInput from './components/SingleInput';
import Select from './components/Select';

class FormIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visitorName: '',
      visitorCompany: '',
      visitedName: '',
      reasonOptions: [],
      reasonSelection: ''
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleFullNameChange = this.handleFullNameChange.bind(this);
    this.handleCompanyNameChange = this.handleCompanyNameChange.bind(this);
    this.handleVisitedNameChange = this.handleVisitedNameChange.bind(this);
    this.handleReasonSelect = this.handleReasonSelect.bind(this);
  }

  componentDidMount() {
    fetch('./fake_db.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          visitorName: data.visitorName,
          visitorCompany: data.visitorCompany,
          visitedName: data.visitedName,
          reasonOptions: data.reasonOptions,
          reasonSelection: data.reasonSelection
        });
      });
  }

  handleFullNameChange(e) {
    this.setState({ visitorName: e.target.value }, () => console.log('name:', this.state.visitorName));
  }

  handleCompanyNameChange(e) {
    this.setState({ visitorCompany: e.target.value }, () => console.log('company:', this.state.visitorCompany));
  }

  handleVisitedNameChange(e) {
    this.setState({ visitedName: e.target.value }, () => console.log('visited name:', this.state.visitedName));
  }

  handleReasonSelect(e) {
    this.setState({ reasonSelection: e.target.value }, () => console.log('reason', this.state.reasonSelection));
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      visitorName: '',
      visitorCompany: '',
      visitedName: '',
      reasonSelection: ''
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const formPayload = {
      visitorName: this.state.visitorName,
      visitorCompany: this.state.visitorCompany,
      visitedName: this.state.visitedName,
      reasonSelection: this.state.reasonSelection
    };

    this.props.history.push('/terms');

    // SEND FORM DATA TO THE DATABASE
    // USE SEQUELIZE -->
    fetch(`http://localhost:8888/registration-server/?visitor-name=${this.state.visitorName}&visitor-company=${this.state.visitorCompany}&visited-name=${this.state.visitedName}&reason-selection=${this.state.reasonSelection}`, { 
      method: 'POST',
      body: formPayload,
    });
    
    console.log('Send this in a POST request:', formPayload);
    console.log(`http://localhost:8888/registration-server/?visitor-name=${this.state.visitorName}&visitor-company=${this.state.visitorCompany}&visited-name=${this.state.visitedName}&reason-selection=${this.state.reasonSelection}`);
    this.handleClearForm(e);
  }

  render() {
    return (
      <div>
      <form className="container" onSubmit={this.handleFormSubmit.bind(this)} autoComplete="off">
        <SingleInput
          inputType={'text'}
          title={'Name'}
          name={'name'}
          controlFunc={this.handleFullNameChange}
          content={this.state.visitorName}
          placeholder={'Type first and last name here'} 
          />

        <SingleInput
          inputType={'text'}
          title={'Company'}
          name={'company'}
          controlFunc={this.handleCompanyNameChange}
          content={this.state.visitorCompany}
          placeholder={'Type your company name here'} />

        <SingleInput
          inputType={'text'}
          title={'Who you\'re visiting'}
          name={'company'}
          controlFunc={this.handleVisitedNameChange}
          content={this.state.visitedName}
          placeholder={'Type the name of the person you are visiting'} />
      
        <Select
          title={'Reason for visit'}
          name={'reason'}
          controlFunc={this.handleReasonSelect}
          options={this.state.reasonOptions}
          selectedOption={this.state.reasonSelection}
          placeholder={'Select the reason of your visit'}  />
     
        <input
          type="submit"
          className="btn btn-primary float-right active"
          value="Done"/>

      </form>
      </div>
    );
  }
}
 
export default FormIn;