import { Component, Input, Output } from '@angular/core';
import { Personagens } from '../../../models/personagem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personagens-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personagens-details.component.html',
  styleUrl: './personagens-details.component.scss'
})
export class PersonagensDetailsComponent {
  @Input() selectedCharacter: Personagens | undefined;

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
}
