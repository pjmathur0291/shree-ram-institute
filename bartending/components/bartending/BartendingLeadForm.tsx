import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

type BartendingLeadFormProps = {
  formLocation?: string;
  className?: string;
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

const BartendingLeadForm = ({ formLocation, className }: BartendingLeadFormProps) => {
  const navigate = useNavigate();
  const leadsheetWebhookUrl = useMemo(() => import.meta.env.VITE_LEADSHEET_WEBHOOK_URL as string | undefined, []);
  const crmApiUrl = useMemo(() => import.meta.env.VITE_CRM_API_URL as string | undefined, []);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", program: "" });
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
    // Keep in sync if URL changes (and persist for later navigations).
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
        course: formData.program || "Bartending Program",
        message: formLocation ? `formLocation=${formLocation}` : "",
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
          course: formData.program || "Bartending Program",
          message: formLocation ? `formLocation=${formLocation}` : "",
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

  return (
    <form onSubmit={handleSubmit} className={className ?? "space-y-4"}>
      <input type="hidden" name="utm_source" value={utm.utmSource} />
      <input type="hidden" name="utm_medium" value={utm.utmMedium} />
      <input type="hidden" name="utm_campaign" value={utm.utmCampaign} />
      <input type="hidden" name="utm_term" value={utm.utmTerm} />
      <input type="hidden" name="utm_keyword" value={utm.utmKeyword} />
      <input
        type="text"
        placeholder="Your Full Name"
        required
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
      />
      <input
        type="tel"
        placeholder="Phone Number"
        required
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
      />
      <input
        type="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
      />
      <select
        value={formData.program}
        onChange={(e) => setFormData({ ...formData, program: e.target.value })}
        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
      >
        <option value="">Select Programme</option>
        <option value="Advanced Diploma in Bartending (6 Months)">Advanced Diploma in Bartending (6 Months)</option>
        <option value="Professional Diploma in Bartending (3 Months)">Professional Diploma in Bartending (3 Months)</option>
        <option value="Mocktail Specialist (3 Months)">Mocktail Specialist (3 Months)</option>
      </select>
      <button
        type="submit"
        className="w-full bg-gradient-gold text-charcoal py-4 rounded-lg font-bold text-base hover:shadow-lg hover:shadow-gold/30 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Get FREE Callback Now"}
      </button>
      <p className="text-xs text-muted-foreground text-center">🔒 Your information is secure and will not be shared</p>
    </form>
  );
};

export default BartendingLeadForm;

