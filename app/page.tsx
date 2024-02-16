import Tables from "@/components/home/Table";
import TypeWriter from "@/components/home/TypeWriter";
import Footer from "@/components/shared/Footer";

export default function Home() {
  const date = new Date();

  const nowDate = date
    .toISOString()
    .split("T")[0]
    .split("-")
    .reverse()
    .join("-");

  return (
    <main>
      <div>
        <h1 className="text-2xl font-semibold text-center">{nowDate}</h1>
        <Tables refresh />
        <TypeWriter />

        <h1 className="text-center text-2xl font-semibold my-5 pb-2 border-b dark:border-white">
          Resust of last 10 days
        </h1>
        <Tables heading />
      </div>
      {/* Links to new charts */}
    </main>
  );
}
