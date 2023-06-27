

const Contact = () => {
    return (
        <div className="mt-20">
            <h1 className="text-5xl text-center font-bold mb-14">Contact</h1>
            <div className="form-control w-full max-w-lg mx-auto">
                <label className="label">
                    <span className="text-xl font-semibold">Please type your name</span>
                </label>
                <input type="text" placeholder="Your name" className="input input-bordered border-8 w-full max-w-lg my-4" />
                <label className="label">
                    <span className="text-xl font-semibold">Please type your email</span>
                </label>
                <input type="email" placeholder="Your email" className="input input-bordered border-8 w-full max-w-lg my-4" />
                <label className="label">
                    <span className="text-xl font-semibold">Your message</span>
                </label>
                <textarea className="textarea textarea-primary my-4" placeholder="Your message"></textarea>
                <button className="btn btn-active btn-neutral mb-10">send</button>
            </div>
        </div>
    );
};

export default Contact;