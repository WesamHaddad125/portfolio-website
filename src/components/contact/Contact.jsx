import { useState } from "react";
import emailjs from "emailjs-com";
import "./contact.scss"

export default function Contact() {
    const [message, setMessage] = useState(false)

    const resetForm = () => {
        document.getElementById("contact-form").reset();
    }

    emailjs.init('oSeZMMCdgXlgxycRf');

    const handleSubmit = (e)=> {
        e.preventDefault();

        // Send Email
        emailjs.sendForm('service_cx3k8nd', 'template_w5no95a', e.target)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        setMessage(true);
        resetForm();
    };
    return (
        <div className="contact" id="contact"> 
            <div className="left">
                <img src="/assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit} id="contact-form">
                    <input type="text" placeholder="Subject" name="subject"/>
                    <input type="text" placeholder="Name" name="name"/>
                    <input type="text" placeholder="Email" name="email"/>
                    <textarea placeholder="Message" name="message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, I'll reply soon :)</span>}
                </form>
            </div>
        </div>
    )
}
