
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div *ngIf="childSelectedAnimal">
    <h3>{{childSelectedAnimal.name}}</h3>
    <hr>
    <h3>Edit Animal</h3>
    <label>Name:</label><br>
    <input [(ngModel)]="childSelectedAnimal.name"><br>
    <label>Age:</label><br>
    <input type="number" [(ngModel)]="childSelectedAnimal.age"><br>
    <label>Number of Caretakers:</label><br>
    <input type="number" [(ngModel)]="childSelectedAnimal.caretakers"><br><br>
    <button class="btn btn-primary"(click)="editButtonClicked()">Done</button><br><br>
  </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() editButtonClickedSender = new EventEmitter();

  editButtonClicked() {
    this.editButtonClickedSender.emit();
  }

}
