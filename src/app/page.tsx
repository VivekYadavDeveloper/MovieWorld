"use client";
import Banner from "@/components/Bannersection/Banner/Banner";
import MainContext from "@/context/MasterContext";

export default function Home() {
  return (
    <div className="font-sans items-start justify-items-start min-h-screen p-1 pb-20 gap-16 sm:p-8">
      <main className="w-full items-center sm:items-start">
        <MainContext>
          <Banner />
        </MainContext>
      </main>
    </div>
  );
}
