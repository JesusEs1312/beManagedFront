import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaCompletaComponent } from './vista-completa.component';

describe('VistaCompletaComponent', () => {
  let component: VistaCompletaComponent;
  let fixture: ComponentFixture<VistaCompletaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaCompletaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaCompletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
