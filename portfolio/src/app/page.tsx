import Introduction from "./components/home/Introduction";
import "../../styles/app.css";

export const metadata = {
  title: "Home - Dylan Hawke",
  description:
    "View an overview all about Dylan Hawke and his software development background.",
};

export default function HomePage() {
  return <Introduction />;
}
