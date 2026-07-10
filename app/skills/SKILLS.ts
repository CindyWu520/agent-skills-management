import { Timestamp } from "next/dist/server/lib/cache-handlers/types"

type skills = {
    id: string,
    name : string,
    description: string,
    category: string,
    createdAt: string,
    updatedAt: string
}

export const SKILLS : skills[] = [
    {
        id: "1",
        name : "Skill 1",
        description: "Description 1",
        category: "Category 1",
        createdAt: "2026-07-09",
        updatedAt: "2026-07-09"  
    },
    {
        id: "2",
        name : "Skill 2",
        description: "Description 2",
        category: "Category 2",
        createdAt: "2026-07-09",
        updatedAt: "2026-07-09"  
    }
] 