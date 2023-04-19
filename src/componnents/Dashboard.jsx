import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useEffect, useState } from "react";
import { sanityClient } from "./sanityClient";
import moment from "moment";
import DasboardDetail from "./DasboardDetail";
import { Link } from "react-router-dom";
function Dashboard() {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const contact = `*[_type == "contact"]{
      _createdAt,_id,name,email, message,phone,subject
    } `;
    sanityClient.fetch(contact).then((response) => setContacts(response));
  }, []);

  return (
    <div>
      <Header />
      <div className="dashboard">
        <div className="left_side_bar">
          <div className="contact_chat">
            {contacts.map((contact) => (
              <Link
                style={{ color: "black", textDecoration: "none" }}
                key={contact._id}
                to={`/dashboard/${contact._id}`}
              >
                <div className="contact_us">
                  <h4>Name:{contact.name}</h4>
                  <span>{moment(contact._createdAt).fromNow()}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="right_side_bar">
          <DasboardDetail />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
