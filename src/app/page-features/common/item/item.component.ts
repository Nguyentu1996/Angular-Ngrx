import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ItemComponent implements OnInit {
@Input() data : Observable<any> ;
_data : any 
  constructor(
    private cd :ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.cd.detach();
    this.data.subscribe((data)=>{
      data ?  this.cd.reattach() : this.cd.detach()
      this._data=data
      this.cd.markForCheck()
    });
    // this.cd.detach()
  }

}
