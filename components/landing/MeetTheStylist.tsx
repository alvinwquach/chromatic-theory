import Image from "next/image";
import { PortableText } from "@portabletext/react";

import { AboutFragment } from "@/graphql-operations";

type MeetTheStylistProps = {
  about: AboutFragment[];
};

function MeetTheStylist({ about }: MeetTheStylistProps) {
  const { selfie, storyRaw } = about[0];
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row md:items-center">
        {storyRaw && (
          <div className="mb-12 animate-fade-in-up dark:text-white font-roboto text-base md:flex-1">
            <PortableText
              value={storyRaw}
              components={{
                block: {
                  normal: ({ children }) => {
                    return <p className="text-lg md:text-xl">{children}</p>;
                  },
                },
              }}
            />
          </div>
        )}
        {selfie && (
          <div className="mb-6 md:mb-0 rounded-full overflow-hidden md:ml-6 mx-auto md:mx-0 border-4 border-amber-550">
            <Image
              src={selfie.asset?.url || ""}
              alt={`Image of ${selfie.asset?.url}` || ""}
              height={300}
              width={300}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default MeetTheStylist;
