import { useEffect, useRef } from "react";
import imgContact from '../../assets/Images/contact/5124556.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ht5noxs', 'template_50o13wa', form.current, 'kW7JxiPAQxZ34v9S9')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };



    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
        AOS.refresh(); // Refresh AOS when the component mounts or updates
    }, []);


    return (
        <div className="grid grid-cols-2">
            <div data-aos="fade-up"><img src={imgContact} alt="" /></div>
            <div data-aos="fade-right" className="mt-24">
                <h1 className="text-5xl ms-32 font-bold mb-5">Reach Out to Me</h1>
                <form ref={form} onSubmit={sendEmail} className="form-control w-full max-w-lg mx-auto">
                    <label className="label">
                        <span className="text-xl font-semibold">Your Name</span>
                    </label>
                    <input type="text" name="user_name" placeholder="Your name" className="input input-bordered border-4 w-full max-w-lg my-3" />
                    <label className="label">
                        <span className="text-xl font-semibold">Your Email</span>
                    </label>
                    <input type="email" name="user_email" placeholder="Your email" className="input input-bordered border-4 w-full max-w-lg my-3" />
                    <label className="label">
                        <span className="text-xl font-semibold">Your Message</span>
                    </label>
                    <textarea className="textarea textarea-primary my-3" placeholder="Your message" name="message"></textarea>
                    <input className="btn btn-neutral hover:bg-[#2B3A49] hover:text-[#FFFFFF]  transition-colors duration-300 transform hover:scale-105 my-4" type="submit" value="send" />
                </form>
            </div>
        </div>
    );
};

export default Contact;