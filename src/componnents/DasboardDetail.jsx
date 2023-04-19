import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { sanityClient } from "./sanityClient";
import { useState } from "react";
import moment from "moment";
function DasboardDetail() {
  const { id } = useParams();
  const [contacts, setContacts] = useState([]);
  console.log(contacts);
  useEffect(() => {
    const contact = `*[_id == "${id}"]{
      _createdAt,_id,name,email, message,phone,subject
    } `;
    sanityClient.fetch(contact).then((response) => setContacts(response));
  }, [id]);
  return (
    <div>
      {contacts.map((x) => (
        <div className="" key={x._id}>
          <div
            className=""
            style={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "lightblue",
            }}
          >
            <h1>From:{x.name}</h1>
            <h1>Email:{x.email}</h1>
          </div>
          <h1>Tel:{x.phone}</h1>
          <h1>Message: {x.message}</h1>
          <h1>Time: {moment(x._createdAt).fromNow()}</h1>
        </div>
      ))}
    </div>
  );
}

export default DasboardDetail;
