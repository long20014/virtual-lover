import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { MainRoutes } from './main.routes';
import { LogPanelComponent } from './components/log-panel/log-panel.component';
import { StatPanelComponent } from './components/stat-panel/stat-panel.component';
import { CharPanelComponent } from './components/char-panel/char-panel.component';
import { MainComponent } from './components/main/main.component';
import { InventorySlotComponent } from './components/inventory-slot/inventory-slot.component';

@NgModule({
  declarations: [LogPanelComponent, StatPanelComponent, CharPanelComponent, MainComponent, InventorySlotComponent],
  imports: [
    CommonModule,   
    FormsModule,
    HttpClientModule,    
    RouterModule.forChild(MainRoutes),
  ],
  providers: [
   
  ],
})
export class MainModule { }
