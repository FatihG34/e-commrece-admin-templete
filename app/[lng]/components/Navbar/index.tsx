import React from 'react'
import LangeageSwitcher from '../LanguageSwitcher'
import { useTranslation } from '@/app/i18n';

interface ILngProps {
    lng: string;
}
const Navbar: React.FC<ILngProps> = async ({ lng }) => {
    const { t } = await useTranslation(lng, "navbar");

    return (
        <header>
            Navbar
            <LangeageSwitcher lng={lng} />
        </header>
    )
}

export default Navbar
