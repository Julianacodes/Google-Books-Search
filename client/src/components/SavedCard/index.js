import React from "react";
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button ,Row, Col} from "reactstrap";

function savedCard(props) {
  return (
    <div>
      <Card>
       
        <CardBody>
          <Row>
        <Col md={3}>
            
        <CardImg top width="100%" src={props.newBook.volumeInfo.imageLinks.thumbnail} alt="Card image cap" />
        </Col>
        <Col md={9}>
        <CardTitle>{props.newBook.volumeInfo.title}</CardTitle>
          <CardSubtitle>{props.newBook.volumeInfo.authors}</CardSubtitle>
          <CardText>{props.newBook.volumeInfo.description}</CardText>
          <Button onClick={()=>{
            props.handlDelete(props.newBook)
          }}>Delete Book</Button>
          <Button onClick={()=>{
            window.location.href=props.newBook.volumeInfo.infoLink
          }}>View Book</Button>
        </Col>
          </Row>
       
          
        </CardBody>
      </Card>
    </div>
  );
}
export default savedCard;