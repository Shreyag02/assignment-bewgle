import React from 'react';
import Data from './data.json';
import {Badge} from 'reactstrap';
import Votes from './Votes';
const Category = () => {
        
return(
<div className="d-flex">
    <div className="col-md-6 p-4">      
        <img src={Data.cover_image} className="img-fluid img-thumbnail" alt=""/>
    </div>
    <div className="col-md-6">
    <h4>Category:</h4>
        {Data.category.map(tags => {

            return(
            <Badge color="info" className="align-self-center m-3 px-3 py-1 h6" >
            {tags}
            </Badge>
            )
        })}
    <br/>
    <Votes/>
    </div>
</div>
);
}

export default Category;
