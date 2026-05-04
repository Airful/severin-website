"use client";

import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const inputStyle = {
  background: "#1f1f1f",
  border: "1px solid #555555",
  borderRadius: "40px",
  padding: "16px 20px",
};

const LEADS_ENDPOINT =
  process.env.NEXT_PUBLIC_LEADS_API_URL ?? "https://app.severingeser.com/api/leads";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg(null);

    const form = new FormData(e.currentTarget);
    const payload = {
      first_name: (form.get("first_name") as string)?.trim() || null,
      last_name: (form.get("last_name") as string)?.trim() || null,
      email: (form.get("email") as string)?.trim() || "",
      phone: phone || null,
      message: (form.get("message") as string)?.trim() || null,
      source_page: typeof window !== "undefined" ? window.location.pathname : null,
    };

    try {
      const res = await fetch(LEADS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error || `Request failed (${res.status})`);
      }
      setStatus("success");
      e.currentTarget.reset();
      setPhone("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <div className="w-full max-w-[580px] flex flex-col items-center text-center gap-4 py-12">
        <p
          className="text-white text-[28px] sm:text-[36px]"
          style={{ fontFamily: "var(--font-libre-caslon, Georgia, serif)", letterSpacing: "-0.02em" }}
        >
          Thank you.
        </p>
        <p className="font-inter text-[#aaaaaa] text-[15px] max-w-[420px]">
          Your message has reached us. Severin will be in touch shortly.
        </p>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form className="w-full max-w-[580px]" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

        {/* First Name */}
        <div className="flex flex-col gap-[6px]">
          <label htmlFor="first-name" className="font-inter text-white text-[16px] font-medium">
            First name
          </label>
          <input
            id="first-name"
            name="first_name"
            type="text"
            placeholder="First name"
            className="font-inter text-white text-[14px] placeholder:text-[#777777] outline-none transition-colors duration-300"
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
            name="last_name"
            type="text"
            placeholder="Last name"
            className="font-inter text-white text-[14px] placeholder:text-[#777777] outline-none transition-colors duration-300"
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
              background: "#1f1f1f",
              border: "1px solid #555555",
              borderRadius: "40px",
              padding: "0 20px",
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="22,6 12,13 2,6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="example@gmail.com"
              className="font-inter text-white text-[14px] placeholder:text-[#777777] outline-none bg-transparent flex-1 py-[16px]"
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
              border: "1px solid #383838",
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
            name="message"
            placeholder="How can we help?"
            className="font-inter text-white text-[14px] placeholder:text-[#777777] outline-none resize-none transition-colors duration-300"
            style={{
              background: "#1f1f1f",
              border: "1px solid #555555",
              borderRadius: "20px",
              padding: "16px 20px",
              minHeight: "160px",
            }}
          />
        </div>

        {/* Error message */}
        {status === "error" && errorMsg && (
          <div className="sm:col-span-2 -mb-1">
            <p className="font-inter text-[13px]" style={{ color: "#ff8888" }}>
              {errorMsg}
            </p>
          </div>
        )}

        {/* Submit — full width */}
        <div className="sm:col-span-2 mt-1">
          <button
            type="submit"
            disabled={submitting}
            className="w-full font-inter font-medium text-black transition-all duration-300 hover:brightness-110 hover:scale-[1.01] disabled:bg-[#777777] disabled:text-[#444444] disabled:cursor-not-allowed disabled:hover:scale-100"
            style={{
              background: "#C6A34A",
              borderRadius: "40px",
              padding: "16px",
              fontSize: "15px",
              border: "none",
            }}
          >
            {submitting ? "Sending..." : "Send Message"}
          </button>
        </div>

      </div>
    </form>
  );
}
