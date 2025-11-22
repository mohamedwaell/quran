import React, { useState } from "react";
import { contactContent, contactFormOptions } from "../const/const";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    email: "",   
    phone: "", // ADDED           // NEW
    gender: "",
    age: "",
    programInterest: [],
    classType: contactFormOptions.classTypes[0],
    preferredDays: "",
    message: "",
  });
  

  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setFormData((prev) => {
      if (checked) {
        return {
          ...prev,
          programInterest: [...prev.programInterest, value],
        };
      } else {
        return {
          ...prev,
          programInterest: prev.programInterest.filter((item) => item !== value),
        };
      }
    });
  };

    const handleSubmit = async (event) => {
      event.preventDefault();
      setStatus("Sending...");
    
      if (formData.programInterest.length === 0) {
        setStatus("Please select at least one program interest.");
        return;
      }
    
      try {
        const res = await fetch("/api/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
    
        if (res.ok) {
          setStatus("Your message has been sent successfully!");
          setFormData({
            parentName: "",
            childName: "",
            email: "",
            phone: "", // ADDED
            gender: "",
            age: "",
            programInterest: [],
            classType: contactFormOptions.classTypes[0],
            preferredDays: "",
            message: "",
          });
        } else {
          setStatus("Error sending your message. Please try again.");
        }
      } catch (err) {
        setStatus("Something went wrong!");
      }
    };
  

  return (
    <section id="contact" className="bg-[var(--color-background-light)] py-8 sm:py-10 px-4  sm:px-6 lg:px-0 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-0">
        <div className="space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-button-text)]">
            Contact
          </p>
          <h2 className="text-3xl font-semibold text-[var(--color-button-text)] md:text-4xl">
            {contactContent.title}
          </h2>
          <p className="mx-auto max-w-2xl text-base text-[var(--color-green-light)]">
            {contactContent.intro}
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:mt-12 lg:grid-cols-[0.9fr,1.1fr]">
          {/* Contact Info */}
          <div className="rounded-[24px] border border-[var(--color-primary-soft)] bg-[var(--color-background)] p-6 shadow-[0_18px_45px_var(--color-primary-shadow)] sm:rounded-[28px] sm:p-8">
            <div className="space-y-6">
              <div>
                <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                  <FaPhoneSquareAlt className="text-2xl text-primary" /> WhatsApp
                </p>
                <a
                  href={contactContent.whatsapp.href}
                  className="mt-2 inline-flex items-center gap-2 text-2xl font-semibold text-primary"
                >
                  {contactContent.whatsapp.display}
                </a>
              </div>
              <div>
                <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                  <MdOutlineMailOutline className="text-2xl text-primary" /> Email
                </p>
                <a
                  href={contactContent.email.href}
                  className="mt-2 inline-flex items-center gap-2 text-xl font-semibold text-primary"
                >
                  {contactContent.email.display}
                </a>
              </div>
              <p className="rounded-2xl bg-[var(--color-cream)] p-4 text-sm text-muted">
                {contactContent.note}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-[24px] border border-[var(--color-primary-soft)] bg-[var(--color-background)] p-6 shadow-[0_18px_45px_var(--color-primary-shadow)] sm:rounded-[28px] sm:p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid gap-4 md:grid-cols-2">
                <label className="text-sm font-medium text-primary">
                  Parent Name
                  <input
                    type="text"
                    name="parentName"
                    placeholder={contactFormOptions.placeholders.parentName}
                    value={formData.parentName}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-2xl border border-[var(--color-border)] px-4 py-3 text-base text-[var(--color-text)] outline-none focus:border-[var(--color-primary)]"
                  />
                </label>
                <label className="text-sm font-medium text-primary">
                  Child's Name
                  <input
                    type="text"
                    name="childName"
                    placeholder={contactFormOptions.placeholders.childName}
                    value={formData.childName}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-2xl border border-[var(--color-border)] px-4 py-3 text-base text-[var(--color-text)] outline-none focus:border-[var(--color-primary)]"
                  />
                </label>
              </div>
              <div>
              <label className="text-sm font-medium text-primary">
  Email
  <input
    type="email"
    name="email"
    placeholder="Your email"
    value={formData.email}
    onChange={handleChange}
    required
    className="mt-2 w-full rounded-2xl border border-[var(--color-border)] px-4 py-3 text-base text-[var(--color-text)] outline-none focus:border-[var(--color-primary)]"
  />
</label>
<label className="text-sm font-medium text-primary">
  Phone
  <input
    type="tel" // Use type="tel" for phone numbers
    name="phone"
    placeholder="Your phone number"
    value={formData.phone}
    onChange={handleChange}
    required
    className="mt-2 w-full rounded-2xl border border-[var(--color-border)] px-4 py-3 text-base text-[var(--color-text)] outline-none focus:border-[var(--color-primary)]"
  />
</label>
              </div>
              {/* Gender and Age */}
              <div className="grid gap-4 md:grid-cols-2">
                <label className="text-sm font-medium text-primary">
                  Gender
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3 text-base text-[var(--color-text)] outline-none focus:border-[var(--color-primary)]"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                   
                  </select>
                </label>
                <label className="text-sm font-medium text-primary">
                  Age
                  <input
                    type="number"
                    name="age"
                    min="1"
                    placeholder="Child's age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-2xl border border-[var(--color-border)] px-4 py-3 text-base text-[var(--color-text)] outline-none focus:border-[var(--color-primary)]"
                  />
                </label>
              </div>

              {/* Program Interest */}
              <div>
                <label className="text-sm font-medium text-primary">
                  Program Interest
                  <div className="mt-2 space-y-2 rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-4">
                    {contactFormOptions.programInterest.map((option) => (
                      <label
                        key={option}
                        className="flex cursor-pointer items-center gap-3 text-base text-[var(--color-text)]"
                      >
                        <input
                          type="checkbox"
                          name="programInterest"
                          value={option}
                          checked={formData.programInterest.includes(option)}
                          onChange={handleCheckboxChange}
                          className="h-5 w-5 cursor-pointer rounded border-[var(--color-border)] text-primary focus:ring-2 focus:ring-primary accent-green-500"
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </label>
              </div>

              {/* Class Type */}
              <div>
                <label className="text-sm font-medium text-primary">
                  Preferred Class Type
                  <select
                    name="classType"
                    value={formData.classType}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3 text-base text-[var(--color-text)] outline-none focus:border-[var(--color-primary)]"
                  >
                    {contactFormOptions.classTypes.map((type) => (
                      <option key={type}>{type}</option>
                    ))}
                  </select>
                </label>
              </div>

              {/* Preferred Days */}
              <label className="text-sm font-medium text-primary">
                Preferred Days
                <input
                  type="text"
                  name="preferredDays"
                  placeholder={contactFormOptions.placeholders.preferredDays}
                  value={formData.preferredDays}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-2xl border border-[var(--color-border)] px-4 py-3 text-base text-[var(--color-text)] outline-none focus:border-[var(--color-primary)]"
                />
              </label>

              {/* Message */}
              <label className="text-sm font-medium text-primary">
                Message
                <textarea
                  placeholder={contactFormOptions.placeholders.message}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-2xl border border-[var(--color-border)] px-4 py-3 text-base text-[var(--color-text)] outline-none focus:border-[var(--color-primary)]"
                  rows={4}
                />
              </label>

              {/* Actions */}
              <div className="flex flex-wrap gap-4">
                <button
                  type="submit"
                  className="rounded-2xl bg-[#d7a83f] px-6 py-3 font-semibold text-white shadow-lg shadow-[var(--color-primary-shadow)]"
                >
                  {contactFormOptions.actions[0].label}
                </button>
                <a
                  href={contactFormOptions.actions[1].href}
                  className="rounded-2xl border border-[var(--color-primary)]/30 px-6 py-3 font-semibold text-primary hover:border-[var(--color-primary)]"
                >
                  {contactFormOptions.actions[1].label}
                </a>
              </div>
              {status && (
                <p className="text-sm font-semibold text-primary">{status}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
