import Head from "next/head";
import { NextPage, GetStaticProps } from "next";

import client from "../apollo-client";
import {
  AllLocationsDocument,
  AllLocationsQuery,
  LocationFragment,
} from "../graphql-operations";

type ContactProps = {
  locations: LocationFragment[];
};

export const getStaticProps: GetStaticProps<ContactProps> = async () => {
  const [{ data: locationData }] = await Promise.all([
    client.query<AllLocationsQuery>({
      query: AllLocationsDocument,
    }),
  ]);

  return {
    props: {
      locations: locationData?.allLocation ?? [],
    },
    revalidate: 86400, // Revalidate every day
  };
};

const Contact: NextPage<ContactProps> = ({ locations }: ContactProps) => {
  return (
    <>
      <Head>
        <title>Contact | Chromatic Theory</title>
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
        <meta name="description" content="contact at chromatic theory" />
        <meta name="keywords" content="contact, chromatic theory" />
        <meta name="viewport" content="width=device-width" />
      </Head>
      <section className="max-w-7xl mx-auto mt-5 px-5 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-24 min-h-screen">
        <>
          {locations.map((location) => (
            <div key={location.__typename} className="text-center">
              <h1 className="text-5xl uppercase text-amber-650">Contact</h1>
              <div className="mx-auto max-w-md text-left my-10">
                <p className="text-2xl">{location.address}</p>
                <p className="text-2xl">{location.addresslinen}</p>
                <p className="text-2xl mt-5">
                  For bookings, please text {location.phone}. No phone calls.
                </p>
              </div>
            </div>
          ))}
        </>
      </section>
    </>
  );
};

export default Contact;
