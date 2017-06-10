import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
      <select (change)="onChange($event.target.value)">
          <option value="allAnimals" selected="selected">All Animals</option>
          <option value="youngAnimals">Young Animals</option>
          <option value="matureAnimals" >Mature Animals</option>
        </select>
      <br><br>
      <ul>
        <li *ngFor="let currentAnimal of childAnimalList | age:filterByAge">{{currentAnimal.name}} <input type="image" src="/resources/img/pencil.png" (click)="editButtonHasBeenClicked(currentAnimal)" /><br>
          <ul>
          <li>Species: {{currentAnimal.species}}</li>
          <li>Age: {{currentAnimal.age}}</li>
          <li>Diet: {{currentAnimal.diet}}</li>
          <li>Location: {{currentAnimal.location}}</li>
          <li>Number of Caretakers: {{currentAnimal.caretakers}}</li>
          <li>Sex: {{currentAnimal.sex}}</li>
          <li>Likes: {{currentAnimal.likes}}</li>
          <li>Dislikes: {{currentAnimal.dislikes}}</li>
          </ul>
          <br>
        </li>
      </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter;
  filterByAge: string = "allAnimals";


  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }
}
