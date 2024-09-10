//TODO: too complex, make it simpler

export type PricingItemType = {
    id: string
    title: string
    monthlyFee: number //percent
    withdrawFee: number //percent
    exchangeFee: number //percent
    invoicing: boolean
    api: boolean
    liveSupport: boolean
    terminalPOS: string 
    link: string
}

export type PricingItemDescriptionType = {
    [Key in keyof Omit<PricingItemType, 'id' | 'title' | 'link' >]: string
};

export type pricingIds = typeof pricingList.pricingItems[number]['id']

type PricingListType = {
    descriptions: PricingItemDescriptionType,
    pricingItems: PricingItemType[]
}

//TODO: place correct links
export const pricingList: PricingListType = {
    descriptions: {
        monthlyFee: 'Monthly Fee',
        withdrawFee: "Withdrawal Fee",
        exchangeFee: "Exchange Fee",
        invoicing: "Invoicing",
        api: "API",
        liveSupport: "Live Support",
        terminalPOS: "Crypto Payment Terminal",
    },
    pricingItems: [
        {
            id: 'basic',
            title: '',
            withdrawFee: 1,
            monthlyFee: 0,
            exchangeFee: 0,
            invoicing: true,
            api: true,
            liveSupport: true,
            terminalPOS: '0€ (free lease after a 200€ deposit)',
            link:'/contact'
        },
    ]
} as const