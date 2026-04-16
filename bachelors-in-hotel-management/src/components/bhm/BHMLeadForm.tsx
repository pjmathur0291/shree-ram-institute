import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

type BHMLeadFormProps = {
  formLocation?: string;
  className?: string;
  inputClassName?: string;
  selectClassName?: string;
  textareaClassName?: string;
};

const BHMLeadForm = ({
  formLocation,
  className,
  inputClassName,
  selectClassName,
  textareaClassName,
}: BHMLeadFormProps) => {
  const navigate = useNavigate();
  const leadsheetWebhookUrl = useMemo(() => import.meta.env.VITE_LEADSHEET_WEBHOOK_URL as string | undefined, []);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    program: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      if (leadsheetWebhookUrl) {
        const payload = new URLSearchParams({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim(),
          course: formData.program || "Bachelor of Hotel Management (BHM)",
          message: formLocation ? `formLocation=${formLocation} | ${formData.message.trim()}` : formData.message.trim(),
          pageUrl: window.location.href,
          submittedAt: new Date().toISOString().slice(0, 10),
        });

        const url = leadsheetWebhookUrl.includes("?")
          ? `${leadsheetWebhookUrl}&${payload.toString()}`
          : `${leadsheetWebhookUrl}?${payload.toString()}`;

        await fetch(url, { method: "GET" });
      }
      navigate("/thank-you");
    } finally {
      setIsSubmitting(false);
    }
  };

  const baseInput =
    inputClassName ??
    "w-full px-4 py-3 rounded-xl bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/40 focus:outline-none focus:border-accent";
  const baseSelect =
    selectClassName ??
    "w-full px-4 py-3 rounded-xl bg-cream/10 border border-cream/20 text-cream/70 focus:outline-none focus:border-accent";
  const baseTextarea =
    textareaClassName ??
    "w-full px-4 py-3 rounded-xl bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/40 focus:outline-none focus:border-accent resize-none";

  return (
    <form onSubmit={handleSubmit} className={className ?? "space-y-5"}>
      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Full Name *"
          className={baseInput}
          required
          value={formData.name}
          onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
        />
        <input
          type="tel"
          placeholder="Phone Number *"
          className={baseInput}
          required
          value={formData.phone}
          onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
        />
      </div>

      <input
        type="email"
        placeholder="Email Address"
        className={baseInput}
        value={formData.email}
        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
      />

      <select
        className={baseSelect}
        value={formData.program}
        onChange={(e) => setFormData((prev) => ({ ...prev, program: e.target.value }))}
      >
        <option value="">Select Programme</option>
        <option value="Bachelor of Hotel Management (BHM)">Bachelor of Hotel Management (BHM)</option>
        <option value="Diploma in Hotel Management">Diploma in Hotel Management</option>
        <option value="Culinary Arts">Culinary Arts</option>
        <option value="Bartending">Bartending</option>
        <option value="Bakery">Bakery</option>
      </select>

      <textarea
        rows={3}
        placeholder="Your Message (Optional)"
        className={baseTextarea}
        value={formData.message}
        onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-gold text-charcoal py-4 rounded-xl font-bold text-base hover:shadow-lg hover:shadow-gold/30 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Submitting..." : "Get FREE Callback Now"}
      </button>
    </form>
  );
};

export default BHMLeadForm;

