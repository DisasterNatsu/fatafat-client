import { DateFormatter } from "@/components/helpers/DateFormatter";
import FAQ from "@/components/home/FAQ";
import InformationTable from "@/components/home/InformationTable";
import Tables from "@/components/home/Table";
import TimeTable from "@/components/home/TimeTable";
import TypeWriter from "@/components/home/TypeWriter";

export default function Home() {
  const { formattedDate, formattedDateBengali } = DateFormatter({
    current: true,
  });

  return (
    <main>
      <div>
        <h1 className="my-1 text-xl font-bold text-center text-black bg-green-400 cursor-default dark:border-black border-x-2 py-2">
          {formattedDate} | {formattedDateBengali}
        </h1>
        <Tables refresh />
        <TypeWriter />

        <h2 className="text-center text-2xl font-semibold my-5 pb-2 border-b dark:border-white border-black">
          Resust of last 10 days
        </h2>
        <Tables heading />
      </div>

      <hr className="my-5 pb-2 dark:border-white border-black" />
      {/* Time table */}
      <div className="my-5">
        <h1 className="my-1 text-xl font-bold text-center text-black bg-green-400 cursor-default dark:border-black border-x-2 py-2">
          Time Table | সময়সূচী
        </h1>
        <TimeTable />
      </div>

      <h2 className="text-3xl font-semibold text-center">
        Important information
      </h2>
      <hr className="my-5 pb-2 dark:border-white border-black" />

      <div className="flex flex-col md:flex-row items-center justify-center my-10">
        <div className="w-full md:w-[50%]">
          <FAQ />
        </div>
        <div className="w-full md:w-[50%]">
          {/* Information Table */}
          <InformationTable />
        </div>
      </div>

      {/* Links to new charts */}
    </main>
  );
}
