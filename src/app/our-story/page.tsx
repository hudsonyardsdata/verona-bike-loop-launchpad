import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import homepageImage from "@/assets/verona-loop-homepage.png";
import foundersImage from "@/assets/verona-loop-founders.png";

export const metadata = {
  title: "Our Story - Verona Bike Loop",
  description: "Learn about the vision and founders behind the Verona Bike Loop initiative",
};

export default function OurStory() {
  return (
    <div className="py-20 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
          <p className="text-xl text-muted-foreground">
            Building a bike-friendly, pedestrian-safe community in Verona
          </p>
        </div>

        <div className="space-y-16">
          {/* Moving to the Suburbs - Image Right */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">From NYC to Suburban Verona</h2>
              <p className="text-muted-foreground mb-4">
                Moving to the suburbs from New York City was in some ways paradise and in some ways an adjustment. After 10 years of getting around the boroughs by trains and bikes, adapting to car-dependent New Jersey was a change.
              </p>
              <p className="text-muted-foreground mb-4">
                In New Jersey, cars are king! Not only do people need them to get from place to place, but they also take up a majority of what would be good bike space for parking. Dense housing grids with little parking mean people really depend on their cars.
              </p>
              <p className="text-muted-foreground">
                I understand how we got here, but I don't think it's the way we should keep going.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <Image
                src={homepageImage}
                alt="Verona streets and bike infrastructure"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* The Vision for Verona */}
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold">The Vision for Verona</h2>
            <p className="text-muted-foreground">
              Since buying a house in Verona, I've fallen in love with this small town, which fits into one approximate square mile and one ZIP code. My neighbors told me they've lived here for 60 years, never moved houses, know all their neighbors and love it that way. I would never want to change that, and yet connecting with folks from other sides of town is difficult!
            </p>
            <p className="text-muted-foreground">
              Our town is bisected by two state roadways, which constantly flow with traffic going upwards of 40 miles an hour. For an adult, that's not too scary to stop and look around, but for a young child that could encounter an inattentive driver, even the possibility of this brings stress and near disaster to many parents' minds. I know that is the case for my own daughter and future children as well.
            </p>
            <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
              <h3 className="text-2xl font-bold mb-2 text-primary">Verona needs a loop.</h3>
              <p className="text-muted-foreground">
                This protected avenue will enable bikers to get from each quadrant to another smoothly without having to take the direct route across Lakeside Avenue and Bloomfield Avenue. These busy arteries can be crossed in safe areas with buttons and well-marked blinking notifications when pedestrians are available and interested in crossing.
              </p>
            </div>
            <p className="text-muted-foreground">
              Some level of fairness setting the rights of pedestrians and bikers equal with the rights of cars is overdue and will bring prosperity to the neighborhood.
            </p>
          </div>

          {/* Meet the Founders - Image Left */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg md:order-first order-last">
              <Image
                src={foundersImage}
                alt="Verona Bike Loop founders and advocates"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Meet the Founders</h2>
              <p className="text-muted-foreground mb-4">
                Since moving to Verona in August 2022, I've made other friends who are local residents and major proponents of bike and pedestrian safety.
              </p>
              <p className="text-muted-foreground mb-4">
                That's how I met Denis and Elvira Grishin, the proprietors of Voltaire Cycles on Bloomfield Avenue, and Paul Mickiewicz, who is a founder of Bike and Walk Montclair, a registered nonprofit focused on pedestrian safety and advocacy.
              </p>
              <p className="text-muted-foreground">
                It is through this group of friends that we are able to organize and advocate for policy changes in Verona, and we invite you to work with us.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <Card className="mt-12 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-center">Join the Loop</h2>
              <p className="text-lg mb-6 text-center opacity-90 max-w-2xl mx-auto">
                Ready to see our concrete plans? Explore the detailed proposal with maps, crossing points, and bike infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/our-proposal">View Our Proposal</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/20 bg-white/10 text-white hover:bg-white/20">
                  <Link href="/join-us">Support Our Vision</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
