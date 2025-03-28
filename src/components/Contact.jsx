import LinkedIn from "../assets/socials/Linkedin.svg";
import Github from "../assets/socials/Github.svg";
import Instagram from "../assets/socials/Insta.svg";
import Twitter from "../assets/socials/Twitter.svg";

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container lg:grid lg:grid-cols-2 lg:gap-10">
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="headline-2">Contact me</h2>
            <p className="mb-4">Let's connect and work together. Reach out today.</p>
          </div>
          <div className="grid grid-cols-2 gap-4 items-center">
            <a href="https://linkedin.com/in/pushpeshpant" target="_blank" rel="noreferrer">
              <img src={LinkedIn} alt="LinkedIn" className="w-25 h-25 hover:scale-110 transition-transform duration-200" />
            </a>
            <a href="https://github.com/impushpesh" target="_blank" rel="noreferrer">
              <img src={Github} alt="Github" className="w-25 h-25 hover:scale-110 transition-transform duration-200" />
            </a>
            <a href="https://www.instagram.com/impushpesh" target="_blank" rel="noreferrer">
              <img src={Instagram} alt="Instagram" className="w-25 h-25 hover:scale-110 transition-transform duration-200" />
            </a>
            <a href="https://twitter.com/iPushpesh_Pant" target="_blank" rel="noreferrer">
              <img src={Twitter} alt="Twitter" className="w-25 h-25 hover:scale-110 transition-transform duration-200" />
            </a>
          </div>
        </div>

        <div className="lg:flex lg:items-center lg:justify-end">
          <form action="https://getform.io/f/avrwdjwa" method="POST" className="w-full max-w-lg">
            <div className="md:grid md:grid-cols-2 md:gap-2">
              <div className="mb-4">
                <label htmlFor="name" className="label">Name</label>
                <input type="text" className="text-field" name="name" id="name" autoComplete="name" required placeholder="Pushpesh Pant" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="label">Email</label>
                <input type="email" className="text-field" name="email" id="email" autoComplete="email" required placeholder="example@gmail.com" />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="label">Message</label>
              <textarea name="message" id="message" placeholder="Hi!" required className="text-field resize-y min-h-32 max-h-80"></textarea>
            </div>
            <button type="submit" className="bg-sky-500 text-white px-6 py-3 rounded-xl hover:bg-sky-600 transition-colors">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;