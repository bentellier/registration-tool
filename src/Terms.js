import React, { Component } from "react";
import {
  
} from "react-router-dom";

import CheckboxOrRadioGroup from './components/CheckboxOrRadioGroup';



class Terms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      termsSelection: [],
      tickedTerms: [],
      required: "true"
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.ticketTermsSelection = this.ticketTermsSelection.bind(this);
   
  }

  componentDidMount() {
    fetch('./fake_db.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          termsSelection: data.termsSelection,
          tickedTerms: data.tickedTerms,
        });
      });
  }

  ticketTermsSelection(e) {
    const newSelection = e.target.value;
    let newSelectionArray;
    if(this.state.tickedTerms.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.tickedTerms.filter(s => s !== newSelection)
    } else {
      newSelectionArray = [...this.state.tickedTerms, newSelection];
    }
    this.setState({ tickedTerms: newSelectionArray }, () => console.log('Terms', this.state.tickedTerms));
  }


  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      tickedTerms: []
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.props.history.push('/thanks');
  }

  render() {
    return (
      <div>
        <div className="terms">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        </div>
        <form onSubmit={this.handleFormSubmit.bind(this)}>
        <CheckboxOrRadioGroup
          setName={'terms'}
          type={'checkbox'}
          controlFunc={this.ticketTermsSelection}
          options={this.state.termsSelection}
          selectedOptions={this.state.tickedTerms} 
          setRequired={'true'}
          />
          <input
          type="submit"
          className="btn btn-primary float-right active"
          value="I accept"/>
        </form>
      </div>

    );
  }
}
 
export default Terms;