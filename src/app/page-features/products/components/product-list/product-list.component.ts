import { Component, OnInit, Input,EventEmitter,SimpleChanges, ChangeDetectionStrategy, Output, OnChanges, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Product } from '../../product';
import { ProductItemComponent } from '../product-item/product-item.component';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  entryComponents:[ProductItemComponent],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit ,OnChanges , OnDestroy{
  @Input() products$ : Observable<Product[]>;
  @Input() currentProduct$ :Observable<Product>;
  @Output() edit = new EventEmitter<any>();
  @Output() clearCurrentProduct = new EventEmitter<any>();
  @Output() updateProduct = new EventEmitter<any>();
  products : Product[];
  subcription : Subscription;

  constructor(
    public dialog: MatDialog,
    private cd : ChangeDetectorRef
  ) { }
  ngOnDestroy(): void {
    if(this.subcription){
      this.subcription.unsubscribe()
    }
    
    this.cd.detach();
  }
  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
    this.subcription= this.products$.subscribe(data=>{
      if(data){
        this.products=data;     
         this.cd.markForCheck()

      }
    })
    
  }
  trackByFn(index:number, el:any): number {
    return el.id;
  }
  editProduct(product:Product){
    this.edit.emit(product);
    const dialogRef = this.dialog.open(ProductItemComponent, {
      width: '350px',
      data: product
    });
    dialogRef.afterClosed().subscribe((result:Product) => {
      if(result){
        // if form submit
        this.updateProduct.emit(result);
        
      }
      // clear form
      this.clearCurrentProduct.emit();
    });
    this.cd.markForCheck();
  }
}
