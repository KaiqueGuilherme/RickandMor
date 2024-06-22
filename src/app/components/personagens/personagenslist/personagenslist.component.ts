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

  slides: Personagens[] = [];
  searchTerm: string = '';
  currentPage: number = 1;
  totalPages: number = 1;
  totalPagesArray: number[] = [];
  visiblePages: number = 3;
  showNoResultsMessage: boolean = false;

  characterService = inject(CharacterServiceService);
  router = inject(Router);

  constructor() { }

  ngOnInit(): void {
    this.loadCharacters(this.currentPage);
  }

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

  selectCharacter(character: any) {
    if (character !== null) {
      this.router.navigate([`/dashboard/personagem/${character.id}`]);
    } else {
      console.log("erro");
    }
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadCharacters(page);
    }
  }

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

  search(): void {
    if (this.searchTerm.trim() !== '') {
      this.characterService.getCharactersSearch(this.searchTerm).subscribe({
        next: (characters: any) => {
          this.slides = characters.results;

          
        },
        error: (error: any) => {
          console.error('Error loading characters: ', error);
        }
      });
    } else {
     
    }
  }
}
