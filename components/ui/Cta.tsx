import { MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "./badge";
import { Button } from "@/components/ui/button";

function CTA() {
  return (
    <section className="w-full bg-gradient-to-br from-emerald-50 to-teal-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-32">
        <div className="flex flex-col text-center gap-8 items-center relative z-10">
          {/* Background decorative elements */}
          <div className="absolute top-10 right-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-teal-500/10 rounded-full blur-2xl"></div>

          <div>
            <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-emerald-200">
              Get started
            </Badge>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-2xl sm:text-3xl md:text-5xl tracking-tighter max-w-2xl font-bold text-gray-900">
              Ready to Launch Your
              <span className="text-emerald-500 block">Digital Bank?</span>
            </h3>
            <p className="text-base sm:text-lg leading-relaxed tracking-tight text-gray-600 max-w-2xl">
              Join hundreds of fintech companies using SwiftBank to power their
              digital banking solutions. Start building with our
              developer-friendly APIs and white-label infrastructure today.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              className="gap-4 bg-white text-emerald-600 hover:bg-gray-50 border border-emerald-200 shadow-lg"
              variant="outline"
              size="lg"
            >
              Schedule a Demo <PhoneCall className="w-4 h-4" />
            </Button>
            <Button
              className="gap-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg"
              size="lg"
            >
              Start Building Free <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export { CTA };
