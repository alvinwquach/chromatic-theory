import Head from "next/head";

import Navbar from "../global/Navbar";
import Footer from "../global/Footer";
import { LocationFragment } from "@/graphql-operations";

type LayoutProps = {
  children: React.ReactNode;
  locations: LocationFragment[];
};

export default function Layout({ children, locations }: LayoutProps) {
  return (
    <div className="bg-white">
      <Head>
        <title>Chromatic Theory</title>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer locations={locations} />
    </div>
  );
}
