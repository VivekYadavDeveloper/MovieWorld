"use client"
import Banner from "@/components/Bannersection/banner/Banner";
import MainContext from "@/context/MasterContext";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-start justify-items-start min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="w-full items-center sm:items-start">
        <MainContext>
          <Banner />
        </MainContext>

      </main>

    </div>
  );
}
