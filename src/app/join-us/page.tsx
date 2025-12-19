"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Heart, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import { submitSupporterSignup } from "@/lib/api-client";

export default function JoinUs() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    hometown: "",
    zipcode: "",
    howCanYouHelp: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await submitSupporterSignup({
        name: formData.name,
        email: formData.email,
        hometown: formData.hometown,
        zipcode: formData.zipcode,
        howCanYouHelp: formData.howCanYouHelp,
      });

      if (result.success) {
        toast.success("Thank you for joining the Verona Bike Loop movement! We'll be in touch soon.");
        setFormData({ name: "", email: "", hometown: "", zipcode: "", howCanYouHelp: "" });
      } else {
        toast.error(result.error || "Failed to submit. Please try again.");
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.");
      console.error("Supporter signup error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-20 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Join the Movement</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Be part of building a safer, more connected Verona for everyone.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-8">
          {/* Signup Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Sign Up to Support</CardTitle>
              <CardDescription>
                Join our mailing list and let us know how you'd like to help make Verona bike-friendly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="hometown">Hometown *</Label>
                    <Input
                      id="hometown"
                      required
                      value={formData.hometown}
                      onChange={(e) => setFormData({ ...formData, hometown: e.target.value })}
                      placeholder="Verona"
                    />
                  </div>
                  <div>
                    <Label htmlFor="zipcode">Zipcode *</Label>
                    <Input
                      id="zipcode"
                      required
                      value={formData.zipcode}
                      onChange={(e) => setFormData({ ...formData, zipcode: e.target.value })}
                      placeholder="07044"
                      maxLength={5}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="howCanYouHelp">How can you help? (Optional)</Label>
                  <Textarea
                    id="howCanYouHelp"
                    value={formData.howCanYouHelp}
                    onChange={(e) => setFormData({ ...formData, howCanYouHelp: e.target.value })}
                    placeholder="I'd like to volunteer, advocate at town meetings, share on social media..."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Join the Loop"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Donate Section */}
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Support Our Partner Organization</CardTitle>
                  <CardDescription>
                    Help fund bike and pedestrian advocacy in Verona
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                <strong>Donate to the Verona Bike Loop</strong> directly. We are a partner organization of Montclair Bike & Walk, and your funds will be dedicated to a Verona-specific fund.
              </p>
              <p className="text-muted-foreground">
                We use their infrastructure and they share our vision for safer streets and better bike infrastructure throughout Essex County.
              </p>
              <Button asChild size="lg" variant="default" className="w-full md:w-auto">
                <a
                  href="https://donorbox.org/verona-bike-loop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  Support the Loop Today
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
              <p className="text-sm text-muted-foreground italic">
                Montclair Bike & Walk is a registered 501(c)(3) nonprofit organization. Your donation may be tax-deductible.
              </p>
            </CardContent>
          </Card>

          {/* Additional Ways to Help */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Other Ways to Support</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Attend Verona Town Council meetings to voice support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Share our proposal with friends and neighbors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Connect us with local decision-makers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Help organize community bike rides and events</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Volunteer for advocacy and outreach efforts</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
