import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.scss']
})
export class RodapeComponent implements OnInit {

  listaLinks = [
    {
      descricao: 'Sobre nós',
      links: [
        {nome: 'Perfil', url: '#'},
        {nome: 'Sobre', url: '#'},
        {nome: 'Contato', url: '#'}
      ]
    },
    {
      descricao: 'Redes Sociais',
      links: [
        {nome: 'Twitter', url: '#'},
        {nome: 'Instagram', url: '#'},
        {nome: 'Linkedin', url: '#'}
      ]
    },
    {
      descricao: 'Contato',
      links: [
        {nome: 'FAC', url: '#'},
        {nome: 'Sitemap', url: '#'},
        {nome: 'Dúvidas', url: '#'}
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
