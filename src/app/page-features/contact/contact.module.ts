import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ItemModule } from '../common/item/item.module';
import { ItemComponent } from '../common/item/item.component';
import { ContactRoutingModule } from './contact-routing.module';
import { StoreModule } from '@ngrx/store';
import { ShareModule } from 'src/app/shared/shared-module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [ContactComponent],
    imports: [ ItemModule,ContactRoutingModule,FontAwesomeModule
    ],
    exports: [],
    providers: [ItemComponent],
})
export class ContactModule {}