import Head from "next/head";
import { NextPage } from "next";

import {
  AllAboutsDocument,
  AllAboutsQuery,
  AllLocationsDocument,
  AllLocationsQuery,
  AllServicesDocument,
  AllServicesQuery,
  AllTestimonialsDocument,
  AllTestimonialsQuery,
  LocationFragment,
} from "../graphql-operations";

import Hero from "@/components/landing/Hero";
import MeetTheStylist from "@/components/landing/MeetTheStylist";
import BookAppointment from "@/components/landing/BookAppointment";
import Services from "@/components/landing/Services";
import Testimonials from "@/components/landing/Testimonials";

import client from "../apollo-client";

type HomeProps = {
  about: AllAboutsQuery["allAbout"];
  services: AllServicesQuery["allService"];
  testimonials: AllTestimonialsQuery["allTestimonial"];
  locations: LocationFragment[];
};

export async function getStaticProps() {
  const [
    { data: aboutData },
    { data: serviceData },
    { data: testimonialData },
    { data: locationData },
  ] = await Promise.all([
    client.query<AllAboutsQuery>({
      query: AllAboutsDocument,
    }),
    client.query<AllServicesQuery>({
      query: AllServicesDocument,
    }),
    client.query<AllTestimonialsQuery>({
      query: AllTestimonialsDocument,
    }),
    client.query<AllLocationsQuery>({
      query: AllLocationsDocument,
    }),
  ]);

  return {
    props: {
      about: aboutData?.allAbout ?? [],
      services: serviceData?.allService ?? [],
      testimonials: testimonialData?.allTestimonial ?? [],
      locations: locationData?.allLocation ?? [],
    },
    revalidate: 86400, // Revalidate every day
  };
}

const Home: NextPage<HomeProps> = ({
  about,
  services,
  testimonials,
}: HomeProps) => {
  const { heroImage } = about[0];
  return (
    <>
      <Head>
        <title>Chromatic Theory</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#e7d0ba"></meta>
        <meta name="theme-color" content="#e7d0ba" key="theme" />
        <meta
          name="description"
          content="hair salon located in Fremont, California"
        />
        <meta name="keywords" content="hair salon, color specialist" />
        <meta name="viewport" content="width=device-width" />
      </Head>
      <section className="max-w-7xl mx-auto mt-5 px-5 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-24 min-h-screen">
        <Hero
          backgroundUrl={heroImage?.asset?.url ?? ""}
          backgroundPosition={0}
        />
        <MeetTheStylist about={about} />
        <div className="flex justify-center mt-10">
          <BookAppointment />
        </div>
        <Services services={services} />
        <Testimonials testimonials={testimonials} />
      </section>
    </>
  );
};

export default Home;
