import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexBaseComponent } from './pokedex-base.component';

describe('PokedexBaseComponent', () => {
  let component: PokedexBaseComponent;
  let fixture: ComponentFixture<PokedexBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokedexBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
