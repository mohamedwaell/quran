import React from "react";
import { contactContent } from "../const/const";

const Footer = () => {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-background)]">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-6 text-sm text-muted sm:px-6 lg:px-0">
        <div className="flex flex-wrap items-center gap-2 text-center sm:text-left">
          <span>WhatsApp:</span>
          <a
            href={contactContent.whatsapp.href}
            className="font-semibold text-primary"
            target="_blank"
            rel="noreferrer"
          >
            {contactContent.whatsapp.display}
          </a>
          <span className="hidden sm:inline">•</span>
          <span>Email:</span>
          <a
            href={contactContent.email.href}
            className="font-semibold text-primary"
          >
            {contactContent.email.display}
          </a>
        </div>
        <div className="text-center text-primary">{contactContent.footerBlurb}</div>
        <div className="text-center text-xs text-muted">
          {contactContent.copyright}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
