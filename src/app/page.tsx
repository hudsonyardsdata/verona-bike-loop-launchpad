"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Bike, Users, MapPin } from "lucide-react";
import heroImage from "@/assets/verona-loop-bikers.png";

export default function Home() {
  const highlights = [
    {
      icon: MapPin,
      title: "The Loop Concept",
      description: "A protected bike route connecting all 8 major community destinations in Verona, making biking safe and accessible for everyone.",
    },
    {
      icon: Users,
      title: "Built by the Community",
      description: "Founded by local residents and bike advocates working with Montclair Bike & Walk to make Verona safer for cyclists and pedestrians.",
    },
    {
      icon: Bike,
      title: "Safety First",
      description: "Safe crossing points, dedicated bike lanes, and proper infrastructure to protect cyclists and pedestrians of all ages.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-muted/50 to-background py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Verona Needs a Loop
              </h1>
              <p className="text-xl text-muted-foreground">
                A vision for bike-friendly, pedestrian-safe neighborhoods. Connecting all corners of Verona with protected bike routes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" variant="default">
                  <Link href="/our-proposal">See the Proposal</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/join-us">Join the Movement</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroImage.src}
                alt="Verona Bike Loop - Cyclists enjoying safe bike infrastructure"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Verona Needs a Bike Loop</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our town is bisected by two busy state roadways. We need a safe way to connect all quadrants.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <highlight.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{highlight.title}</h3>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">The Challenge</h2>
            <p className="text-lg text-muted-foreground">
              Verona is bisected by Bloomfield Avenue and Lakeside Avenue—two state roadways with traffic flowing at 40+ mph. For families with young children, crossing these streets is stressful and potentially dangerous.
            </p>
            <p className="text-lg text-muted-foreground">
              We need protected bike routes and safe crossing points to give pedestrians and cyclists the same consideration we give to cars.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-primary to-secondary text-primary-foreground overflow-hidden">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Make Verona Safer?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Join us in building a bike-friendly community where families feel safe and neighbors can easily connect.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/our-story">Read Our Story</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/20 bg-white/10 text-white hover:bg-white/20">
                  <Link href="/join-us">Sign Up to Help</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
