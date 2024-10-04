export type RoadmapItemType = {
    id: string,
    title: string,
    list: string[]
}

export type RoadmapQuarterType = {
    id: string,
    title: string
    items: RoadmapItemType[]
}

export const roadmapList: readonly RoadmapQuarterType[] = [
    {
        id: '2024',
        title: "2024",
        items: [
            {
                id: "tocken",
                title: "$IVPAY Token",
                list: [
                    'Will be available on the TON blockchain'
                ]
            },
            {
                id: "family",
                title: "ivpay family",
                list: [
                    "A volunteer program for anyone in the community who wants to get involved",
                    "Country-specific community managers for IVPAY",
                    "Grants Program (ecosystem funds)",
                    "KOLs (Key Opinion Leaders) will participate in internal surveys and ratings, with the top ones getting rewards"
                ]
            },
            {
                id: "dao",
                title: "full-scale dao",
                list: [
                    "DAO is available only to those who have staked tokens",
                    "DAO participants can influence key project decisions",
                    "Rewards for active participation and contributions"
                ]
            },
            {
                id: "rebrand",
                title: "Rebranding of corporate identity",
                list: []
            },
            {
                id: "website",
                title: "Development of a new website",
                list: [
                   // "Multilingual support (4 languages)",
                    "Internal cryptocurrency academy",
                    "Extra sections to boost traffic"
                ]
            },
            {
                id: "dashboard",
                title: "Completely reinvent merchant dashboard",
                list: []
            },
            {
                id: 'convertion',
                title: "Internal Fiat convertion flow",
                list: [
                    "Fully revamped merchant dashboard for improved UX and fiat-crypto functionality",
                    "Integrated internal flow for seamless fiat conversion",
                    "Enhanced efficiency and streamlined financial operations"
                ]
            },
            {
                id: "burning",
                title: "Systematic token burning",
                list: [
                    "Automatic Algorithm Implement an algorithm to burn 10% of our commission fees until the token reaches $1",
                    "Earnings Utilization The system will automatically use commission earnings to buy back and burn tokens. The team won't know when the burn happens, making it a fully decentralized process."
                ]
            },
            {
                id:"map",
                title: "Crypto map for everyone",
                list: [
                    "In-App Merchant Directory",
                    "Expanding Directory to All Crypto Organizations",
                    "For Users: Find trusted crypto services quickly, solving reliability issues", 
                    "For Businesses: Register, gain a verification badge after manager review, increase trust, attract new customers"
                ]
            }
        ]
    },
    {
        id: '2025',
        title: "2025",
        items: [
            {
                id: "social",
                title: "Social FI: Platform for crypto projects",
                list: [
                    "Crypto projects register on our platform, complete tasks, and earn points.",
                    "Holding $IVPAY Tokens: Points awarded based on the number of $IVPAY tokens held.",
                    "Social Media Activities: Points for reposts, giveaways, and videos mentioning $IVPAY.",
                    "Paying with $IVPAY Tokens: Points for transactions using $IVPAY."
                ]
            },
            {
                id: "benefits",
                title: "Benefits for Participants",
                list: [
                    "Free Listing: Top project receives a free listing on ivendPay.",
                    "Increased Visibility: Active engagement with ivendPay community increases project visibility.",
                    "Attracting Investors: High leaderboard positions attract potential investors and partners."
                ]
            },
            {
                id: "wallet",
                title:"Development of our own wallet",
                list: [
                    "Integration with Our App .The wallet will be fully integrated into our app",
                    "Transfers. Enables transfers within the app",
                    "Exchanges and Cross-Swaps. Provides the ability to exchange and cross-swap between different networks"
                ]
            }
        ]
    }
] as const;