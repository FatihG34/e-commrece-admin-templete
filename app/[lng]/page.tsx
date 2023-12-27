import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "../i18n";

export default async function Home({ params: { lng } }: { params: { lng: string } }) {
  const { t } = await useTranslation(lng, 'mainPage')
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>{t('title')}</h1>
      <Link href={`/${lng}/aboutus`}>{t('to-second-page')}</Link>
    </main>
  );
}
