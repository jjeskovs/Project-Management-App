import React, { Component } from "react";
import API from "../../utils/API";
import TextEditor from "./TextEditor";
import { TextArea } from "../Form/"
import { Card } from "reactstrap";
import "./style.scss";

class IssueDetails extends Component {
  constructor(props){
    super(props);

      this.state = {
        issue: this.props.issue, 
        details: this.props.details,
        projectId: this.props.projectId
      }
    }
  
    handleInputChange = event => {
      const { name, value } = event.target;

      this.setState({
          [name]: value
      }, () => this.props.updateDetail(value));

      

    };

    handleFormSubmit = event => {
      event.preventDefault();
      API.saveIssue({
        issue: this.state.issue,
        details: this.state.details,
        projectId: this.props.match.params.id
        
      })

        .then(res => this.loadIssues())
        .catch(err => console.log(err));
    
  };

  
  render () {
    return (
      <>
      <Card>
        <h2>{this.props.issue}</h2>
      </Card>
      <TextEditor
      // key={this.state.issue.id}
      // issue={this.state.issue.issue}
      // details={this.state.issue.details}
      // projectId={this.state.issue.projectId}
      />
      <TextArea
        className="form-control"
        id="exampleFormControlTextarea1"
        value={this.state.details}
        onChange={this.handleInputChange}
        rows="3"
        fieldName="details"
        > 
        {this.props.details}
      </TextArea>
    </>
  );
  }
};

export default IssueDetails;
