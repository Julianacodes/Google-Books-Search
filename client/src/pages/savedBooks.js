import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import SavedCard from "../components/SavedCard";
// import { render } from "react-dom";
import API from "../util/api";

class savedBooks extends Component {
  state = {
    results: [],
    title: "",
  };

  componentDidMount() {
    console.log("status");

    API.saveBooks()
    .then(newBook => {
      console.log(newBook.data);

      this.setState({
        newBook: newBook.data,
      });
    });
  };

  handleDelete = newBook => {
      API.deleteBooks(newBook)
      .then(res => this.saveBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <Row>
          <Col md={8}>
            <SavedCard newBook={this.state.newBook}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default savedBooks;
