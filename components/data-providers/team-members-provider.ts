

export type TeamMemberType = {
    id: number,
    name: string,
    surname: string,
    title: string,
    portrait: { src: string }
}

export const teamMembersList: TeamMemberType[] = [
    {
        id: 1,
        name: "Melane",
        surname: "Mohr",
        title: "PR, Advisor",
        portrait: {src: "/team-members/melane-mohr.png"}
    },
    {
        id: 2,
        name: "Melane",
        surname: "Mohr",
        title: "PR, Advisor",
        portrait: {src: "/team-members/melane-mohr.png"}
    },

] as const