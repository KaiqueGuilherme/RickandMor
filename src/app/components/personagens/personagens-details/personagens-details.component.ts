import { Component, Input, Output, inject } from '@angular/core';
import { Personagens } from '../../../models/personagem';
import { CommonModule } from '@angular/common';
import { CharacterServiceService } from '../../../service/Character/character-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-personagens-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personagens-details.component.html',
  styleUrl: './personagens-details.component.scss'
})
export class PersonagensDetailsComponent {
   selectedCharacter: Personagens | undefined;

   private route = inject(ActivatedRoute);
   private router = inject(Router);
   characterService = inject(CharacterServiceService);

  constructor(){
    const id = this.route.snapshot.params['idPersonagem'];
    if (id > 0) {
      this.findByid(id);
    } else {
      this.router.navigate([`/dashboard/personagens`]);
    }
  }

  findByid(id: number){
    this.characterService.getCharacterByid(id).subscribe({
      next:  character => {
        this.selectedCharacter = character;
      }
    })
  }

  exit(){
    this.router.navigate([`/dashboard/personagens`]);
  }
 
}
