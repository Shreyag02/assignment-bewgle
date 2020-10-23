import React from 'react';
import Data from './data.json';
import {AiFillLike,BsStarFill} from 'react-icons/all';
import { ListGroup, ListGroupItem,Badge,Button } from 'reactstrap';
const Votes = () => {
    return (
        <div className=" col-md-10 my-0 mx-auto">
            <br/>
        <div className="d-flex justify-content-around" >
            <h3>Votes</h3>
            <Button color="primary" outline>
                Total    <Badge color="secondary">{Data.review_rating.total} <AiFillLike className=""/></Badge>
            </Button>
        </div>
        <br/>
        <ListGroup className="col-md-11 mx-auto my-0">
        {console.log(Data.review_rating.votes)}
        {Data.review_rating.votes.map(vote => {
            
                return(
                <ListGroupItem className="h4 " key={vote.rating}>
                
                {vote.rating}<BsStarFill className="m-1 p-1 text-warning"/> : {vote.votes}<AiFillLike className="m-1 p-1 text-primary"/>
                
                </ListGroupItem>
                )
            })}
        </ListGroup>


        </div>
    );

}

export default Votes;
