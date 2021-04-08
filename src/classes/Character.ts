import ICharacter, { IAttributes, ICharacterState, ICombatAttributes, ISkills, SkillsRank } from "./interfaces/Character/ICharacter";
import SkillAttributeMap from "./SkillAttributeMap";

export default class Character implements ICharacter {
    ATTRIBUTE_MAX = 10;

    store: ICharacterState = {
        name: '',
        damage: 0,
        supplemental_tenacity: 0,
        attributes: {
            Strength: 0,
            Dexterity: 0,
            Mind: 0,
            Presence: 0
        },
        combatAttributes: {
            Vitality: 0,
            Evasion: 0,
            Armor: 0,
            Alacrity: 0,
            Tenacity: 0,
            Power: 0
        },
        skills: {
            Fighting: SkillsRank.Apprentice,
            Thievery: SkillsRank.Untrained,
            Stealth: SkillsRank.Untrained,
            Archery: SkillsRank.Untrained,
            Learned: SkillsRank.Untrained,
            Survival: SkillsRank.Untrained,
            Perception: SkillsRank.Untrained,
            Apothecary: SkillsRank.Untrained,
            Intimidation: SkillsRank.Untrained,
            Performance: SkillsRank.Untrained,
            Manipulation: SkillsRank.Untrained,
            Insight: SkillsRank.Untrained,
            Power: SkillsRank.Untrained,
        }
    }


    public __constructor(name: string = 'Pas De Nom'): void {
        console.log('name', name)
        this.setName(name);
        this.initAttributes();
    }

    private _deep(ob) {
        return JSON.parse(JSON.stringify(ob))
    }

    public setName(name: string): void {
        this.store.name = name;
        console.log('setName', name, this.store);
    }

    public initAttributes(): void {
        for (const key in this.store.attributes) {
            const value = this.store.attributes[key];
            this.setAttribute(key as keyof IAttributes, value);
        }

        console.log('initAttributes', this.store);
    }

    public setAttribute(attribute: keyof IAttributes, value: number): void {
        this.store.attributes[attribute] = value;

        switch (attribute as String) {
            case 'Strength':
                this.store.combatAttributes.Vitality = (3 + this.store.attributes.Strength) - this.store.damage;
                break;
            case 'Presence':
                this.store.combatAttributes.Tenacity = 1 + this.store.attributes.Presence + this.store.supplemental_tenacity;
                break;

            case 'Mind':
            case 'Dexterity':
                this.store.combatAttributes.Evasion = 10 + this.store.attributes.Dexterity;
                this.store.combatAttributes.Armor = this.store.combatAttributes.Evasion;
                this.store.combatAttributes.Alacrity = this.store.attributes.Dexterity + this.store.attributes.Mind;
                break;

            default:
                this.store.combatAttributes.Power = 0;
                break;
        }

        console.log('setAttribute', attribute, value, this.store);
    }

    public setDamage(value: number): void {
        this.store.damage = value;
        this.setAttribute('Strength', this.store.attributes.Strength);
        console.log('setDamage', value, this.store);
    }

    public importState(state: ICharacterState) {
        // this.store = this._deep({ ...this.store, ...state });
        this.store = state;
        console.log('importState', state, this.store);
    }

    public trainSkill(skill: keyof ISkills): Boolean {
        console.log('trainSkill', skill, this.store);
        return this.setSkill(skill, this.store.skills[skill] + 1);
    }

    public setSkill(skill: keyof ISkills, value: number): Boolean {
        const skillRankSize = Object.keys(SkillsRank).length / 2 - 1;
        const skillAttributeRate = skillRankSize / this.ATTRIBUTE_MAX;
        let old_v = value;

        var attributeMax = this.ATTRIBUTE_MAX;
        SkillAttributeMap[skill].forEach((attribute) => {
            attributeMax = Math.min(attributeMax, this.store.attributes[attribute]);
        });

        value = Math.min(value, Math.round(skillAttributeRate * attributeMax));

        this.store.skills[skill] = value;
        console.log('setSkill', skill, value, this.store);
        return value == old_v;
    }
}
