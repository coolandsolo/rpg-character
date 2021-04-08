
export type ICharacterState = {
    name: string;
    damage: number;
    attributes: IAttributes;
    combatAttributes: ICombatAttributes;
    skills: ISkills;
    supplemental_tenacity: number;
}
export type IAttributes = {
    Strength: number;
    Dexterity: number;
    Mind: number;
    Presence: number;
}

export enum SkillsRank { Untrained, Novice, Apprentice, Adept, Expert, Master }

export type ISkills = {
    Fighting: SkillsRank;
    Thievery: SkillsRank;
    Stealth: SkillsRank;
    Archery: SkillsRank;
    Learned: SkillsRank;
    Survival: SkillsRank;
    Perception: SkillsRank;
    Apothecary: SkillsRank;
    Intimidation: SkillsRank;
    Performance: SkillsRank;
    Manipulation: SkillsRank;
    Insight: SkillsRank;
    Power: SkillsRank;
}

export type ICombatAttributes = {
    Vitality: number;
    Evasion: number;
    Armor: number;
    Alacrity: number;
    Tenacity: number;
    Power: number;
}

export default interface ICharacter {
    store: ICharacterState;
}