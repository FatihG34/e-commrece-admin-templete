
export const fallbackLng: string = 'tr'
export const languages: string[] = [fallbackLng, 'en']
export const defaultNS: string = 'translation'
export const cookieName: string = 'i18next'

export function getOptions(lng = fallbackLng, ns = defaultNS) {
    return {
        // debug: true,
        supportedLngs: languages,
        fallbackLng,
        lng,
        fallbackNS: defaultNS,
        defaultNS,
        ns
    }
}
