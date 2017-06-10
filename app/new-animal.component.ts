import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
   <button class="btn btn-info"  *ngIf="!formDisplay" (click)='toggleEditForm()'>Add New Animal</button>
  <div *ngIf="formDisplay" id="edit-form">
    <input #newSpecies><br>
    <label>Species</label><br>
    <input #newName><br>
    <label>Name</label><br>
    <input type="number" #newAge><br>
    <label>Age</label><br>
    <input #newDiet><br>
    <label>Diet</label><br>
    <input #newLocation><br>
    <label>Location</label><br>
    <input type="number" #newCaretakers><br>
    <label>Number of Caretakers</label><br>
    <input #newSex><br>
    <label>Sex</label><br>
    <input #newLikes><br>
    <label>Likes</label><br>
    <input #newDislikes><br>
    <label>Dislikes</label><br>

   <button class="btn btn-success" (click)='toggleEditForm()' (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value); newSpecies.value = ''; newName.value = ''; newAge.value = ''; newDiet.value = ''; newLocation.value = ''; newCaretakers.value = ''; newSex.value = ''; newLikes.value = ''; newDislikes.value = '';">Done</button>

  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();
  formDisplay: boolean = false;


  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }

  toggleEditForm() {
    if(this.formDisplay === true) {
      this.formDisplay = false;
    } else {
      this.formDisplay = true;
    }
  }
}
