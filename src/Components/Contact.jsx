import React from "react";
import location from "./assets/location.png"
import call from "./assets/call.jpg"
import email from "./assets/email.png"
import Footer from "./Footer";

const Contact = () => {
    return(
        <>
        <div className="contact">
            <img className="location" src= {location} alt="" />
            <h1 className="address">Our Location</h1>
            <p className="info">123 Street, New York, USA.</p>
            <br/>
            <img className="call" src= {call} alt="" />
            <h1 className="address2">Call Us</h1>
            <p className="info2">+012 345 6789</p>
            <br/>
            <img className="email" src= {email} alt="" />
            <h1 className="address3">Email Us</h1>
            <p className="info3">mail@domain.com</p>
            <h3 className="h3">NEED HELP?</h3>
            <h2 className="h2">Send Us A Message</h2>
            <div>
            <input type="text" placeholder="Name" className="input" />
            <input type="text" placeholder="Email" className="input2" />
            <input type="text" placeholder="Subject" className="input3" />
            <textarea className="message" cols={5} rows={5} placeholder="Message"></textarea>
            <button className="submit">Submit</button>
            </div>
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Footer/>
        </>
    )
}


export default Contact;