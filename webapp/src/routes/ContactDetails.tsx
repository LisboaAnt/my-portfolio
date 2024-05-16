import React from "react";
import { Link, useParams } from "react-router-dom";

const ContactDetails = () =>{
    const {id} = useParams();
    return <div>ContactDetails {id}</div>;
};
export default ContactDetails;