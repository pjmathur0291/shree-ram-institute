import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

type BHMLeadFormProps = {
  formLocation?: string;
  className?: string;
  inputClassName?: string;
  selectClassName?: string;
  textareaClassName?: string;
};

type UtmFields = {
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmTerm: string;
  utmKeyword: string;
};

const UTM_STORAGE_KEY = "sri:utm";

function getUtmFromLocation(): UtmFields {
  const params = new URLSearchParams(window.location.search);
  return {
    utmSource: params.get("utm_source") ?? "",
    utmMedium: params.get("utm_medium") ?? "",
    utmCampaign: params.get("utm_campaign") ?? "",
    utmTerm: params.get("utm_term") ?? "",
    utmKeyword: params.get("utm_keyword") ?? "",
  };
}

function safeReadStoredUtm(): Partial<UtmFields> {
  try {
    const raw = window.localStorage.getItem(UTM_STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Partial<UtmFields> | null;
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

const BHMLeadForm = ({
  formLocation,
  className,
  inputClassName,
  selectClassName,
  textareaClassName,
}: BHMLeadFormProps) => {
  const navigate = useNavigate();
  const leadsheetWebhookUrl = useMemo(() => import.meta.env.VITE_LEADSHEET_WEBHOOK_URL as string | undefined, []);
  const crmApiUrl = useMemo(() => import.meta.env.VITE_CRM_API_URL as string | undefined, []);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    program: "",
    message: "",
  });
  const [utm, setUtm] = useState<UtmFields>(() => {
    const fromUrl = getUtmFromLocation();
    const stored = safeReadStoredUtm();
    return {
      utmSource: fromUrl.utmSource || stored.utmSource || "",
      utmMedium: fromUrl.utmMedium || stored.utmMedium || "",
      utmCampaign: fromUrl.utmCampaign || stored.utmCampaign || "",
      utmTerm: fromUrl.utmTerm || stored.utmTerm || "",
      utmKeyword: fromUrl.utmKeyword || stored.utmKeyword || "",
    };
  });

  useEffect(() => {
    const fromUrl = getUtmFromLocation();
    if (fromUrl.utmSource || fromUrl.utmMedium || fromUrl.utmCampaign || fromUrl.utmTerm || fromUrl.utmKeyword) {
      setUtm(fromUrl);
      try {
        window.localStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(fromUrl));
      } catch {
        // ignore
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      const payload = new URLSearchParams({
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        course: formData.program || "Bachelor of Hotel Management (BHM)",
        message: formLocation ? `formLocation=${formLocation} | ${formData.message.trim()}` : formData.message.trim(),
        pageUrl: window.location.href,
        submittedAt: new Date().toISOString().slice(0, 10),
        utm_source: utm.utmSource,
        utm_medium: utm.utmMedium,
        utm_campaign: utm.utmCampaign,
        utm_term: utm.utmTerm,
        utm_keyword: utm.utmKeyword,
      });

      if (crmApiUrl) {
        const url = crmApiUrl.includes("?") ? `${crmApiUrl}&${payload.toString()}` : `${crmApiUrl}?${payload.toString()}`;
        await fetch(url, { method: "GET" });
      }

      if (leadsheetWebhookUrl) {
        const payload = new URLSearchParams({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim(),
          course: formData.program || "Bachelor of Hotel Management (BHM)",
          message: formLocation ? `formLocation=${formLocation} | ${formData.message.trim()}` : formData.message.trim(),
          pageUrl: window.location.href,
          submittedAt: new Date().toISOString().slice(0, 10),
          utm_source: utm.utmSource,
          utm_medium: utm.utmMedium,
          utm_campaign: utm.utmCampaign,
          utm_term: utm.utmTerm,
          utm_keyword: utm.utmKeyword,
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
      <input type="hidden" name="utm_source" value={utm.utmSource} />
      <input type="hidden" name="utm_medium" value={utm.utmMedium} />
      <input type="hidden" name="utm_campaign" value={utm.utmCampaign} />
      <input type="hidden" name="utm_term" value={utm.utmTerm} />
      <input type="hidden" name="utm_keyword" value={utm.utmKeyword} />
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

