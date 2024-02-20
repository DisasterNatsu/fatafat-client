import { DateFormatter } from "@/components/helpers/DateFormatter";
import { DateFormatterQuery } from "@/components/helpers/DateFormatterQuery";
import FAQ from "@/components/home/FAQ";
import InformationTable from "@/components/home/InformationTable";
import Tables from "@/components/home/Table";
import TimeTable from "@/components/home/TimeTable";
import TodayTable from "@/components/home/TodayTable";
import TypeWriter from "@/components/home/TypeWriter";
import { Axios } from "@/utils/AxiosConfig";

const getLatestData = async ({ date }: { date: string }) => {
  const latest = await Axios.get(`/data/latest/${date}`);

  const last10 = await Axios.get(`/data/last-ten-days/${date}`);

  const latestData = await latest.data;

  const lastTenDaysData = await last10.data;

  return { latestData, lastTenDaysData };
};

const Home = async () => {
  const { formattedDate, formattedDateBengali } = DateFormatter({
    current: true,
  });

  const queryDate = DateFormatterQuery();

  const { latestData, lastTenDaysData } = await getLatestData({
    date: queryDate,
  });

  return (
    <main>
      <title>Kolkata FF 💚 FATAFAT Result Today LIVE Tips, Patti Chart</title>
      <meta property="og:url" content="https://kolkataff.space" />
      <div>
        <h1 className="my-1 text-xl font-bold text-center text-black bg-green-400 cursor-default dark:border-black border-x-2 py-2">
          {formattedDate} | {formattedDateBengali}{" "}
          <span className="animate-pulse">🔴</span>LIVE
        </h1>
        <TodayTable data={latestData} />
        <TypeWriter />

        <h2 className="text-center text-2xl font-semibold my-5 pb-2 border-b dark:border-white border-black">
          Result of last 10 days
        </h2>
        <Tables heading data={lastTenDaysData} />
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
};

export default Home;
