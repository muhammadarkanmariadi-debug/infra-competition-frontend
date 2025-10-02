import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pendaftaran METIC - Join Our Community",
  description:
    "Bergabunglah dengan METIC (Moklet Education of Technology Informatic Club) dan jadilah bagian dari komunitas teknologi terdepan di SMK Telkom Malang.",
};

export default function RegistrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
