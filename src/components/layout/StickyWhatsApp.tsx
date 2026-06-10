import { MessageCircle } from "lucide-react";

const StickyWhatsApp = () => {
  return (
    <a
      href="https://wa.me/919876543210" // Replace with actual number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 z-50 flex items-center justify-center animate-fade-in-up"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default StickyWhatsApp;
