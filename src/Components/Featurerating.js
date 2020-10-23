import React from 'react';
import Data from './data.json';
import {HiOutlineOfficeBuilding, BsStarFill, GiBubblingBowl,MdFreeBreakfast, BsFillPeopleFill,RiServiceFill} from 'react-icons/all';
import { ListGroup, ListGroupItem } from 'reactstrap';
const Featurerating = () => {
    return (
        <div>
            <ListGroup className="list-group-horizontal d-flex flex-wrap justify-content-around">
                <ListGroupItem className="col-md-3 m-1 border"><h3><HiOutlineOfficeBuilding/> Place : {Data.feature_rating.place} <BsStarFill className="m-1 p-1 text-warning"/></h3></ListGroupItem>
                <ListGroupItem className="col-md-3 m-1 border"><h3><GiBubblingBowl/> Food : {Data.feature_rating.food} <BsStarFill className="m-1 p-1 text-warning"/></h3></ListGroupItem>
                <ListGroupItem className="col-md-3 m-1 border"><h3><RiServiceFill/> Service : {Data.feature_rating.service} <BsStarFill className="m-1 p-1 text-warning"/></h3></ListGroupItem>
                <ListGroupItem className="col-md-3 m-1 border"><h3><BsFillPeopleFill/> Staff : {Data.feature_rating.staff} <BsStarFill className="m-1 p-1 text-warning"/></h3></ListGroupItem>
                <ListGroupItem className="col-md-3 m-1 border"><h3><MdFreeBreakfast/> Breakfast : {Data.feature_rating.breakfast} <BsStarFill className="m-1 p-1 text-warning"/></h3></ListGroupItem>
            </ListGroup>
        </div>
    );
}

export default Featurerating;
