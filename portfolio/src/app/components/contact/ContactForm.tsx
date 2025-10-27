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
                <form onSubmit={onSubmit} className="vstack gap-3">
                    <div className="row">
                        <div className="col">
                            <input name="name" className="form-control" placeholder="Your Name" required />
                        </div>
                        <div className="col">
                            <input name="email" type="email" className="form-control" placeholder="you@example.com" required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <textarea name="message" className="form-control" rows={5} placeholder="How can I help?" required/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <button className="btn btn-info w-100" disabled={status==="sending"}>{status==="sending" ? "Sending..." : "Send Message"}</button>
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