import { Metadata } from "next";

import LinkButton from "@/app/_components/Button";
import Image from "@/app/_components/image";
import { H2 } from "@/app/_components/Text";
import { SectionWrapper } from "@/app/_components/wrapper";

export const metadata: Metadata = {
  title: "Jawaban Anda telah terkirim",
};

export default function AlreadySubmit() {
  return (
    <SectionWrapper id="success">
      <div className="flex flex-col justify-center items-center gap-20">
        <Image
          src={"/images/thumb.png"}
          alt={"thumb"}
          width={260}
          height={144}
          priority
        />
        <div className="flex flex-col items-center justify-center">
          <div className="mb-11 text-center">
            <H2 className="mb-[18px]">Jawaban Anda telah terkirim</H2>
          </div>
          <LinkButton variant={"primary"} href="/">
            Kembali ke beranda
          </LinkButton>
        </div>
      </div>
    </SectionWrapper>
  );
}
