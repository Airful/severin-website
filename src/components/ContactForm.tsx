"use client";

import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const inputStyle = {
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.25)",
  borderRadius: "40px",
  padding: "16px 20px",
};

export default function ContactForm() {
  const [phone, setPhone] = useState("");

  return (
    <form className="w-full max-w-[580px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

        {/* First Name */}
        <div className="flex flex-col gap-[6px]">
          <label htmlFor="first-name" className="font-inter text-white text-[16px] font-medium">
            First name
          </label>
          <input
            id="first-name"
            type="text"
            placeholder="First name"
            className="font-inter text-white text-[14px] placeholder:text-white/30 outline-none transition-colors duration-300"
            style={inputStyle}
          />
        </div>

        {/* Last Name */}
        <div className="flex flex-col gap-[6px]">
          <label htmlFor="last-name" className="font-inter text-white text-[16px] font-medium">
            Last name
          </label>
          <input
            id="last-name"
            type="text"
            placeholder="Last name"
            className="font-inter text-white text-[14px] placeholder:text-white/30 outline-none transition-colors duration-300"
            style={inputStyle}
          />
        </div>

        {/* Email — half width, icon inside */}
        <div className="flex flex-col gap-[6px]">
          <label htmlFor="email" className="font-inter text-white text-[16px] font-medium">
            Email address
          </label>
          <div
            className="flex items-center gap-[10px]"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.25)",
              borderRadius: "40px",
              padding: "0 20px",
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" style={{ opacity: 0.45, flexShrink: 0 }}>
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="22,6 12,13 2,6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <input
              id="email"
              type="email"
              placeholder="example@gmail.com"
              className="font-inter text-white text-[14px] placeholder:text-white/30 outline-none bg-transparent flex-1 py-[16px]"
            />
          </div>
        </div>

        {/* Phone — half width, react-phone-input-2 */}
        <div className="flex flex-col gap-[6px]">
          <label className="font-inter text-white text-[16px] font-medium">
            Phone number
          </label>
          <PhoneInput
            country="us"
            value={phone}
            onChange={setPhone}
            enableSearch
            searchPlaceholder="Search country..."
            inputProps={{ id: "phone", name: "phone", placeholder: "Phone number" }}
            containerClass="custom-phone-container"
            inputClass="custom-phone-input"
            dropdownStyle={{
              background: "#1a1a1a",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "12px",
              color: "#fff",
            }}
          />
        </div>

        {/* Message — full width */}
        <div className="flex flex-col gap-[6px] sm:col-span-2">
          <label htmlFor="message" className="font-inter text-white text-[16px] font-medium">
            Message
          </label>
          <textarea
            id="message"
            placeholder="How can we help?"
            className="font-inter text-white text-[14px] placeholder:text-white/30 outline-none resize-none transition-colors duration-300"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.25)",
              borderRadius: "20px",
              padding: "16px 20px",
              minHeight: "160px",
            }}
          />
        </div>

        {/* Submit — full width */}
        <div className="sm:col-span-2 mt-1">
          <button
            type="submit"
            className="w-full font-inter font-medium text-black transition-all duration-300 hover:brightness-110 hover:scale-[1.01]"
            style={{
              background: "#C6A34A",
              borderRadius: "40px",
              padding: "16px",
              fontSize: "15px",
              border: "none",
            }}
          >
            Send Message
          </button>
        </div>

      </div>
    </form>
  );
}
