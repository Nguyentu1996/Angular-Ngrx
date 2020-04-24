import { Component, OnInit, Inject, OnDestroy, ChangeDetectionStrategy, ComponentRef, ElementRef } from '@angular/core';
import { Product } from '../../product';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { GenericValidator } from 'src/app/shared/generic-validator';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ProductItemComponent implements OnInit,OnDestroy {
  formData : FormGroup;
  displayMessage: { [key: string]: string } = {};
  private validationMessages: { [key: string]: { [key: string]: string } };
  private genericValidator: GenericValidator;
  activeComponent = true;

  constructor(
    private dialogRef : MatDialogRef<ProductItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data : Product,
    private fb : FormBuilder,
  ) 
    { 
      this.validationMessages = {
        productName: {
          required: 'Product name is required.',
          minlength: 'Product name must be at least three characters.',
          maxlength: 'Product name cannot exceed 50 characters.'
        },
        productCode: {
          required: 'Product code is required.'
        },
        starRating: {
          range: 'Rate the product between 1 (lowest) and 5 (highest).'
        }
      };
      this.genericValidator = new GenericValidator(this.validationMessages);
    }

  ngOnInit(): void {
    this.formData = this.fb.group({
      id : [''],
      productName : ['',[Validators.required, 
                        Validators.minLength(3),
                        Validators.maxLength(50)]],
      productCode : ['',Validators.required],
      description : '',
      starRating : '',
    });
    this.formData.valueChanges.subscribe(
      value => {
        this.displayMessage = this.genericValidator.processorMessage(this.formData);
      } 
    );
    console.log("Data",this.data);
    this.displayData(this.data);

  }
  displayData(data : Product){
    this.formData.reset();
    this.formData.patchValue({
      id :data.id,
      productName : data.productName,
      productCode : data.productCode,
      description : data.description,
      starRating : data.starRating,
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmit(){
  }
 
  blur(){
    this.displayMessage = this.genericValidator.processorMessage(this.formData);
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.activeComponent = false
  }
}
