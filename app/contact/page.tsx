import { Metadata } from "next";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch to discuss design opportunities, collaborations, or to request a detailed portfolio walkthrough.",
};

export default function ContactPage() {
  return <ContactContent />;
}
