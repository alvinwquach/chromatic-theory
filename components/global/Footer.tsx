import {
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaYelp,
  FaCalendarAlt,
} from "react-icons/fa";

import { LocationFragment } from "@/graphql-operations";
import { Fragment } from "react";

type FooterProps = {
  locations: LocationFragment[];
};

function Footer({ locations }: FooterProps) {
  return (
    <div>
      {locations?.map((location) => (
        <Fragment key={location.__typename}>
          <footer className="bg-zinc-900 bottom-0 p-10">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="flex-none lg:flex">
                <div className="flex flex-col flex-1 pb-4">
                  <div className="pb-3 text-lg tracking-tight text-amber-550">
                    Welcome! Thank you for choosing Chromatic Theory!
                  </div>
                  <address className="not-italic text-base text-amber-550 flex flex-col justify-center mb-4 mt-4 w-full gap-2">
                    <a
                      className="flex flex-col underline hover:text-white hover:no-underline"
                      target={"_blank"}
                      href="https://www.google.com/maps/place/Chromatic+Theory/@37.5598449,-122.0122278,17z/data=!3m1!4b1!4m6!3m5!1s0x808fbf9bd4255555:0x1e6c38b288ee817d!8m2!3d37.5598449!4d-122.0096529!16s%2Fg%2F11h4cgmb31?hl=en-US"
                      aria-label="link to google maps location of Chromatic Theory"
                    >
                      <span>{location.address}</span>
                      <span>{location.addresslinen}</span>
                    </a>
                  </address>
                  <div className="text-amber-550">
                    <FaPhone className="inline-block mr-2" />
                    <a
                      className="underline hover:text-white hover:no-underline inline-flex items-center"
                      href="tel: +1(510) 514-6630"
                    >
                      {location.phone}
                    </a>
                  </div>
                  <div className="text-amber-550">
                    <FaEnvelope className="inline-block mr-2" />
                    <a
                      className="underline text-lg  text-amber-550 hover:text-white inline-flexhover:no-underline"
                      href="mailto:stephvnneco@gmail.com?subject=Book%20appointment"
                    >
                      {location.email}
                    </a>
                  </div>
                  <div className="mt-4 flex gap-6 pb-4 sm:pb-0">
                    <a
                      href={location.instagram ?? ""}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Open link to Chromatic Theory's instagram"
                    >
                      <FaInstagram className="text-amber-550 hover:text-white transition ease-in-out scale-110" />
                    </a>
                    <a
                      href={location.yelp ?? ""}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Open link to Chromatic Theory's yelp"
                    >
                      <FaYelp className="text-amber-550 hover:text-white transition ease-in-out scale-110" />
                    </a>
                    <a
                      href={location.booking ?? ""}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Open link to book appointments at Chromatic Theory"
                    >
                      <FaCalendarAlt className="text-amber-550 hover:text-white transition ease-in-out scale-110" />
                    </a>
                  </div>
                </div>
                <div className="footer:flex flex-col text-left">
                  <h2 className="mb-4 font-bold text-amber-550 capitalize text-left">
                    Hours
                  </h2>
                  <ul className="flex flex-col gap-1  text-amber-550 text-left">
                    <li>Sunday: {location.sunday}</li>
                    <li>Monday: {location.monday}</li>
                    <li>Tuesday: {location.tuesday}</li>
                    <li>Wednesday: {location.wednesday}</li>
                    <li>Thursday: {location.thursday}</li>
                    <li>Friday: {location.friday}</li>
                    <li>Saturday: {location.saturday}</li>
                  </ul>
                </div>
              </div>
              <div className="text-amber-550 text-base pt-8 flex flex-col items-center md:flex-row md:justify-between">
                © {new Date().getFullYear()} | Chromatic Theory | All Rights
                Reserved
              </div>
            </div>
          </footer>
        </Fragment>
      ))}
    </div>
  );
}

export default Footer;
