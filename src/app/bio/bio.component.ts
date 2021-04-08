import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { MatDialog } from '@angular/material/dialog';
import { NameDialogComponent } from './name-dialog/name-dialog.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ISkills } from 'src/classes/interfaces/Character/ICharacter';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {
  name: string;
  damage: number;
  exportURL: SafeResourceUrl;
  constructor(private characterService: CharacterService, public dialog: MatDialog, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.name = this.characterService.getName();
    this.damage = this.characterService.getDamage();
  }

  takeDamage() {
    this.damage++;
    this.damage = Math.min(this.damage, 10);
    this.characterService.setDamage(this.damage);
  }

  undoDamage() {
    this.damage--;
    this.damage = Math.max(this.damage, 0);
    this.characterService.setDamage(this.damage);
  }

  exportCharacter(): void {
    const data = this.characterService.getExport();
    // console.log('export', data, JSON.stringify(data));

    const blob = new Blob([data], { type: 'application/application/json' });
    const exportURL = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
    const elem = document.getElementById('exportCharacter');
    this.exportURL = exportURL;
    setTimeout(() => {
      elem.click();
    }, 1000);
    console.log(elem, exportURL)
  }



  importCharacter(fileList: FileList): void {
    let file = fileList[0];
    let fileReader: FileReader = new FileReader();
    fileReader.onloadend = (ev) => {
      if (typeof fileReader.result === 'string') {
        const store = JSON.parse(fileReader.result);
        // this.characterService.importState(store);
        this.damage = store.damage;
        this.name = store.name;
        this.characterService.setName(store.name);
        this.characterService.setDamage(store.damage);
        for (const key in store.attributes) {
          const value = store.attributes[key];
          this.characterService.setBaseAttribute(key, value);
        }
        for (const ind in store.skills) {
          const value = store.skills[ind];
          this.characterService.setSkill(ind as keyof ISkills, value);
        }
      }
    }

    fileReader.readAsText(file);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NameDialogComponent, {
      width: '250px',
      data: { name: this.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        this.name = result;
        this.characterService.setName(this.name);
      }
    });
  }
}
