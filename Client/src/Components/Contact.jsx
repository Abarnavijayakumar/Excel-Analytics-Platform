import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#1e1b4b] via-[#2e1065] to-[#4c1d95] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-4xl bg-white bg-opacity-10 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Details */}
          <div className="text-white space-y-4">
            <h3 className="text-3xl font-semibold" style={{fontFamily: '"Anton", sans-serif', fontWeight: "400"}}>Get in Touch</h3>
           <p
  className="text-lg "
  style={{ fontFamily: '"Edu NSW ACT Hand Pre", cursive' }}
>
  We'd love to hear from you. Whether you have a question about
  features, trials, pricing, or anything else—our team is ready to
  answer.
</p>

            <div>
              <p>
                <span className="font-semibold" style={{ fontFamily: '"Anton", sans-serif', fontWeight: "400" }}>Email : </span>{" "} <span style={{fontFamily: ' "Savate", sans-serif'}}> support@excelanalytics.com</span>
               
              </p>
              <p>
                <span className="font-semibold" style={{ fontFamily: '"Anton", sans-serif', fontWeight: "400" }}>Phone : </span> <span style={{fontFamily: ' "Savate", sans-serif'}}>+91 98765 43210</span>
              </p>
              <p>
                <span className="font-semibold" style={{ fontFamily: '"Anton", sans-serif', fontWeight: "400" }}>Office Hours : </span> <span style={{fontFamily: ' "Savate", sans-serif'}}>Mon–Fri,9AM–6PM</span> 
                
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-md px-4 py-3 bg-white/80 placeholder-gray-700 text-black focus:outline-none focus:ring-2 focus:ring-violet-400"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-md px-4 py-3 bg-white/80 placeholder-gray-700 text-black focus:outline-none focus:ring-2 focus:ring-violet-400"
              required
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full rounded-md px-4 py-3 bg-white/80 placeholder-gray-700 text-black focus:outline-none focus:ring-2 focus:ring-violet-400"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-violet-500 text-white py-3 rounded-md font-semibold hover:from-violet-600 hover:to-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-white mb-4">
            Connect With Us
          </h3>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/abarna-vijay"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-violet-400 transition duration-300"
            >
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a
              href="https://github.com/Abarnavijayakumar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-violet-400 transition duration-300"
            >
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a
              href="https://twitter.com/your-handle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-violet-400 transition duration-300"
            >
              <i className="fab fa-twitter text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
