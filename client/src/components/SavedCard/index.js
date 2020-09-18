import React from "react";
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button ,Row, Col} from "reactstrap";

function savedCard(props) {
  return (
    <div>
      {props.newBook.length>0 ? props.newBook.map(book=>{
        return(
<Card>
       
       <CardBody>
         <Row>
       <Col md={3}>
           
       <CardImg top width="100%" src={book.image? book.image :"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png"} alt="Card image cap" />
       </Col>
       <Col md={9}>
       <CardTitle>{book.title}</CardTitle>
         <CardSubtitle>{book.authors}</CardSubtitle>
         <CardText>{book.description}</CardText>
         <Button onClick={()=>{
           props.handleDelete(book._id)
         }}>Delete Book</Button>
         <Button onClick={()=>{
           window.location.href=book.link
         }}>View Book</Button>
       </Col>
         </Row>
      
         
       </CardBody>
     </Card>
   
   
   
        )
      })
    :"No saved book"
    }
      
    
    
    </div>
  );
}
export default savedCard;