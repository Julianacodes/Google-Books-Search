import React from "react";
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button ,Row, Col} from "reactstrap";

function booksCard(props) {
  return (
    <div>
      <Card>
       
        <CardBody>
          <Row>
        <Col md={3}>
        <CardImg top width="100%" src={props.book.volumeInfo.imageLinks.thumbnail} alt="Card image cap" />
        </Col>
        <Col md={9}>
        <CardTitle>{props.book.volumeInfo.title}</CardTitle>
          <CardSubtitle>{props.book.volumeInfo.authors}</CardSubtitle>
          <CardText>{props.book.volumeInfo.description}</CardText>
          <Button onClick={()=>{
            props.handleSave(props.book)
          }}>Save Book</Button>
          <Button onClick={()=>{
            window.location.href=props.book.volumeInfo.infoLink
          }}>View Book</Button>
        </Col>
          </Row>
       
          
        </CardBody>
      </Card>
    </div>
  );
}
export default booksCard;
