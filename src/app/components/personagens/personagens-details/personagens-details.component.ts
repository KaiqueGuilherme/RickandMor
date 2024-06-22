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
 // Armazena o personagem selecionado
 selectedCharacter: Personagens | undefined;

 // Injeções de dependências
 private route = inject(ActivatedRoute);
 private router = inject(Router);
 characterService = inject(CharacterServiceService);

 constructor() {
   // Obtém o ID do personagem a partir dos parâmetros da rota
   const id = this.route.snapshot.params['idPersonagem'];
   if (id > 0) {
     // Busca o personagem pelo ID se o ID for válido
     this.findById(id);
   } else {
     // Navega para a lista de personagens se o ID não for válido
     this.router.navigate(['/dashboard/personagens']);
   }
 }

 ngOnInit(): void {
   // Método para ser executado quando o componente for inicializado
 }

 // Busca o personagem pelo ID
 findById(id: number): void {
   this.characterService.getCharacterById(id).subscribe({
     // Callback de sucesso
     next: character => {
       this.selectedCharacter = character;
     },
     // Callback de erro
     error: (error: any) => {
       console.error('Error loading character: ', error);
       this.router.navigate(['/dashboard/personagens']);
     }
   });
 }

 // Navega para a lista de personagens
 exit(): void {
   this.router.navigate(['/dashboard/personagens']);
 }
}
