"use client";
import { useState } from "react";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);

        setStatus("sending");

        const res = await fetch("/api/contact", {method: "POST", body: JSON.stringify({
            name: fd.get("name"), email: fd.get("email"), message: fd.get("message")
        })});

        setStatus(res.ok? "sent" : "error");
        if(res.ok) (e.target as HTMLFormElement).reset();
    }

    return (
        <div className="row mx-3 mx-md-0">
            <div className="col-md-9 offset-md-1">
                <form onSubmit={onSubmit} className="vstack gap-3 mx-2 mx-md-0">
                    <div className="row">
                        <div className="col-5">
                            <div className="form-group">
                                    <label htmlFor="contactName" className="text-color-bright">Your Name</label>
                                    <input name="name" className="form-control mt-1" id="contactName" placeholder="Your Name" required />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                    <label htmlFor="contactEmail" className="text-color-bright">Email Address</label>
                                    <input name="email" type="email" className="form-control my-1" id="contactEmail" placeholder="you@example.com" required />
                                    
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                 <label htmlFor="contactMessage" className="text-color-bright">Message</label>
                                 <textarea name="message" id="contactMessage" className="form-control mt-1 no-resize" rows={5} placeholder="How can I help?" required/>
                            </div>
                           
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <button className="btn btn-outline-info w-100 highlight-btn" disabled={status==="sending"}>{status==="sending" ? "Sending..." : "Send Message"}</button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            {status === "sent" && <small className="text-success"> Thanks! I'll reply soon.</small>}
                            {status === "error" && <small className="text-danger"> Something went wrong. Please try again.</small>}
                            {//TODO: Make this a TOAST
                            }
                        </div>
                    </div>
                 </form>
        </div>
      </div>
       
    );
}