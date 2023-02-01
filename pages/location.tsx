import Image from "next/image";

//  components
import { Container } from "@/components/Container";
import { Nav } from "@/components/Nav";
import { LocationCard } from "@/components/LocationCard";
import { ImageBlock } from "@/components/ImageBlock";
import { Footer } from "@/components/Footer";

import bgImage from "../public/assets/images/careers-location-hero-mobile.jpg";
import worldMap from "../public/assets/images/world-map-mobile.png";

export default function Location() {
  return (
    <Container>
      <Nav />
      <div className="relative flex items-center justify-center ">
        <Image src={bgImage} alt=""></Image>
        <h1 className="absolute text-white text-3xl">Locations</h1>
      </div>
      <Image src={worldMap} alt="" className="mt-10" />
      <ul className="flex flex-col gap-4 items-center mt-8">
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

      <ImageBlock
        title="Your City Not Listed?"
        description="If you’d like to see Scoot in your hometown, be sure to let us know. We track 
  requests and plan launches based on demand. Feel free to message us by clicking 
  the link or messaging us on social."
      />

      <Footer />
    </Container>
  );
}
