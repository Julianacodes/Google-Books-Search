import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import SavedCard from "../components/SavedCard";
// import { render } from "react-dom";
import API from "../util/api";

class savedBooks extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    console.log("status");
   this.loadBooks()
   
  };
  loadBooks = () => {
    API.getBooks()
    .then(newBook => {
      console.log(newBook.data);

      this.setState({
        books: newBook.data,
      });
    });
  }

  handleDelete = newBookId => {
      API.deleteBooks(newBookId)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <Row>
          <Col md={8}>
            <SavedCard newBook={this.state.books} handleDelete={this.handleDelete}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default savedBooks;
