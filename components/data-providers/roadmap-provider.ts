export type RoadmapItemType = {
    id: string,
    title: string,
    list: string[]
}

export type RoadmapQarterType = {
    id: string,
    title: string
    items: RoadmapItemType[]
}

export const roadmapList: RoadmapQarterType[] = [
    { id: '2024q3', title: "2024 Q3", items: [
        {
            id: "tocken",
            title: "IVPAY Token",
            list: [
                'Will be available on the TON blockchain'
            ]
        }
    ]},
    { id: '2024q4', title: "2024 Q4", items: [

    ]},
    { id: '2025q1', title: "2025 Q1", items: [

    ]},
] as const