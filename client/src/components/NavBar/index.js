import React from "react";
import { Row, Col } from "reactstrap";
import ButtonUi from "../Button"
import "./index.css"
import { Link } from "react-router-dom"

const NavBar = (props) => {
    return(
        <div className="navBar">
            <Row>
                <Col md={12}>
                    <Row>
                        <Col md={4}>
                             <Link to ="/" >
                                 <ButtonUi  className="searchbtn" text="Search Books"/>
                                 </Link>
                        </Col>
                        <Col md={4}>
                            <h1 className="title">Google Book Search</h1>
                        </Col>
                        <Col md={4}>
                             <Link to ="/savedBooks">
                             <ButtonUi  className="savedbtn" text="Saved Books"/>
                             </Link>
                        </Col>
                    </Row>

                </Col>
            </Row>
        </div>



    );
};

export default NavBar