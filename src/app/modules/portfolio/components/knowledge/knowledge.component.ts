import { Component, signal } from '@angular/core';

// Interface
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss',
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/php.svg',
      alt: 'Ícone de conhecimento de php',
    },
    {
      src: 'assets/icons/knowledge/laravel.svg',
      alt: 'Ícone de conhecimento de laravel',
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Ícone de conhecimento de javascript',
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone de conhecimento de angular',
    },
    {
      src: 'assets/icons/knowledge/node.svg',
      alt: 'Ícone de conhecimento de nodejs',
    },
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Ícone de conhecimento de html5',
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Ícone de conhecimento de css3',
    },
    {
      src: 'assets/icons/knowledge/react.svg',
      alt: 'Ícone de conhecimento de react',
    },
    {
      src: 'assets/icons/knowledge/typescript.svg',
      alt: 'Ícone de conhecimento de typescript',
    },
    {
      src: 'assets/icons/knowledge/postgresql.svg',
      alt: 'Ícone de conhecimento de postgresql',
    },
    {
      src: 'assets/icons/knowledge/docker.svg',
      alt: 'Ícone de conhecimento de docker',
    },
    {
      src: 'assets/icons/knowledge/gitlab.svg',
      alt: 'Ícone de conhecimento de gitlab',
    },
    {
      src: 'assets/icons/knowledge/wordpress.svg',
      alt: 'Ícone de conhecimento de wordpress',
    },
    {
      src: 'assets/icons/knowledge/sonar.svg',
      alt: 'Ícone de conhecimento de maven',
    },
  ]);
}
