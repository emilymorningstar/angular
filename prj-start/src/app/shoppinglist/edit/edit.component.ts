import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppinglistService} from '../shoppinglist.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
@ViewChild('nameInput', {static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: false }) amountInputRef: ElementRef;
  constructor(private slService: ShoppinglistService) { }

  ngOnInit() {
  }

  onAddItem() {
const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
  this.slService.addIngredient(newIngredient);
  }
}
