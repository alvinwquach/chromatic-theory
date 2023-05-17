import { ServiceFragment } from "../../graphql-operations";

interface ServiceCardProps {
  name: string | null | undefined;
  description: string | null | undefined;
  price: string | null | undefined;
  setPrice: boolean | null | undefined;
  durationHour?: string | null | undefined;
  durationMinutes?: string | null | undefined;
}

function ServiceCard({
  name,
  description,
  price,
  durationHour,
  durationMinutes,
  setPrice,
}: ServiceCardProps) {
  let duration = "";
  if (durationHour && parseInt(durationHour) === 1) {
    duration = "1 hour";
  } else if (durationHour) {
    duration = `${durationHour} hours`;
  }
  if (durationMinutes && !isNaN(parseInt(durationMinutes))) {
    const minutes = parseInt(durationMinutes);
    duration += durationHour ? ` ${minutes} minutes` : `${minutes} minutes`;
  }

  return (
    <>
      <div className="flex flex-col md:flex-row h-full w-full md:py-4 xl:p-6 lg:p-4 md:p-2 rounded-md shadow-md md:max-w-xl border">
        <div className="flex flex-col flex-grow px-8 md:px-4 p-8 md:p-6 lg:p-4">
          <div className="flex justify-between">
            <h3 className="mb-2 text-base font-bold tracking-tight">{name}</h3>
            <p className="text-right">
              {setPrice ? `$${price}` : `Starting at $${price}`}
            </p>
          </div>
          <p className="flex-grow font-base mb-2">{description}</p>
          {duration && <p className="mb-2">{duration}</p>}
        </div>
      </div>
    </>
  );
}

interface ServicesProps {
  services: ServiceFragment[];
}

function Services({ services }: ServicesProps) {
  return (
    <div className="relative max-w-5xl mx-auto my-28">
      <div className="flex pb-12 flex-col items-center justify-center">
        <h3 className="text-3xl sm:text-5xl uppercase text-amber-650 text-center">
          Service Menu
        </h3>

        <p className="mx-auto mt-3 max-w-2xl text-md sm:text-xl sm:mt-4 text-center">
          Late Policy: There is a 15 minute grace period. If you are more than
          15 minutes late, the appointment may have to be adjusted or
          rescheduled.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-6">
        {services?.map((service) => (
          <ServiceCard
            key={service.name}
            name={service.name}
            description={service.description}
            price={service.price}
            setPrice={service.setPrice}
            durationHour={service.durationHour}
            durationMinutes={service.durationMinutes}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
