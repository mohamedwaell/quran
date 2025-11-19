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
      className="fixed bottom-5 right-5 z-45 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-text)] text-[var(--color-background)] shadow-[0_20px_35px_var(--color-shadow)] transition duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[var(--color-border)] md:h-16 md:w-16"
      title="Contact us via WhatsApp"
    >
      <span className="sr-only">Open WhatsApp</span>
      <FaWhatsapp size={22} />
    </button>
  );
};

export default WhatsAppButton;
