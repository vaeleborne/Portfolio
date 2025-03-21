import { describe } from "node:test";
import Introduction from "./components/home/Introduction";
import "../../styles/app.css";

export const metadata = {
  title: "Home - Dylan Morgan",
  description:
    "View an overview all about Dylan Morgan and his software development background.",
};

export default function HomePage() {
  return <Introduction />;
}
