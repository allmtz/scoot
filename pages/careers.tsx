// components
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Nav } from "@/components/Nav";
import { PageTitleHero } from "@/components/PageTitleHero";
import { ImageBlock } from "@/components/ImageBlock";
import { PositionsCard } from "@/components/PositionsCard";
import { NumberedImage } from "@/components/NumberedImage";
import { Footer } from "@/components/Footer";

// images
import bgMobile from "../public/assets/images/careers-location-hero-mobile.jpg";
import bgTablet from "../public/assets/images/careers-location-hero-tablet.jpg";
import bgDesktop from "../public/assets/images/careers-location-hero-desktop.jpg";

// for <ImageBlock>
import joinUs from "../public/assets/images/join-us.jpg";

// for <NumberedImage>
import ourTech from "../public/assets/images/our-tech.jpg";
import ourIntegrity from "../public/assets/images/our-integrity.jpg";
import ourCommunity from "../public/assets/images/our-community.jpg";

//arrows
import leftDownward from "../public/assets/patterns/left-downward-arrow.svg";

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

      <section className="mx-auto max-w-fit">
        <ImageBlock
          imgSrc={joinUs}
          title="Care to join our mission?"
          description="We’re always looking for ambitious individuals to help us on our journey. If you’re 
          passionate about our mission to provide clean, accessible transport to improve urban 
          living we want to hear from you!"
          arrowSrc={leftDownward}
          arrowDirection=""
        >
          <Button text="Say Hello" />
        </ImageBlock>
      </section>

      <section className="flex flex-col items-center gap-20">
        <h2 className="mt-20 text-3xl text-dark-navy md:text-4xl">
          Why join us?
        </h2>
        <div className="flex flex-col items-center gap-20 xl:flex-row">
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
        </div>
      </section>

      <ul className="my-20 flex flex-col flex-wrap items-center gap-4">
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
