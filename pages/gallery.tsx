import Head from "next/head";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { NextPage, GetStaticProps } from "next";
import { useState } from "react";

import client from "../apollo-client";
import {
  AllGallerysDocument,
  AllGallerysQuery,
  AllLocationsDocument,
  AllLocationsQuery,
  LocationFragment,
} from "../graphql-operations";

type GalleryProps = {
  galleries: AllGallerysQuery["allGallery"];
  locations: LocationFragment[];
};

export const getStaticProps: GetStaticProps<GalleryProps> = async () => {
  const [{ data: galleryData }, { data: locationData }] = await Promise.all([
    client.query<AllGallerysQuery>({
      query: AllGallerysDocument,
    }),

    client.query<AllLocationsQuery>({
      query: AllLocationsDocument,
    }),
  ]);

  return {
    props: {
      galleries: galleryData?.allGallery ?? [],

      locations: locationData?.allLocation ?? [],
    },
    revalidate: 86400, // Revalidate every day
  };
};

const Gallery: NextPage<GalleryProps> = ({ galleries }: GalleryProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  return (
    <>
      <Head>
        <title>Gallery | Chromatic Theory</title>
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
          content="gallery of clients at chromatic theory"
        />
        <meta name="keywords" content="gallery, client haircuts" />
        <meta name="viewport" content="width=device-width" />
      </Head>
      <section className="max-w-7xl mx-auto mt-5 px-5 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-24 min-h-screen">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl mb-5 uppercase text-amber-650">Gallery</h1>
          <p className="text-xl mb-5">Here are some photos of my clients.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleries.map((gallery, index) => {
            return (
              <div
                key={index}
                className="relative cursor-pointer overflow-hidden rounded-sm"
                onClick={() => openModal(index)}
              >
                <div className="h-72 relative">
                  {gallery.image?.asset?.url && (
                    <Image
                      src={gallery.image.asset.url}
                      alt={`Image of ${gallery.image.asset?.url} ?? "`}
                      className="object-cover rounded-lg "
                      loading="lazy"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <AnimatePresence>
          {selectedImageIndex !== null && (
            <motion.div
              className="fixed top-0 left-0 h-full w-full bg-black bg-opacity-70 z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => closeModal()}
            >
              <div className="flex justify-center items-center h-full">
                {galleries[selectedImageIndex]?.image?.asset?.url && (
                  <Image
                    src={galleries[selectedImageIndex]?.image?.asset?.url ?? ""}
                    alt={`Image of ${galleries[selectedImageIndex]?.image?.asset?.url} ?? "`}
                    className="max-h-full max-w-full rounded-lg"
                    loading="lazy"
                    height={400}
                    width={400}
                  />
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
};

export default Gallery;
