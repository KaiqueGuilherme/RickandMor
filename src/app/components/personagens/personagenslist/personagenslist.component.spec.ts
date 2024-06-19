import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonagenslistComponent } from './personagenslist.component';

describe('PersonagenslistComponent', () => {
  let component: PersonagenslistComponent;
  let fixture: ComponentFixture<PersonagenslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonagenslistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonagenslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
