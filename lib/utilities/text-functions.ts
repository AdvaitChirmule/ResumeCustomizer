import { projects } from "@/data/project-data"

const skillIndex = new Map<string, number>()

export function cleanTextForTex(text: string) {
    text = text.replaceAll("#", "\\#")
    text = text.replaceAll("%", "\\%")
    return text;
}

export function extractSkillsFromDescription(description: string) {
    const skillSet = new Set<string>()

    for (const project of projects) {
        for (const skill of project["keywords"].split(", ")){
            skillSet.add(skill)
        }
    }

    const output = []

    for (const skill of skillSet) {
        if (description.includes(skill)) {
            output.push(skill)
        }
    }

    return output
}

function iterate(i: number, mask: boolean[], k: number): [boolean, number[]] {
    if (k == 0) {
        return [false, []]
    }
    if (i == projects.length) {
        return [false, []]
    }

    const keys = projects[i]["keywords"].split(", ")
    let change = false;

    const newMask = Array<boolean>(mask.length).fill(false)

    for (let i=0; i < keys.length; i++) {
        if (mask[skillIndex.get(keys[i])!] == false){
            newMask[skillIndex.get(keys[i])!] = true
            change = true
        }
    }

    if (change) {
        let fullHouse = true
        for (let i=0; i < newMask.length; i++) {
            if (!newMask[i]) {
                fullHouse = false
            }
        }

        if (fullHouse) {
            if (projects.length - i > k) {
                return [false, []]
            }
            else {
                const output = []
                for (let j=0; j < k; j++) {
                    output.push(i+j)
                }

                return [true, output]
            }
        }
        else {
            const result = iterate(i+1, newMask, k-1)
            if (result[0]) {
                const output = [i, ...result[1]]
                return [true, output]
            }
            else {
                return iterate(i+1, mask, k)
            }
        }
    }
    else {
        return iterate(i+1, mask, k)
    }
}

export function matchSkillsFromDescription(skillSet: string[]) {
    const mask = Array<boolean>(skillSet.length).fill(false)

    for (let i=0; i < skillSet.length; i++) {
        skillIndex.set(skillSet[i], i)
    }

    for (let i=0; i < projects.length; i++) {
        const result = iterate(i, mask, 3)
        if (result[0]) {
            return [true, result[1]]
        } 
    }

    return [false, []]
}