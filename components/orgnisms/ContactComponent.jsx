import React, { useState } from "react";
import Button from "../atoms/Button";
import Headings from "../atoms/Headings";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";

function ContactComponent() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    option: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for Contact me Please wait i will contact you immediately ")
    console.log(formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      option: "",
      message: "",
    });
  };

  return (
    <div id="contact" className="w-full flex md:flex-row flex-col space-x-0 md:space-x-4 bg-[#F6F3FC] py-12 md:py-[150px] px-[50px]">
      <div className="left w-full md:w-[50%] px-[30px] py-[50px] bg-white rounded-xl ml-0 md:ml-10" data-aos="zoom-in-right">
        <div className="text-center md:text-start w-full md:w-[90%] flex flex-col">
          <Headings level="2" text="Let’s work together!" />
          <Headings
            level="10"
            text="I design and code beautifully simple things and i love what i do.
                  Just simple like that!"
          />
        </div>
        <form onSubmit={handleSubmit} className="mt-5 flex flex-col md:items-start items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              className="p-3 border rounded-md"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              className="p-3 border rounded-md"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              className="p-3 border rounded-md"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
              className="p-3 border rounded-md"
              required
            />
          </div>
          <select
            name="option"
            value={formData.option}
            onChange={handleChange}
            className="p-3 mt-4 border rounded-md w-full"
          >
            <option value="">—Please choose an option—</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="consultation">Consultation</option>
          </select>
          <textarea
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            className="p-3 border rounded-md w-full mt-4"
            rows="4"
          ></textarea>
          <Button variant="heeder-button" text="Send Message" />
        </form>
      </div>
      {/* Contact information */}
      <div className="right mt-10 md:mt-0 w-full md:w-[50%] flex flex-col items-center md:items-start justify-center space-y-2 md:space-y-6" data-aos="zoom-in-left">
        <div className="w-full flex ml-10  relative">
          <Button variant="icon-button" text={<FiPhoneCall />} />
          <div className="text ml-12 md:ml-14">
            <Headings level="10" text="Phone" />
            <Headings level="5" text="+92 3164288921" />
          </div>
        </div>
        <div className="w-full flex ml-10  relative">
          <Button variant="icon-button" text={<HiOutlineMail />} />
          <div className="text ml-12 md:ml-14">
            <Headings level="10" text="Email" />
            <Headings level="5" text="musama4288921@gmail.com" />
          </div>
        </div>
        <div className="w-full flex ml-10 relative">
          <Button variant="icon-button" text={<CiLocationOn />} />
          <div className="text ml-12 md:ml-14">
            <Headings level="10" text="Adresse" />
            <Headings level="5" text="faislabad, punjab, pakistan" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactComponent;
