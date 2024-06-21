import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonagensDetailsComponent } from './personagens-details.component';

describe('PersonagensDetailsComponent', () => {
  let component: PersonagensDetailsComponent;
  let fixture: ComponentFixture<PersonagensDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonagensDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonagensDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
