import React from "react";
import { Row, Col } from "reactstrap";
import ButtonUi from "../Button"
import "./index.css"


const NavBar = (props) => {
    return(
        <div className="navBar">
            <Row>
                <Col md={12}>
                    <Row>
                        <Col md={4}>
                            <ButtonUi className="searchbtn" text="Search Books" /> 
                        </Col>
                        <Col md={4}>
                            <h1 className="title">Google Book Search</h1>
                        </Col>
                        <Col md={4}>
                            <ButtonUi className="savedbtn" text="Saved Books" />
                        </Col>
                    </Row>

                </Col>
            </Row>
        </div>



    );
};

export default NavBar