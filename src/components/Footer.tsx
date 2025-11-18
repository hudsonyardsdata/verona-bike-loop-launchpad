import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">Verona Bike Loop</h3>
            <p className="text-sm text-muted-foreground">
              Building a bike-friendly, pedestrian-safe community in Verona, NJ.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/our-story" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/our-proposal" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Proposal
                </Link>
              </li>
              <li>
                <Link href="/join-us" className="text-muted-foreground hover:text-primary transition-colors">
                  Join Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Partner Organization</h4>
            <p className="text-sm text-muted-foreground mb-2">
              We work with Montclair Bike & Walk to advocate for safer streets.
            </p>
            <a
              href="https://www.bikewalkmontclair.org/donate"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-secondary hover:text-primary transition-colors underline"
            >
              Support our work →
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Verona Bike Loop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
