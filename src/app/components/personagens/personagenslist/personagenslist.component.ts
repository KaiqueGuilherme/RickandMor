import { Component, OnInit, Output, inject } from '@angular/core';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CharacterServiceService } from '../../../service/Character/character-service.service';
import { Personagens } from '../../../models/personagem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PersonagensDetailsComponent } from '../personagens-details/personagens-details.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personagenslist',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule, FormsModule, PersonagensDetailsComponent],
  templateUrl: './personagenslist.component.html',
  styleUrl: './personagenslist.component.scss'
})
export class PersonagenslistComponent implements OnInit {
  // Array para armazenar os personagens carregados
  slides: Personagens[] = [];
  
  // Termo de busca para pesquisa de personagens
  searchTerm: string = '';
  
  // Página atual para paginação
  currentPage: number = 1;
  
  // Número total de páginas disponíveis
  totalPages: number = 1;
  
  // Array de números de páginas para exibição na UI
  totalPagesArray: number[] = [];
  
  // Número de páginas visíveis na navegação de paginação
  visiblePages: number = 3;
  
  // Indicador para mostrar mensagem de "nenhum resultado encontrado"
  showNoResultsMessage: boolean = false;

  // Injeção do serviço de personagens
  characterService = inject(CharacterServiceService);
  
  // Injeção do roteador
  router = inject(Router);

  constructor() { }

  ngOnInit(): void {
    // Carrega os personagens ao iniciar o componente
    this.loadCharacters(this.currentPage);
  }

  // Carrega os personagens da API com base na página fornecida
  loadCharacters(page: number): void {
    this.characterService.getCharacters(page).subscribe({
      next: (characters: any) => {
        this.slides = characters.results;
        this.totalPages = characters.info.pages;
        this.totalPagesArray = Array.from({ length: this.totalPages }, (_, i) => i + 1);
      },
      error: (error: any) => {
        console.error('Error loading characters: ', error);
      }
    });
  }

  // Seleciona um personagem e navega para a página de detalhes do personagem
  selectCharacter(character: any) {
    if (character !== null) {
      this.router.navigate([`/dashboard/personagem/${character.id}`]);
    } else {
      console.log("erro");
    }
  }

  // Altera a página atual e carrega os personagens da nova página
  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadCharacters(page);
    }
  }

  // Obtém as páginas visíveis para a navegação de paginação
  getVisiblePages(): number[] {
    const visiblePages: number[] = [];
    const totalPages = this.totalPages;
    const currentPage = this.currentPage;
    for (let i = currentPage - 1; i <= currentPage + 1 && i <= totalPages; i++) {
      if (i >= 1) {
        visiblePages.push(i);
      }
    }
    return visiblePages;
  }

  // Obtém a cor de status com base no status do personagem
  getStatusColor(status: string | undefined): string {
    switch (status) {
      case 'Alive':
        return 'rgb(56, 255, 42)';
      case 'Dead':
        return 'rgb(255, 0, 0)';
      default:
        return 'rgb(128, 128, 128)';
    }
  }
  
  // Realiza a busca de personagens com base no termo de busca
  search(): void {
    if (this.searchTerm.trim() !== '') {
      this.characterService.getCharactersSearch(this.searchTerm).subscribe({
        next: (characters: any) => {
          this.slides = characters.results;
          // Atualiza a exibição de personagens com os resultados da busca
          this.showNoResultsMessage = characters.results.length === 0;
        },
        error: (error: any) => {
          console.error('Error loading characters: ', error);
        }
      });
    } else {
      this.loadCharacters(this.currentPage); // Recarrega a lista de personagens se o campo de busca estiver vazio
      this.showNoResultsMessage = false;
    }
  }

}
