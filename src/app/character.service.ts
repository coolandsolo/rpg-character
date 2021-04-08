import { Injectable } from '@angular/core';
import Character from 'src/classes/Character';
import { IAttributes, ICombatAttributes, ICharacterState, ISkills } from 'src/classes/interfaces/Character/ICharacter';

@Injectable({
  providedIn: 'root'
})

export class CharacterService {
  character: Character;
  attribute_max: number;
  constructor() {
    this.character = new Character();
    this.attribute_max = this.character.ATTRIBUTE_MAX;
    this.init();
  }

  public init(): void {
    // 'Pas De Nom'
    this.character.setName(this.character.store.name);
    console.log('name in init', this.character.store.name);
    this.character.initAttributes();
  }

  public getName(): string {
    return this.character.store.name;
  }

  public getDamage(): number {
    return this.character.store.damage;
  }

  public getExport() {
    return JSON.stringify(this.character.store, null, 2);
  }

  public importState(state: ICharacterState) {
    this.character.importState(state);
  }

  public setName(name: string) {
    this.character.setName(name);
  }

  public setDamage(value: number) {
    this.character.setDamage(value);
  }

  public setBaseAttribute(key: string, value: number): void {
    this.character.setAttribute(key as keyof IAttributes, value);
  }
  public setBaseAttributes(): void {
    this.character.initAttributes();
  }

  public trainSkill(skill: keyof ISkills): Boolean {
    return this.character.trainSkill(skill);
  }

  public setSkill(skill: keyof ISkills, value): Boolean {
    return this.character.setSkill(skill, value);
  }

  public getBaseAttributes(): IAttributes {
    return this.character.store.attributes;
  }

  public getAttributeMax(): number {
    return this.attribute_max;
  }

  public getCombatAttributes(): ICombatAttributes {
    return this.character.store.combatAttributes;
  }

  public getSkills(): ISkills {
    return this.character.store.skills;
  }


}
