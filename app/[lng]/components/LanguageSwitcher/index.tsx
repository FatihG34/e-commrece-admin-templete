import { useTranslation } from "@/app/i18n"
import Base from "./Base"

interface ILngProps {
  lng: string
}

const LangeageSwitcher: React.FC<ILngProps> = async ({ lng }) => {
  const { t } = await useTranslation(lng, 'navbar')

  return <Base t={t} lng={lng} />
}

export default LangeageSwitcher
