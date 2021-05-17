import React from 'react';
import propTypes from "prop-types";


const Profile = (props) => {
    return (
        <div>
            {props.handleName(props.fullName)}
            <h1 style={{color:"red",fontSize:"50px"}}>{props.fullName}</h1>
            <p style={{fontSize:"25px"}}>{props.bio}</p>
            <h3 style={{fontSize:"30px",color:"white",backgroundColor:"black"}}>{props.profession}</h3>
            {props.children}
        </div>
    )
}
Profile.defaultProps ={
     fullName: "this the default fullname"
}
Profile.propTypes = {
    fullName : propTypes.string,
    bio : propTypes.string,
    profession : propTypes.string

}

export default Profile
