import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import API from "../util/api";
import SearchBar from "../components/SearchBar";
import ButtonUi from "../components/Button";
import BooksCard from "../components/BooksCard";

class Home extends Component {
  state = {
    results: [],
    title: "",
  };
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    console.log(value);
  };
  handleSubmit = (event) => {
    API.getGoogleBooks(this.state.title).then((results) => {
      console.log(results)
      this.setState({
        results: results.data
      });
    });
  };
  handleSave = (book) => {
    const newBook ={
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      description:book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
      link: book.volumeInfo.infoLink

    }
    API.saveBooks(newBook).then(results=>{
      console.log(results)
    })
  }
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col md={8}>
              <SearchBar title={this.state.title} handleInputChange={this.handleInputChange} />
            </Col>
            <Col md={4}>
              <ButtonUi className="searchBook" text="Search" handleSubmit={this.handleSubmit}/>
            </Col>
          </Row>
    
          {this.state.results.length > 0
            ? this.state.results.map((book) => {
                return (
                  <Row>
                    <Col md={12}>
                      <BooksCard book={book} handleSave={this.handleSave} />
                    </Col>
                  </Row>
                );
              })
            : 
            <Container>
              <Row>
                <Col md={12}>
              <h4 className="noBook" >No Search Found</h4>
              </Col>
                </Row>
                </Container>}
        </Container>
      </>
    );
  }
}

export default Home;
