import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%20want%20to%20know%20about%20Lets%20Burn%20It%20gym"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-20 md:bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
    style={{ background: "#25D366" }}
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="h-6 w-6 text-white" />
  </a>
);

export default WhatsAppButton;
