import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {




  const handleClick = (e) => {
    e.preventDefault();
    const url = `https://wa.me/14059683270`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Open WhatsApp chat"
      className="card fixed bottom-5 right-5 z-45 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[linear-gradient(to_bottom,#0A8A56_0%,#0A8A56_100%)] text-white shadow-xl transform transition-all duration-200
                 focus:outline-none focus:ring-4 focus:ring-[#0A8A56]
                 hover:scale-105"
      title="Contact us via WhatsApp"
    >
      <span className="sr-only">Open WhatsApp</span>
      <FaWhatsapp size={22} />
    </button>
  );
};

export default WhatsAppButton;
