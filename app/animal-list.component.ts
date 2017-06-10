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
    <li *ngFor="let currentAnimal of childAnimalList | age:filterByAge">{{currentAnimal.name}} <input type="image" src="/resources/img/pencil.png" (click)="editButtonHasBeenClicked(currentAnimal)" /><br><br></li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter;


  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  onChange(optionFromMenu) {
  this.filterByAge = optionFromMenu;
}

}
