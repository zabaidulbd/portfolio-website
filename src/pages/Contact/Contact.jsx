

const Contact = () => {
    return (
        <>
            <h1 className="text-5xl text-center font-bold">Contact</h1>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Please type your name</span>
                </label>
                <input type="text" placeholder="Your name" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    <span className="label-text">Please type your email</span>
                </label>
                <input type="email" placeholder="Your email" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    <span className="label-text">Your message</span>
                </label>
                <textarea className="textarea textarea-primary" placeholder="Your message"></textarea>
                <button className="btn btn-active btn-neutral">send</button>
            </div>
        </>
    );
};

export default Contact;