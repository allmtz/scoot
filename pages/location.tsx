import Image from "next/image";

//  components
import { Container } from "@/components/Container";
import { Nav } from "@/components/Nav";
import { PageTitleHero } from "@/components/PageTitleHero";
import { LocationCard } from "@/components/LocationCard";
import { Footer } from "@/components/Footer";

import bgMobile from "../public/assets/images/about-hero-mobile.jpg";
import bgTablet from "../public/assets/images/about-hero-tablet.jpg";
import bgDesktop from "../public/assets/images/about-hero-desktop.jpg";

import worldMapMobile from "../public/assets/images/world-map-mobile.png";
import { Button } from "@/components/Button";

export default function Location() {
  return (
    <Container>
      <Nav />
      <PageTitleHero
        pageName="Locations"
        mobileSrc={bgMobile}
        tabletSrc={bgTablet}
        desktopSrc={bgDesktop}
      />
      <div className="relative flex items-center justify-center ">
        <Image src={worldMapMobile} alt="" className="mt-10"></Image>
      </div>

      <ul className="my-10 flex flex-col items-center gap-4">
        <li>
          <LocationCard location="New York" />
        </li>
        <li>
          <LocationCard location="London" />
        </li>
        <li>
          <LocationCard location="Jakarta" />
        </li>
        <li>
          <LocationCard location="Yokohama" />
        </li>
      </ul>
      <div className="flex flex-col items-center justify-center gap-8 p-4 xl:flex-row xl:gap-14">
        <h3 className="text-center font-space-mono text-2xl text-dark-navy xl:w-[300px] xl:text-4xl">
          <p>Your City Not Listed?</p>
        </h3>
        <p className="max-w-xl text-center text-dim-grey  xl:w-[600px] xl:text-start">
          If you’d like to see Scoot in your hometown, be sure to let us know.
          We track requests and plan launches based on demand. Feel free to
          message us by clicking the link or messaging us on social.
        </p>
        <Button text="Message Us" />
      </div>
      <Footer />
    </Container>
  );
}
