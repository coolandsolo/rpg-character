import { Component, OnInit } from '@angular/core';
import { ICombatAttributes } from '../../classes/interfaces/Character/ICharacter';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-combat-attribute',
  templateUrl: './combat-attribute.component.html',
  styleUrls: ['./combat-attribute.component.scss']
})
export class CombatAttributeComponent implements OnInit {

  combatAttributes:ICombatAttributes;
  constructor(private characterService:CharacterService) { }

  ngOnInit(): void {
    this.combatAttributes = this.characterService.getCombatAttributes();
  }

}