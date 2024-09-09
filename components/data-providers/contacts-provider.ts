type ContactType = {
    address: string
    email: string
}

export const contact: ContactType = {
    address: "Av. Duque de Loulé 12, 1050-093 Lisbon",
    email: "info@ivpay.com"
} as const