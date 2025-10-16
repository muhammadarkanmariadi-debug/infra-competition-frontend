import Header from './_components/Header'

import Leader from './_components/Leader'
import { LeadersData, TrackData } from './_components/const/datas'
import TrackRecord from './_components/TrackRecord'
import Faq from './_components/FAQ'
import News from './post/page'
import NewsSection from './_components/News'
import VideoProfil from './_components/VideoProfil'
import WhyUs from './_components/WhyUs'
import VisiMisi from './_components/VisiMisi'

export default function Home () {
  return (
    <>
      <Header />
      <VisiMisi />
      <WhyUs />
      <TrackRecord />
      <VideoProfil />
      <Faq />

    </>
  )
}
