import Image from 'next/image'

export default function VideoProfil () {
  return (
    <>
  
    <section className='w-full' id='video-profil'>
      
      <div className='flex xl:flex-row flex-col items-center gap-10 grid-cols-1 md:grid-cols-2 mx-auto px-8 py-16 max-w-[1900px]'>
        {/* Kiri: teks */}
        <div className=''>
          <h2 className='mb-6 font-bold text-black text-3xl md:text-4xl'>
            Video Profil
          </h2>
          <p className='text-black text-base md:text-lg leading-relaxed'>
            Video profil sekolah yang akan memperkenalkan kepada kalian hal-hal
            yang berkaitan dengan lingkungan sekolah, fasilitas umum sekolah,
            fasilitas pembelajaran, ruang belajar, kegiatan siswa dan masih
            banyak lagi.
            <br />
            <br />
            Biar kalian tidak penasaran apa saja yang ada di dalam{' '}
            <b>SMK Telkom Malang</b>, yuk segera tonton video profilnya!
          </p>
        </div>
        <iframe
          className='shadow-lg rounded-xl w-full md:w-[560px] h-[315px]'
          width='560'
          height='315'
          src='https://www.youtube.com/embed/9xofia597HI?si=Oq-aoiTM-SVx_udM'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerpolicy='strict-origin-when-cross-origin'
          allowfullscreen
        ></iframe>
      </div>
    </section>
    </>
  )
}
