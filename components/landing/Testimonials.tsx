import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  Keyboard,
  EffectCreative,
  A11y,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import { AllTestimonialsQuery } from "../../graphql-operations";

interface TestimonialCardProps {
  name: string | null | undefined;
  testimonial: string | null | undefined;
}

SwiperCore.use([
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  Keyboard,
  EffectCreative,
  A11y,
]);

function TestimonialCard({ name, testimonial }: TestimonialCardProps) {
  return (
    <>
      <div className="flex items-center h-full w-full">
        <div className="h-full w-full">
          <div className="p-10 md:p-12">
            <p className="text-sm md:text-lg">{name}</p>

            <p className="text-sm md:text-lg font-medium md:mb-4">
              {testimonial}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

interface TestimonialsProps {
  testimonials: AllTestimonialsQuery["allTestimonial"];
}

function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <>
      <section className="">
        <h3 className="text-3xl text-center tracking-widest my-24 text-black font-bold">
          What Clients Are Saying!
        </h3>
        <Swiper
          className="w-full"
          grabCursor={true}
          slidesPerView={1}
          scrollbar={{ draggable: true }}
          pagination={{ clickable: true }}
          navigation={true}
          keyboard={{
            enabled: true,
            onlyInViewport: false,
          }}
        >
          {testimonials?.map((testimonial) => (
            <SwiperSlide key={testimonial.name}>
              <TestimonialCard
                name={testimonial.name}
                testimonial={testimonial.testimonial}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}

export default Testimonials;
