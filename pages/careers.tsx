import Image from "next/image";

// components
import { Container } from "@/components/Container";
import { Nav } from "@/components/Nav";
import { ImageBlock } from "@/components/ImageBlock";
import { NumberedImage } from "@/components/NumberedImage";

// images
import bgMobile from "../public/assets/images/careers-location-hero-mobile.jpg";
import bgTablet from "../public/assets/images/careers-location-hero-tablet.jpg";
import bgDesktop from "../public/assets/images/careers-location-hero-desktop.jpg";

// for <ImageBlock>
import joinUs from "../public/assets/images/join-us.jpg";

//  for <NumberedImage>
import ourTech from "../public/assets/images/our-tech.jpg";
import ourIntegrity from "../public/assets/images/our-integrity.jpg";
import ourCommunity from "../public/assets/images/our-community.jpg";

//arrows
import leftDownward from "../public/assets/patterns/left-downward-arrow.svg";
import { PositionsCard } from "@/components/PositionsCard";
import { Footer } from "@/components/Footer";
import { PageTitleHero } from "@/components/PageTitleHero";

export default function Careers() {
  return (
    <Container>
      <Nav />

      <PageTitleHero
        pageName="Careers"
        mobileSrc={bgMobile}
        tabletSrc={bgTablet}
        desktopSrc={bgDesktop}
      />

      {/* <div className="relative flex items-center justify-center ">
        <Image src={bgMobile} alt="" className="md:hidden" />

        <Image src={bgMobile} alt="" className="md:hidden" />
        <Image src={bgTablet} alt="" className="hidden md:inline-block" />
        <Image src={bgDesktop} alt="" className="hidden" />
        <h1 className="absolute text-white text-3xl">Careers</h1>
      </div> */}

      <section>
        <ImageBlock
          imgSrc={joinUs}
          title="Care to join our mission?"
          description="We’re always looking for ambitious individuals to help us on our journey. If you’re 
          passionate about our mission to provide clean, accessible transport to improve urban 
          living we want to hear from you!"
          arrowSrc={leftDownward}
          arrowDirection=""
        />
      </section>

      <section className="flex flex-col items-center gap-20">
        <h2 className="text-dark-navy text-3xl mt-20 md:text-4xl">
          Why join us?
        </h2>
        <NumberedImage
          imgSrc={ourTech}
          imgNumber="01"
          title="Our tech"
          description="We’re using cutting edge technology to drive accessible urban transportation forward. 
            Our fully electric scooters are a joy to ride!"
        ></NumberedImage>

        <NumberedImage
          imgSrc={ourIntegrity}
          imgNumber="02"
          title="Our integrity"
          description="We are fully committed to deliver a great yet safe, sustainable micro-mobility experience 
            in every city we serve."
        ></NumberedImage>

        <NumberedImage
          imgSrc={ourCommunity}
          imgNumber="03"
          title="Our community"
          description="We support every community we serve. All workers are paid a living wage based on their 
            location and are Scoot employees."
        ></NumberedImage>
      </section>

      <ul className="flex flex-col items-center flex-wrap gap-4 my-20">
        <li>
          <PositionsCard
            positionTitle="General Manager"
            location="Jakarta, Indonesia"
          />
        </li>
        <li>
          <PositionsCard
            positionTitle="UI/UX Designer"
            location="Yokohama, Japan"
          />
        </li>
        <li>
          <PositionsCard
            positionTitle="Blog Content Copywriter"
            location="New York, United States"
          />
        </li>
        <li>
          <PositionsCard
            positionTitle="Graphic Designer"
            location="New York, United States"
          />
        </li>
        <li className=" ">
          <PositionsCard
            positionTitle="Fleet Supervisor"
            location="Jakarta, Indonesia"
          />
        </li>
        <li>
          <PositionsCard
            positionTitle="UX Analyst"
            location="London, United Kingdom"
          />
        </li>
      </ul>

      <Footer />
    </Container>
  );
}
