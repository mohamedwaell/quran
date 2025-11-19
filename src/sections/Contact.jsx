import React, { useState } from "react";
import { contactContent, contactFormOptions } from "../const/const";

const Contact = () => {
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    programInterest: contactFormOptions.programInterest[0],
    classType: contactFormOptions.classTypes[0],
    preferredDays: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(
      `Enrollment Inquiry – ${formData.programInterest}`
    );
    const body = encodeURIComponent(
      [
        `Parent Name: ${formData.parentName}`,
        `Child Name: ${formData.childName}`,
        `Program Interest: ${formData.programInterest}`,
        `Class Type: ${formData.classType}`,
        `Preferred Days: ${formData.preferredDays}`,
        `Message:`,
        formData.message,
      ].join("\n")
    );
    window.location.href = `mailto:${contactContent.email.display}?subject=${subject}&body=${body}`;
    setStatus("Opening your email client with the message…");
  };

  return (
    <section id="contact" className="bg-[#F0FBF6] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-0">
        <div className="space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#0A8A56]">
            Contact
          </p>
          <h2 className="text-3xl font-semibold text-[#0A2F1D] md:text-4xl">
            {contactContent.title}
          </h2>
          <p className="mx-auto max-w-2xl text-base text-[#4F5B51]">
            {contactContent.intro}
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:mt-12 lg:grid-cols-[0.9fr,1.1fr]">
          <div className="rounded-[24px] border border-[#0A8A56]/20 bg-white p-6 shadow-[0_18px_45px_rgba(10,138,86,0.12)] sm:rounded-[28px] sm:p-8">
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0A8A56]">
                  WhatsApp
                </p>
                <a
                  href={contactContent.whatsapp.href}
                  className="mt-2 inline-flex items-center gap-2 text-2xl font-semibold text-[#0A8A56]"
                >
                  {contactContent.whatsapp.display}
                </a>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0A8A56]">
                  Email
                </p>
                <a
                  href={contactContent.email.href}
                  className="mt-2 inline-flex items-center gap-2 text-xl font-semibold text-[#0A2F1D]"
                >
                  {contactContent.email.display}
                </a>
              </div>
              <p className="rounded-2xl bg-[#F7F9F7] p-4 text-sm text-[#4F5B51]">
                {contactContent.note}
              </p>
            </div>
          </div>

          <div className="rounded-[24px] border border-white bg-white p-6 shadow-[0_18px_45px_rgba(26,26,26,0.08)] sm:rounded-[28px] sm:p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid gap-4 md:grid-cols-2">
                <label className="text-sm font-medium text-[#0A2F1D]">
                  Parent Name
                  <input
                    type="text"
                    name="parentName"
                    placeholder={contactFormOptions.placeholders.parentName}
                    value={formData.parentName}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-2xl border border-[#1A1A1A]/10 px-4 py-3 text-base text-[#1A1A1A] outline-none focus:border-[#0A8A56]"
                  />
                </label>
                <label className="text-sm font-medium text-[#0A2F1D]">
                  Child's Name
                  <input
                    type="text"
                    name="childName"
                    placeholder={contactFormOptions.placeholders.childName}
                    value={formData.childName}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-2xl border border-[#1A1A1A]/10 px-4 py-3 text-base text-[#1A1A1A] outline-none focus:border-[#0A8A56]"
                  />
                </label>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <label className="text-sm font-medium text-[#0A2F1D]">
                  Program Interest
                  <select
                    name="programInterest"
                    value={formData.programInterest}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border border-[#1A1A1A]/10 bg-white px-4 py-3 text-base text-[#1A1A1A] outline-none focus:border-[#0A8A56]"
                  >
                    {contactFormOptions.programInterest.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </label>
                <label className="text-sm font-medium text-[#0A2F1D]">
                  Preferred Class Type
                  <select
                    name="classType"
                    value={formData.classType}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border border-[#1A1A1A]/10 bg-white px-4 py-3 text-base text-[#1A1A1A] outline-none focus:border-[#0A8A56]"
                  >
                    {contactFormOptions.classTypes.map((type) => (
                      <option key={type}>{type}</option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="text-sm font-medium text-[#0A2F1D]">
                Preferred Days
                <input
                  type="text"
                  name="preferredDays"
                  placeholder={contactFormOptions.placeholders.preferredDays}
                  value={formData.preferredDays}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-2xl border border-[#1A1A1A]/10 px-4 py-3 text-base text-[#1A1A1A] outline-none focus:border-[#0A8A56]"
                />
              </label>

              <label className="text-sm font-medium text-[#0A2F1D]">
                Message
                <textarea
                  placeholder={contactFormOptions.placeholders.message}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-2xl border border-[#1A1A1A]/10 px-4 py-3 text-base text-[#1A1A1A] outline-none focus:border-[#0A8A56]"
                  rows={4}
                />
              </label>

              <div className="flex flex-wrap gap-4">
                <button
                  type="submit"
                  className="rounded-2xl bg-[#0A8A56] px-6 py-3 font-semibold text-white shadow-lg shadow-[#0A8A56]/30"
                >
                  {contactFormOptions.actions[0].label}
                </button>
                <a
                  href={contactFormOptions.actions[1].href}
                  className="rounded-2xl border border-[#0A8A56]/30 px-6 py-3 font-semibold text-[#0A8A56]"
                >
                  {contactFormOptions.actions[1].label}
                </a>
              </div>
              {status && (
                <p className="text-sm font-semibold text-[#0A8A56]">{status}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
