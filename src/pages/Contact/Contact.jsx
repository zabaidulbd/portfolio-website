

const Contact = () => {
    return (
        <div className="mt-5">
            <h1 className="text-5xl text-center font-bold mb-5">Contact</h1>
            <div className="form-control w-full max-w-lg mx-auto">
                <label className="label">
                    <span className="text-xl font-semibold">Your Name</span>
                </label>
                <input type="text" placeholder="Your name" className="input input-bordered border-8 w-full max-w-lg my-3" />
                <label className="label">
                    <span className="text-xl font-semibold">Your Email</span>
                </label>
                <input type="email" placeholder="Your email" className="input input-bordered border-8 w-full max-w-lg my-3" />
                <label className="label">
                    <span className="text-xl font-semibold">Your Message</span>
                </label>
                <textarea className="textarea textarea-primary my-3" placeholder="Your message"></textarea>
                <button className="btn btn-active btn-neutral mb-5">send</button>
            </div>
        </div>
    );
};

export default Contact;