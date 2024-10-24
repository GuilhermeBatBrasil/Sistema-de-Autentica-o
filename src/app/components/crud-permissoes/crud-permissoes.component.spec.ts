import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudPermissoesComponent } from './crud-permissoes.component';

describe('CrudPermissoesComponent', () => {
  let component: CrudPermissoesComponent;
  let fixture: ComponentFixture<CrudPermissoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudPermissoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudPermissoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
