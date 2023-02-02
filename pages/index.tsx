// todo
// import lighter space mono font

import Head from "next/head";
import Image from "next/image";

//components
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Nav } from "@/components/Nav";
import { InfoBlock } from "@/components/InfoBlock";
import { ImageBlock } from "@/components/ImageBlock";
import { Footer } from "@/components/Footer";

//images
// using nex/image with local images : https://nextjs.org/docs/basic-features/image-optimization#local-images
import mobileHero from "../public/assets/images/home-hero-mobile.jpg";
import tabletHero from "../public/assets/images/home-hero-tablet.jpg";
import desktopHero from "../public/assets/images/home-hero-desktop.jpg";

//patterns
import rightArrow from "../public/assets/patterns/right-arrow.svg";
import leftDownward from "../public/assets/patterns/left-downward-arrow.svg";
import whiteCircles from "../public/assets/patterns/white-circles.svg";
import line from "../public/assets/patterns/line.svg";

// for <InfoBlock>
import locate from "../public/assets/icons/locate.svg";
import scooter from "../public/assets/icons/scooter.svg";
import ride from "../public/assets/icons/ride.svg";

// for <ImageBlock>
import telemetry from "../public/assets/images/telemetry.jpg";
import nearYou from "../public/assets/images/near-you.jpg";
import payments from "../public/assets/images/payments.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Scoot</title>
        <meta name="description" content="Mobility for the digital era" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Container>
        <Nav />
        {/* keeping this as an example */}
        {/* <main className={styles.main}> */}
        <main className="bg-white flex flex-col items-center">
          <div className="relative max-w-fit overflow-hidden">
            <Image src={mobileHero} alt="" className="md:hidden" />
            <Image
              src={tabletHero}
              alt=""
              className="hidden lg:hidden md:inline"
            />
            <Image src={desktopHero} alt="" className="hidden lg:inline" />

            <div className="HERO-SECTION absolute top-0 w-full h-full flex flex-col pb-20 gap-8 items-center justify-center text-white">
              <div className="flex flex-col gap-8 items-center absolute xl:items-start xl:left-60">
                <h1 className="font-space-mono text-4xl text-center xl:self-start xl:text-start xl:-ml-14">
                  Scooter <br className="xl:hidden" /> sharing
                  <br className="hidden xl:inline" /> made
                  <br className="xl:hidden" /> simple
                </h1>
                <p className="w-[260px] text-center md:text-lg md:w-[700px] xl:text-start xl:w-[550px] ">
                  Scoot takes the hassle out of urban mobility. Our bikes are
                  placed in convenient locations in each of our cities. Use our
                  app to locate the nearest bike, unlock it with a tap, and
                  you’re away!
                </p>
                <Button text="Get Scootin" />
              </div>
              <Image
                src={line}
                alt=""
                className="hidden xl:inline absolute left-0"
              />
              <Image
                src={rightArrow}
                alt=""
                className="-translate-x-56 absolute bottom-5 left-20 xl:left-[80%] xl:bottom-[33%]"
              />
              <Image
                src={whiteCircles}
                alt=""
                className="hidden md:inline absolute bottom-8 -right-8"
              />
            </div>
          </div>
          <section className="mt-5  xl:flex xl:flex-row ">
            <InfoBlock
              imgSrc={locate}
              title="Locate with app"
              description="Use the app to find the nearest scooter to you. We are continuously placing scooters 
              in the areas with most demand, so one should never be too far away."
              alt="smiling user ordering a scooter"
            />
            <InfoBlock
              imgSrc={scooter}
              title="Pick your scooter"
              description="We show the most important info for the scooters closest to you. So you know how much 
              charge they have left and can see roughly how much it will cost."
              alt="view of city street"
            />
            <InfoBlock
              imgSrc={ride}
              title="Enjoy the ride"
              description="Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, 
              and you’re off! Always lock bikes away from walkways and accessibility ramps."
              alt="man pulling money from wallet"
            />
          </section>
          <section>
            <ImageBlock
              imgSrc={telemetry}
              title="Enjoy the ride"
              description="Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, 
              and you’re off! Always lock bikes away from walkways and accessibility ramps."
              arrowSrc={leftDownward}
              arrowDirection="left"
            />
            <ImageBlock
              imgSrc={nearYou}
              title="Coming to a city near you"
              description="Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure 
              to let us know if you want to see us in your hometown. We’re aiming to let our 
              scooters loose on 23 cities over the coming year."
              arrowSrc={rightArrow}
              arrowDirection="left"
            />
            <ImageBlock
              imgSrc={payments}
              title="Zero hassle payments"
              description="Our payment is as easy as one two three. We accept most credit cards and debit cards. 
              You can also link your PayPal account inside the app. Need to pay later? No worries! 
              You can defer payment for up to a month."
              arrowSrc={leftDownward}
              arrowDirection="left"
            />
          </section>
        </main>
        <Footer />
      </Container>
    </>
  );
}
