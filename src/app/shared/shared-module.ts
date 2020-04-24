import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

@NgModule({
    declarations: [],
    imports: [ CommonModule ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        // material module
        MatCardModule,
        MatButtonModule,
        MatDialogModule,
        MatInputModule,
        
    ],
    providers: [],
})
export class ShareModule {}