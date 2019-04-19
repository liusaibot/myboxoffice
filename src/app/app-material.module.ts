import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule, 
  MatSnackBarModule,
  MatTabsModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatStepperModule,
  MatTableModule,
  MatToolbarModule,
  MatTooltipModule,
  MatNavList,
  MatMenuModule,
  MatPaginatorModule
} from "@angular/material";

const MAT_MODULES  = [
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule, 
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatStepperModule,
  MatTabsModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatTableModule,
  MatToolbarModule,
  MatTooltipModule,
  // and so on...
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [MAT_MODULES]
})
export class AppMaterialModule { }
