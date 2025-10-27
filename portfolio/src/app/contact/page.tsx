import Contact from "../components/contact/Contact";
import ContactForm from "../components/contact/ContactForm";

// app/contact/page.tsx
export const metadata = {
  title: "Contact - Dylan Hawke",
  description: "Reach out to discuss a project or ask a question!",
};

export default function ContactPage() {
 return (
  <div>
    <Contact />
    <ContactForm />
  </div>
    
 );
}
