import DivisionSection from "./_components/DivisionSection";
import Header from "./_components/Header";
import Visi from "./_components/Visi";
import Leader from "./_components/Leader";
import { LeadersData, TrackData } from "./_components/const/datas";
import TrackRecord from "./_components/TrackRecord";
import Faq from "./_components/FAQ";
import News from "./post/page";
import NewsSection from "./_components/News";

export default function Home() {
  return (
    <>
      <Header />
      <TrackRecord datas={TrackData} />
      <DivisionSection />
      <Visi />
      <NewsSection />
      <Faq />
    </>
  );
}
