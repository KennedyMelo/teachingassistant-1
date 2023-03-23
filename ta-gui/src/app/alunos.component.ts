import { Component, OnInit } from '@angular/core';
import { Aluno } from '../../../common/aluno';
import { AlunoService } from './aluno.service';

  @Component({
   selector: 'app-root',
   templateUrl: './alunos.component.html',
   styleUrls: ['./alunos.component.css']
 })
 export class AlunosComponent implements OnInit {

    aluno: Aluno = new Aluno();
    alunos: Aluno[] = [];
    cpfduplicado: boolean = false;
    githubDuplicado: boolean = false;
    constructor(private alunoService: AlunoService) {}

     criarAluno(a: Aluno): void {
       this.alunoService.criar(a)
              .subscribe(
                ar => {
                  if (ar) {
                    this.alunos.push(ar);
                    this.aluno = new Aluno();
                  } else {
                    this.cpfduplicado = true;
                    this.githubDuplicado = true;
                  } 
                },
                msg => { alert(msg.message); }
              );      
      } 
      deletarAluno(aluno: Aluno): void {
        this.alunoService.deletar(aluno).subscribe(
           (a) => { if (a == null) alert("Unexpected fatal error trying to delete student! Please contact the systems administratos."); },
           (msg) => { alert(msg.message); }
        );
        this.ngOnInit();
      }
       
    onMove(): void {
       this.cpfduplicado = false;
       this.githubDuplicado = false;
    }

     ngOnInit(): void {
       this.alunoService.getAlunos()
             .subscribe(
               as => { this.alunos = as; },
               msg => { alert(msg.message); }
              );
     }

  }