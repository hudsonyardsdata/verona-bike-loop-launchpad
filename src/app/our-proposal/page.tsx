import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import wishlistImage from "@/assets/verona-loop-wishlist.png";
import bikerackImage from "@/assets/verona-loop-bikerack-example.png";
import { MapPin, AlertCircle, Bike, ParkingCircle } from "lucide-react";

export const metadata = {
  title: "Our Proposal - Verona Bike Loop",
  description: "Detailed plans and recommendations for building the Verona Bike Loop",
};

export default function OurProposal() {
  const loopStops = [
    "Brookdale Elementary",
    "Forest Elementary",
    "Verona Community Center",
    "Verona High School",
    "Verona Pool",
    "F. N. Brown Elementary",
    "Laning Elementary",
    "Town Hall, Library, and Middle School"
  ];

  const crossingButtons = [
    { location: "Brookdale", road: "Bloomfield Ave Crossing" },
    { location: "Forest", road: "Lakeside Ave Crossing", note: "(exists now!)" },
    { location: "Community Center", road: "Bloomfield Ave Crossing" },
    { location: "High School", road: "Fairview Ave Crossing" },
    { location: "Verona Pool", road: "Fairview Ave Crossing" },
    { location: "F. N. Brown", road: "Grove Ave Crossing" },
    { location: "Laning", road: "Linden Ave Crossing" },
    { location: "Park", road: "Bloomfield Ave Crossing" }
  ];

  const bikeLanes = [
    "Park - bike path markers and caution for walkers",
    "Forest - Gerdes uphill right bike lane and markers",
    "Forest - Forest Ave right lane and markers",
    "High School - Personnette downhill right side lane",
    "Verona Pool - Fairview Hillstop-side lane",
    "F. N. Brown - Franklin lane to the bike bridge",
    "F. N. Brown - Grove Ave both sides to Bloomfield",
    "Laning - Elmwood lane for school pickup",
    "Midtown - Claremont downhill right side"
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Proposal</h1>
          <p className="text-xl text-muted-foreground">
            Concrete plans and infrastructure wishlist for the Verona Bike Loop
          </p>
        </div>

        <div className="space-y-16">
          {/* Introduction */}
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-lg text-muted-foreground">
              We've developed a comprehensive plan for making Verona a truly bike-friendly community. Here's what we're working toward:
            </p>
          </div>

          {/* The Loop: 8 Stops */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">The Loop: Connecting Verona via 8 Stops</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                The Verona Bike Loop will connect all major community destinations:
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {loopStops.map((stop, index) => (
                  <div key={index} className="flex items-start gap-2 p-3 bg-muted/50 rounded-lg">
                    <span className="text-primary font-bold">{index + 1}.</span>
                    <span>{stop}</span>
                  </div>
                ))}
              </div>

              {/* Google Maps Embed */}
              <div className="mt-6">
                <h3 className="font-semibold mb-3">View the complete route on Google Maps:</h3>
                <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/d/embed?mid=1yourMapIdHere&ehbc=2E312F"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-2 italic">
                  * Please update the Google Maps embed URL with your actual map ID
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Eight Road Crossing Buttons */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-2xl">Eight Road Crossing Buttons</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Safe crossing points at major intersections with well-marked blinking notifications:
              </p>
              <div className="space-y-2">
                {crossingButtons.map((crossing, index) => (
                  <div key={index} className="flex items-start gap-2 p-3 bg-muted/50 rounded-lg">
                    <span className="text-secondary font-bold">{index + 1}.</span>
                    <div>
                      <span className="font-semibold">{crossing.location}</span>
                      <span className="text-muted-foreground"> - {crossing.road}</span>
                      {crossing.note && <span className="text-primary ml-2">{crossing.note}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Wishlist Image */}
          <div className="relative aspect-[16/10] rounded-lg overflow-hidden shadow-xl">
            <Image
              src={wishlistImage}
              alt="Verona Bike Loop infrastructure wishlist"
              fill
              className="object-cover"
            />
          </div>

          {/* Nine Dedicated Lanes */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Bike className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Nine Dedicated Lanes with Bike Signage</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Protected bike lanes throughout the route with proper signage and markers:
              </p>
              <div className="space-y-2">
                {bikeLanes.map((lane, index) => (
                  <div key={index} className="flex items-start gap-2 p-3 bg-muted/50 rounded-lg">
                    <span className="text-primary font-bold">{index + 1}.</span>
                    <span>{lane}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Bike Parking Infrastructure */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                      <ParkingCircle className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <CardTitle className="text-2xl">Bike Parking Infrastructure</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    To make the loop truly functional, we need secure bike parking at each stop:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold mt-1">✓</span>
                      <span>Eight new bike racks at major loop stops</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold mt-1">✓</span>
                      <span>Double-decker parking and charging stations in Midtown</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold mt-1">✓</span>
                      <span>Weather-protected bike storage at schools</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <Image
                src={bikerackImage}
                alt="Example of quality bike rack infrastructure"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Vision Statement */}
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6">Making It Happen</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  The Verona Bike Loop is more than just infrastructure—it's about creating a community where families feel safe, where children can bike to school independently, and where neighbors from all corners of town can easily connect.
                </p>
                <p>
                  It's about giving pedestrians and cyclists the same consideration we give to cars.
                </p>
                <p className="font-semibold text-foreground">
                  This vision is achievable, but we need community support to make it happen.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Join Us in Building a Better Verona</h2>
              <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                Whether you're a parent concerned about your children's safety, a cyclist looking for better routes, or simply a resident who believes Verona can be more connected and sustainable, we invite you to join our efforts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/join-us">Support the Loop</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/20 bg-white/10 text-white hover:bg-white/20">
                  <Link href="/our-story">Read Our Story</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
