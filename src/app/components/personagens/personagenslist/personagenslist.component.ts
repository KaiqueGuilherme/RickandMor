import { Component, Input, OnInit } from '@angular/core';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { CarrouselComponent } from '../carrousel/carrousel.component';

@Component({
  selector: 'app-personagenslist',
  standalone: true,
  imports: [MdbCarouselModule, CarrouselComponent],
  templateUrl: './personagenslist.component.html',
  styleUrl: './personagenslist.component.scss'
})
export class PersonagenslistComponent implements OnInit {
  
  @Input() character: any; 
  
  constructor() {
    
    console.log(this.character)
   }
   
   ngOnInit(): void {
    
  }
  
  
}