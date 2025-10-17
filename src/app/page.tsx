import Header from './_components/Header'

import Leader from './_components/Leader'

import Faq from './_components/FAQ'

import NewsSection from './_components/News'
import VideoProfil from './_components/VideoProfil'
import WhyUs from './_components/WhyUs'
import VisiMisi from './_components/VisiMisi'
import AspirasiPage from './_components/AspirasiForm'
import CountSiswa from './_components/CountSIswa'
import JurusanSection from './_components/Jurusan'
import Berita from './_components/Berita'

export default function Home () {
  return (
    <>
      <Header />
      <VisiMisi />
      <Berita />
      <WhyUs />

      <CountSiswa />
      <JurusanSection />
      <VideoProfil />
      <Faq />
      <AspirasiPage />
    </>
  )
}
