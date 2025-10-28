import Image from "next/image";

export default function Header() {
  return (
    <>
      <div className='mt-28'>
        <div className='text-center'>
          <h1 className='font-[700] text-[30px] text-primary 2xl:text-[60px] xl:text-[50px]'>
            The Real Informatics School!
          </h1>
          <h3 className='mt-[2px] px-1 xl:px-0 font-[600] xl:font-[700] text-[22px] text-primary 2xl:text-[40px]'>
            Pelopor SMK Bidang Teknologi dan Informatika di Indonesia
          </h3>
          <p className='mt-[20px] px-4 xl:px-0 font-[400] text-black text-sm 2xl:text-xl'>
            <b className='text-primary'>Moklet Portal</b> adalah pusat informasi
            digital <b>SMK Telkom Malang</b> yang menyajikan berita, agenda,
            pengumuman, dan <br /> prestasi sekolah secara cepat dan mudah
            diakses oleh siswa, guru, orang tua, maupun masyarakat.
          </p>
        </div>
        <div className='drop-shadow-[0_4px_25px_rgba(225,95,96,0.35)] text-center'>
  <Image
    src='/assets/image/bombi.png'
    alt='Arrow Down'
    width={400}
    height={0}
    className='z-[-1] relative mx-auto mt-[38px] w-[300px] xl:w-[400px] hover:scale-105 transition-transform duration-300'
  />
<a
  href="/login"
  className="flex justify-center items-center bg-primary hover:bg-opacity-90 hover:shadow-lg mx-auto py-3 xl:py-5 rounded-full w-[400px] max-sm:w-[350px] xl:w- font-bold text-white text-2xl xl:text-4xl hover:scale-105 transition-all duration-300 [450px]"
>
  Ikuti Kami!
</a>

</div>
        <div className='sm:hidden xl:block hiasan'>
          <div className='2xl:top-[-700px] 2xl:left-[300px] 2xl:relative kiri'>
            <Image
              src='/assets/image/server-rack.png'
              alt='Server Rack'
              width={72}
              height={72}
              className='max-md:hidden top-[150px] left-[153px] min-xl:absolute rotate-[-5deg]'
            />
            <Image
              src='/assets/image/triangle-sm.png'
              alt='small triangle'
              width={32}
              height={28}
              className='max-md:hidden top-[236px] left-[263px] min-xl:absolute rotate-[-127deg]'
            />
            <Image
              src='/assets/image/Polygon21.png'
              alt='segitiga kiri'
              width={343.5}
              height={307.5}
              className='max-md:hidden top-[359px] left-[100px] min-xl:absolute'
            />
          </div>

          <div className='2xl:top-[-700px] 2xl:right-[400px] 2xl:relative kanan'>
            <Image
              src='/assets/image/Polygon20.png'
              alt='triangle kanan'
              width={318}
              height={283.5}
              className='max-md:hidden top-[377px] right-[104px] min-xl:absolute'
            />
            <Image
              src='/assets/image/desktop.png'
              alt='desktop'
              width={65}
              height={65}
              className='max-md:hidden top-[400px] right-[350px] min-xl:absolute'
            />
            <Image
              src='/assets/image/Group1395.png' //
              alt='Server Rack'
              width={32}
              height={28}
              className='max-md:hidden top-[183px] right-[295px] min-xl:absolute rotate-[-5deg]'
            />
            <Image
              src='/assets/image/Group1395.png'
              alt='triangle besar'
              width={90}
              height={81}
              className='max-md:hidden top-[264px] right-[108px] min-xl:absolute'
            />
          </div>

          <Image
            src='/assets/image/panah-kiri.png'
            alt='panah kiri'
            width={161}
            height={32}
            className='max-md:hidden top-[640px] 2xl:top-[900px] left-[320px] 2xl:left-[800px] min-xl:absolute'
          />
          <Image
            src='/assets/image/Vector39.png'
            alt='panah kanan'
            width={161}
            height={32}
            className='max-md:hidden top-[485px] 2xl:top-[650px] right-[375px] 2xl:right-[900px] min-xl:absolute'
          />
        </div>
      </div>

      {/* Segitiga dekorasi atas */}
      <Image
        src="/assets/image/Group14556.png"
        alt="triangle top left"
        width={80}
        height={80}
        className="hidden md:block top-16 md:top-20 left-10 md:left-24 absolute"
      />
      <Image
        src="/assets/image/Group1395.png"
        alt="triangle top right"
        width={80}
        height={80}
        className="hidden md:block top-16 md:top-20 right-10 md:right-24 absolute"
      />

     
    </>
  
  );
}
