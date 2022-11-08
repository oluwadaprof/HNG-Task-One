import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>

      <form>
        <div className="fullname">
          <div className="firstname">
            <label className="label">First Name</label>
            <input
              id="first_name"
              className="input"
              placeholder="Enter your first name"
            />
          </div>
          <div className="lastname">
            <label className="label">Last Name</label>
            <input
              id="last_name"
              className="input"
              placeholder="Enter your last name"
            />
          </div>
        </div>

        <div className="email">
          <label className="label">Email</label>
          <input id="email" className="input" placeholder="your@gmail.com" />
        </div>
        <div className="comment">
          <label className="label">Message</label>
          <textarea
            cols="19"
            rows="8"
            placeholder="Send me a message and I'll reply you as soon as possible..."
          />
          <br />
        </div>
        <div className="checkbox">
          <input type="checkbox" />
          <label>
            You agree to providing your data to who may contact you.
          </label>
        </div>
        <button id="btn_submit" type="">
          Send Message
        </button>
        <button id="btn_submit" type="">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
