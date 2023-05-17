import { useState } from "react";

function BookAppointment() {
  const [hovering, setHovering] = useState(false);

  return (
    <a
      href="https://stephanie-corpus.square.site/"
      className="relative inline-block px-5 py-4 rounded-md text-sm cursor-pointer bg-black text-white overflow-hidden"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book an appointment with Stephanie Corpus"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <span
        className={`absolute inset-0 bg-amber-650 transform origin-bottom transition-transform duration-300 ease-out ${
          hovering ? "scale-y-100" : "scale-y-0"
        }`}
      ></span>
      <span className="relative">Book Appointment</span>
    </a>
  );
}

export default BookAppointment;
