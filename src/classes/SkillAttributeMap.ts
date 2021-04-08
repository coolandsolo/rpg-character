import { ISkills, IAttributes } from "./interfaces/Character/ICharacter";
type SkillAttributeMapType = {
    [key: string]: Array<keyof IAttributes>;
}

const SkillAttributeMap: SkillAttributeMapType = {
    Fighting: ['Dexterity', 'Strength'],
    Thievery: ['Dexterity'], 
    Stealth: ['Dexterity'],
    Archery: ['Dexterity'],
    Learned: ['Mind'],
    Survival: ['Mind'],
    Perception: ['Mind'],
    Apothecary: ['Mind'],
    Intimidation: ['Presence'],
    Performance: ['Presence'],
    Manipulation: ['Presence'],
    Insight: ['Presence'],
    Power: ['Presence', 'Mind']
}

export default SkillAttributeMap;
