import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit{
  nome = new FormControl('', [Validators.required]);
  senha = new FormControl('', [Validators.required]);
  larguraJanela: number ;

  constructor(private router:Router, private authService : AuthService) {
    this.larguraJanela = 720;
  }

  ngOnInit(): void {
    this.larguraJanela = window.innerWidth;
    window.addEventListener('resize', this.verificarLarguraJanela.bind(this));
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.verificarLarguraJanela.bind(this));
  }

  verificarLarguraJanela(): void {
    this.larguraJanela = window.innerWidth;
  }

  getErrorMessage() {
    if(this.nome.hasError('required') || this.senha.hasError('required')){
      return 'Este campo é obrigatorio';
    }

    return
  }

  login() {
    if(this.nome.value && this.senha.value) {
      this.router.navigate(['/app-inspections'])
      this.authService.login(this.nome.value, this.senha.value)
    }
   
  }
}