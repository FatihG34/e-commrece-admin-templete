import { Trans } from "react-i18next/TransWithoutContext"
import Link from "next/link"
import { languages } from "@/app/i18n/settings"
interface ILngProps {
  lng: string
  t: any
}
const Base: React.FC<ILngProps> = ({ t, lng }) => {

  return (
    <div>
      <Trans i18nKey='lannguageSwitcher' t={t} >
        Switch From <strong>{{ lng }}</strong> to:{' '}
      </Trans>
      {
        languages.filter((l) => lng !== l).map((l, i) => {
          return (
            <span key={l}>
              {i > 0 && (' or ')}
              <Link href={`/${l}`}>
                {l}
              </Link>
            </span>
          )
        })
      }
    </div>
  )
}

export default Base
