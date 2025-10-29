import Header from './_components/Header'

import Leader from './_components/Leader'

import Faq from './_components/FAQ'

import NewsSection from './_components/News'
import VideoProfil from './_components/VideoProfil'
import WhyUs from './_components/WhyUs'
import VisiMisi from './_components/VisiMisi'
import AspirasiPage from './_components/AspirasiForm'
import JurusanSection from './_components/Jurusan'
import Berita from './_components/Berita'
import Statistic from './_components/Statistic'


export default function Home () {
  return (
    <>
      <Header />
      <VisiMisi />
      <Berita />
      <WhyUs />

      <Statistic />
      <JurusanSection />
      <VideoProfil />
      <Faq />
      <AspirasiPage />
    </>
  )
}
