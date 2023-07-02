import { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import imgContacts from '../../../assets/Images/contact/5124556.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Connect = () => {

    const emailRef = useRef();
    const nameRef = useRef();
    const [loading, setLoading] = useState(false);

    useEffect(() => emailjs.init("kW7JxiPAQxZ34v9S9"), []);

    useEffect(() => {
        AOS.init({
            duration: 3000,
            once: true,
        });
        AOS.refresh(); // Refresh AOS when the component mounts or updates
    }, []);


    const handleEmailSubmit = async (e) => {
        e.preventDefault();
        const serviceId = "service_7m2b89i";
        const templateId = "template_50o13wa";
        try {
            setLoading(true);
            await emailjs.send(serviceId, templateId, {
                name: nameRef.current.value,
                recipient: emailRef.current.value
            });
            alert("email successfully sent check inbox");
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }



    return (
        <div className="grid grid-cols-2">
            <div><img data-aos="fade-up" src={imgContacts} alt="" /></div>
            <div data-aos="fade-down" className="mt-24">
                <h1 className="text-5xl ms-32 font-bold mb-5">Contact Information</h1>
                <form className="form-control w-full max-w-lg mx-auto" onSubmit={handleEmailSubmit}>
                    <label className="label">
                        <span className="text-xl font-semibold">Your Name</span>
                    </label>
                    <input type="text" ref={nameRef} placeholder="Your name" className="input input-bordered border-4 w-full max-w-lg my-3" />
                    <label className="label">
                        <span className="text-xl font-semibold">Your Email</span>
                    </label>
                    <input type="email" ref={emailRef} placeholder="Your email" className="input input-bordered border-4 w-full max-w-lg my-3" />
                    <label className="label">
                        <span className="text-xl font-semibold">Your Message</span>
                    </label>
                    <textarea className="textarea textarea-primary my-3" placeholder="Your message"></textarea>
                    <input disabled={loading} className="btn btn-neutral my-4" type="submit" value="send" />
                </form>
            </div>
        </div>
    );
};

export default Connect;