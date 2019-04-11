import React from 'react';
import ReviewListEntry from './ReviewListEntry.jsx';

const ReviewList = (props) => {
    return(
    <div>
       <ReviewListEntry reviews = { {data: props.reviews.data, reload: props.reviews.reload} }/>
       <br></br>
       <span onClick = {() => props.reviews.seeAll()}>See all {props.reviews.length} reviews...</span>
    </div>)
};


export default ReviewList;
