'use client'
import { useTranslation } from "@/app/i18n/client"
import Base from "./Base"

interface ILngProps {
  lng: string
}


const LangeageSwitcher: React.FC<ILngProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'navbar')
  return <Base t={t} lng={lng} />
}

export default LangeageSwitcher