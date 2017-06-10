import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="jumbotron">
   <div class="container" id="header">
    <h1>Animal Tracker</h1>
   </div>
 </div>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
      </div>
      <div class="col-md-6">
        <edit-animal [childSelectedAnimal]="selectedAnimal" (editButtonClickedSender)="finishedEditing()"></edit-animal>
        <new-animal (newAnimalSender)= "addAnimal($event)"></new-animal>
    </div>
  </div>
</div>
  `
})

export class AppComponent {
  selectedAnimal = null;
  masterAnimalList: Animal[] = [
  new Animal("Arctic Fox", "Moon",  2, "Carnivore", "Northern Trail", 5,  "Female",  "Cool shade", "Loud noises"),
  new Animal("Ocelot", "Prince", 4, "Carnivore", "Tropical Rain Forest Building", 6, "Male", "Laying in the sunshine", "Toys that are not rope-based"),
new Animal("Northwest Black Tailed Deer", "Tinkerbell", 8, "Herbivore", "Northern Trail", 2, "Female", "Delicate roots and leaves", "Loud Noises"),
  ];

  editAnimal(clickedAnimal) {
   this.selectedAnimal = clickedAnimal;
 }
 finishedEditing() {
   this.selectedAnimal = null;
 }

addAnimal(newAnimalFromChild: Animal) {
  this.masterAnimalList.push(newAnimalFromChild);
}
}
