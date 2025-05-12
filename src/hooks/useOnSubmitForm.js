import axios from "axios";
import { useToastHook } from "../components/useToastHook";

// Utility, um HTML zu escapen
function escapeHTML(str = "") {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function useOnSubmitForm(reset) {
  const [, newToast] = useToastHook();

  const onSubmit = async (data) => {
    const { name, email, message, phone } = data;

    const safeName = escapeHTML(name);
    const safeEmail = escapeHTML(email);
    const safeMessage = escapeHTML(message);
    const safeTel = escapeHTML(phone);

    const html = `
      <html>
        <body>
          <h2>Neue Kontaktformular-Anfrage</h2>
          <h3>Kontaktdaten</h3>
          <ul>
            <li><strong>Name:</strong> ${safeName}</li>
            <li><strong>E-Mail:</strong> ${safeEmail}</li>
            <li><strong>Telefon:</strong> ${safeTel}</li>
          </ul>
          <h3>Nachricht</h3>
          <p>${safeMessage}</p>
        </body>
      </html>
    `;

    try {
      const domain = import.meta.env.VITE_MAILGUN_DOMAIN;
      const apiKey = import.meta.env.VITE_MAILGUN_API_KEY;
      const endpoint = `https://api.eu.mailgun.net/v3/${domain}/messages`;
      const auth = btoa(`api:${apiKey}`);

      const form = new URLSearchParams();
      form.append("from", `Bewerbung <postmaster@${domain}>`);
      form.append("to", "moin@erikquint.de");
      form.append("subject", "Neue Kontaktanfrage von der Webseite");
      form.append("html", html);

      const response = await axios.post(endpoint, form, {
        headers: {
          Authorization: `Basic ${auth}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        timeout: 10000,
      });

      // 7) Erfolg / Fehler behandeln
      if (response.status === 200) {
        reset({ name: "", email: "", message: "", phone: "" });
        newToast({
          title: "Danke für Ihre Anfrage",
          message:
            "Deine Nachricht wurde erfolgreich versendet. Ich melde mich so schnell wie möglich bei dir.",
          status: "success",
        });
      } else {
        throw new Error(`Mailgun HTTP ${response.status}`);
      }
    } catch (err) {
      console.error("Mailgun-Fehler:", err);
      newToast({
        title: "Ein Fehler ist aufgetreten",
        message:
          "Deine Anfrage konnte nicht gesendet werden. Bitte versuch es erneut oder kontaktiere mich telefonisch.",
        status: "error",
      });
    }
  };

  return onSubmit;
}
