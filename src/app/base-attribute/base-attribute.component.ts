import { Component, OnInit } from '@angular/core';
import { IAttributes } from 'src/classes/interfaces/Character/ICharacter';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-base-attribute',
  templateUrl: './base-attribute.component.html',
  styleUrls: ['./base-attribute.component.scss']
})
export class BaseAttributeComponent implements OnInit {
  attributes:IAttributes;
  attribute_max:number
  constructor(private characterService:CharacterService) { }

  ngOnInit(): void {
    this.attributes = this.characterService.getBaseAttributes();
    this.attribute_max = this.characterService.getAttributeMax();
  }

  setBaseAttribute(key:string, value:number):void {
    console.log(key, value)
    this.characterService.setBaseAttribute(key, value);
  }

}