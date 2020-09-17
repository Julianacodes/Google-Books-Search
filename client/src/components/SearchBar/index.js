import React from "react";
import { Form } from 'semantic-ui-react';
import "./index.css"


function searchBar (props){
    return(
        <Form.Field>
      <label className= "searchBar">What book would you like to search?</label>
      <input name="title" value={props.title} onChange={props.handleInputChange} className="searchInput" placeholder='Book Title' />
    </Form.Field>
    )
}

export default searchBar 