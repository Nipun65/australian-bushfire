import Image from "next/image";
import data from "@/public/data.gif";
import septemberdata from "@/public/septemberdata.gif";
import decemeber from "@/public/december.gif";
import Info from "./components/Info";
import Toggle from "./components/Toggle";

const INFO = [
  {
    info: "300 - 370",
    color: "bg-[#FFFF00]",
    id: 1,
  },
  {
    info: "371 - 440",
    color: "bg-[#FFA500]",
    id: 2,
  },
  {
    info: "> 440",
    color: "bg-[#FF0000]",
    id: 3,
  },
];

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col px-10 py-3 gap-3 text-sm dark:text-white text-black dark:bg-black">
      <Toggle />
      <h1 className="font-extrabold xs:text-lg sm:text-2xl lg:text-3xl xs:text-left lg:text-center">
        Australian Bushfires 2019
      </h1>
      <p className="xs:text-xs sm:text-sm">
        {`The visualization utilizes FIRMS data from NASA, which provides fire
        intensity at 1 sq km resolution pixels. Higher intensities are mapped to
        red, while lower intensities are mapped to yellow. Australia's borders
        are overlaid on the intensity maps. The code fetches the FIRMS image
        collection data, maps it to colors based on intensity, and animates it
        over Australia's borders to create insightful visualizations tracking
        the tragic bushfire event.`}
      </p>
      <div className="flex flex-col gap-3 text-left items-center">
        <p className="font-bold xs:text-sm sm:text-lg lg:text-xl">
          Forest Fire Danger Index data simulation for September 2019
        </p>
        <Image
          src={septemberdata}
          alt="bushfire"
          className="md:72 md:w-[26rem] lg:h-96 lg:w-[30rem]"
          priority
          unoptimized
        />
        <p className="font-bold xs:text-sm lg:text-xl">
          Forest Fire Danger Index data simulation for Decemeber 2019
        </p>
        <Image
          src={decemeber}
          alt="bushfire"
          className="md:72 md:w-[26rem] lg:h-96 lg:w-[30rem]"
          unoptimized
        />
      </div>
      <p className="xs:text-xs sm:text-sm">
        With the help of Earth Engine, we have visualized the trend data for
        different months so we can clearly understand how the fire spread across
        various areas. In September 2019, the bushfire started spreading across
        various cities, and in the last month, it got really worse.
      </p>

      <div className="flex items-center flex-col justify-center gap-3">
        <p className="text-left font-bold xs:text-sm lg:text-xl">
          Forest Fire Danger Index data simulation for 10th November to 31st
          December 2019
        </p>

        <div className="flex items-center gap-8 lg:flex-row xs:flex-col xs:ml-0 lg:ml-40">
          <Image
            src={data}
            alt="bushfire"
            className="md:72 md:w-[26rem] lg:h-96 lg:w-[30rem]"
            unoptimized
          />
          <div className="flex xs:flex-row xs:gap-3 lg:flex-col gap-2">
            <p>(Fire Intensity)</p>
            <div className="flex xs:flex-row xs:gap-3 lg:flex-col flex-wrap w-fit">
              <Info data={INFO} />
            </div>
          </div>
        </div>
        <p className="xs:text-xs sm:text-sm">
          As you can see in the above representation, the intense fire spread in
          December from the visualization with so many red dots indicating
          extremely high-intensity fires. In January 2020, the fire was intense
          in the earlier days in NSW and Victoria, but it gradually decreased
          and became very less by the end of January.
        </p>
      </div>
    </main>
  );
}
