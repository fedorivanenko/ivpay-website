//TODO: move here all the data related to the company

type ContactType = {
    address: string
    email: string
}

export const contact: ContactType = {
    address: "Av. Duque de Loulé 12, 1050-093 Lisbon",
    email: "info@ivpay.com"
} as const


type CompanyDataType = {
    contact: ContactType
    arbitraryValues: arbitraryValueType[]
}

type arbitraryValueType = {
    id: string,
    value: string | number
}

type arbitraryValueIDsType = typeof companyData.arbitraryValues[number]['id'];

export function getArbitraryValuesByID(id: arbitraryValueIDsType): string | null {
    const foundValue = companyData.arbitraryValues.find(item => item.id === id)?.value;
    return foundValue ? foundValue.toString() : null;
}

export const companyData = {
    contact: { ...contact },
    arbitraryValues: [
        {
            id: "NUMBER_OF_ACTIVE_MERCHANTS",
            value: 400
        },
        {
            id: "TOTAL_REVENUE",
            value: 5000
        }
    ]
} as const satisfies CompanyDataType