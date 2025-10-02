import DivisionSection from "./_components/DivisionSection";
import Header from "./_components/Header";
import Visi from "./_components/Visi";
import Leader from "./_components/Leader";
import { LeadersData, TrackData } from "./_components/const/datas";
import TrackRecord from "./_components/TrackRecord";
import Faq from "./_components/FAQ";

export default function Home() {
  return (
    <>
      <Header />
      <Visi />
      <DivisionSection />
      <TrackRecord datas={TrackData} />
      <Leader datas={LeadersData} />
      <Faq />
    </>
  );
}
