import { Component, OnInit } from '@angular/core';
import { ISkills,  SkillsRank } from 'src/classes/interfaces/Character/ICharacter';
import { CharacterService } from '../character.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: ISkills;
  SkillRankTranslation: typeof SkillsRank;
  SkillColorTranslation: string[];
  constructor(private characterService: CharacterService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.skills = this.characterService.getSkills();
    this.SkillRankTranslation = SkillsRank;
    this.SkillColorTranslation = [
      "",
      "primary",
      "primary",
      "accent",
      "accent",
      "warn"
    ]
  }

  train(skill) {
    console.log('skill', skill);
    if (this.characterService.trainSkill(skill)) {
      this._snackBar.open(`Congratulations! You have trained on ${skill}`, 'Dance', {
        duration: 3000,
      });
    } else {
      this._snackBar.open(`Sorry you are not allowed to train on ${skill}`, 'Pout', {
        duration: 3000,
      });
    }
  }

}