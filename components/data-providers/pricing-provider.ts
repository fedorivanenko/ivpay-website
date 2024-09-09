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
    terminalPOS: number | false //EUR per month. //TODO: consider array for different currencies 
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
        terminalPOS: "Terminal POS",
    },
    pricingItems: [
        {
            id: 'basic',
            title: 'Basic',
            monthlyFee: 0,
            withdrawFee: 0,
            exchangeFee: 0,
            invoicing: true,
            api: true,
            liveSupport: true,
            terminalPOS: false,
            link:'/contact'
        },
        {
            id: 'basic',
            title: 'POS',
            monthlyFee: 0,
            withdrawFee: 0,
            exchangeFee: 0,
            invoicing: true,
            api: true,
            liveSupport: true,
            terminalPOS: 5,
            link: '/contact'

        },
    ]
} as const