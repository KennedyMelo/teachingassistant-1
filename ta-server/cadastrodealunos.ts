import { Aluno } from '../common/aluno';

export class CadastroDeAlunos {
   alunos: Aluno[] = [];

    cadastrar(aluno: Aluno): Aluno {
     var result = null;
     if (this.cpfNaoCadastrado(aluno.cpf) && this.githubNaoCadastrado(aluno.cpf)) {
       result = new Aluno();
       result.copyFrom(aluno);
       this.alunos.push(result);
     }
     return result;
   }

    cpfNaoCadastrado(cpf: string): boolean {
      return !this.alunos.find(a => a.cpf == cpf);
   }
    githubNaoCadastrado(github: string): boolean{
      return !this.alunos.find(a => a.github ==github);
   }
    deletar(cpf: string): boolean {
      if(!this.cpfNaoCadastrado(cpf)){
        let index = -1;
        for (let i =0; i< this.alunos.length; i++){
          if(this.alunos[i].cpf === cpf){
            index = i; break;
          }
        }
        this.alunos.splice(index,1);
        return true;
      }
      return false;
    }
    atualizar(aluno: Aluno): Aluno {
     var result: Aluno = this.alunos.find(a => a.cpf == aluno.cpf);
     if (result) result.copyFrom(aluno);
     return result;
   }

    getAlunos(): Aluno[] {
     return this.alunos;
   }
}