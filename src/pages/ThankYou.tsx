import { Link } from "react-router-dom";
import { CheckCircle2, Phone, MessageCircle } from "lucide-react";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-8 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="mt-1 rounded-full bg-primary/10 p-2">
              <CheckCircle2 className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <h1 className="font-display text-3xl font-bold text-foreground">
                Thank you!
              </h1>
              <p className="mt-2 text-muted-foreground">
                We’ve received your request. Our counselor will reach out soon
                with course details and the next steps.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <a
              href="tel:+917055547000"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
            >
              <Phone className="h-4 w-4" />
              Call now
            </a>
            <a
              href="https://wa.me/917055547000?text=Hi!%20I%27m%20following%20up%20on%20my%20callback%20request."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-3 text-sm font-semibold text-white hover:bg-green-700 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/"
              className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              Back to home
            </Link>
            <span className="text-muted-foreground text-sm">•</span>
            <a
              href="/#contact"
              className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              Submit another request
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ThankYou;
