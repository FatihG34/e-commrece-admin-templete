import { useTranslation } from '@/app/i18n'
import Link from 'next/link'

const AboutUs = async ({ params: { lng } }: { params: { lng: string } }) => {
    const { t } = await useTranslation(lng, 'aboutus')
    return (
        <div>
            <h1>{t('title')}</h1>
            <Link href={`/${lng}`}>
                {t('back-to-home')}
            </Link>
        </div>
    )
}

export default AboutUs
