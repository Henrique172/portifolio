import { Component, signal } from '@angular/core';

// Interface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Fullstack Developer Master',
        p: 'TTY | Mar 2023 - Atual',
      },
      text: '<p>Desde Março de 2023, atuo como Desenvolvedor FullStack Master no tribunal regional da primeira região trf1, utilizando PHP, Laravel, Javascript, TypeScript, Angular 7+, Ionic, Material Design, HTML5, CSS3, NodeJs e PostgreSQL.</p>' +
      '<p>Além disso, minha experiência abrange a integração entre APIs, Docker, GitLab, DevOps utilizando Maven e Jenkins, Elastic, Testes unitários, SonarQube, Redmine e Scrum. Atualmente, enfrento o desafio de finalizar um sistema já em andamento para ser publicado em produção.</p>' +
      '<p>Participei ativamente de projetos utilizando o framework Ionic, criando soluções móveis híbridas para atender às necessidades dos usuários de maneira eficiente e escalável.</p>' +
      '<p>Destaco também a utilização de testes unitários no front-end e back-end, seguindo os padrões de qualidade de código do SonarQube. Minha atuação como DevOps inclui a automação de builds e deploys, utilizando Maven e Jenkins para garantir um processo contínuo de integração e entrega, otimizando a performance e estabilidade dos sistemas desenvolvidos.</p>',

    },
    {
      summary: {
        strong: 'Desenvolvedor Full Stack Freelance',
        p: 'MS Suporte Técnico e Manutenção em Tecnologia da Informação Ltda',
      },
      text: '<p>De Janeiro a Novembro de 2024, atuei como Desenvolvedor Full Stack Freelance na MS Suporte Técnico e Manutenção em Tecnologia da Informação Ltda, onde desenvolvi aplicações web utilizando tecnologias como PHP (com frameworks Symfony e Laravel), JavaScript, TypeScript, Angular, React, além de frameworks próprios. Durante esse período, minha atuação foi focada em criar soluções inovadoras e eficientes para atender às necessidades dos clientes.</p>' +
      '<p>Minha experiência abrangeu a implementação de soluções de alto desempenho, com foco em segurança, escalabilidade e manutenção, tanto em aplicações front-end quanto back-end. Além disso, desempenhei um papel ativo em projetos DevOps, utilizando ferramentas como Docker, Jenkins e Kubernetes para automação de builds e deployments, otimizando fluxos de trabalho e garantindo a continuidade das entregas com alta qualidade.</p>' +
      '<p>Realizei testes unitários utilizando Jasmine e PHPUnit, assegurando a qualidade do código e a integridade dos sistemas. No gerenciamento de dados, trabalhei com bancos de dados relacionais (PostgreSQL, MySQL) e não relacionais (Elasticache), garantindo a integridade e o desempenho das soluções implementadas.</p>' +
      '<p>Durante esse período, colaborei diretamente com a Secretaria das Cidades e a Secretaria de Saúde do Paraná, desenvolvendo soluções integradas e contribuindo na modernização de sistemas, sempre com foco em eficiência, segurança e alta performance.</p>',
  },



    {
      summary: {
        strong: 'Fullstack Developer Sênior',
        p: 'Websis | Mar 2022 - Fev 2023',
      },
      text: '<p>De Março de 2022 a Fevereiro de 2023, atuei como Desenvolvedor FullStack Sênior na Prefeitura de Belo Horizonte, utilizando tecnologias como PHP, Laravel, React, PostgreSQL, SonarQube, além de práticas de DevOps com Jenkins. Durante esse período, fui responsável pelo desenvolvimento de soluções de front-end com React, integrando-as ao back-end em Laravel para criar sistemas eficientes e escaláveis.</p>' +
      '<p>Minha atuação incluiu a criação e modelagem de bancos de dados, com a criação de DDL e DML, como a criação de tabelas e estruturas no PostgreSQL, além da implementação de modelos de dados adequados aos sistemas corporativos da Prefeitura.</p>' +
      '<p>Além disso, atuei como DevOps, utilizando Jenkins para automação de pipelines de integração e entrega contínua, garantindo um fluxo de trabalho eficiente e a entrega rápida de novas funcionalidades. Também contribui para a adoção de boas práticas de desenvolvimento e manutenção de código com a integração do SonarQube, garantindo a qualidade do código-fonte. Participei ativamente de processos de otimização de sistemas e integração com APIs RESTful, sempre utilizando metodologias ágeis para garantir entregas eficientes e no prazo.</p>',

    },
    {
      summary: {
        strong: 'Fullstack Developer Júnior a Pleno',
        p: 'Exército Brasileiro | Mar 2016 - Fev 2022',
      },
      text: '<p>De Março de 2016 a Fevereiro de 2022, atuei como Desenvolvedor Full Stack no Exército Brasileiro, iniciando minha carreira como Júnior e evoluindo para o cargo de Pleno. Durante esse período, fui responsável pelo desenvolvimento e manutenção de aplicações web críticas para a instituição, utilizando tecnologias como PHP, JavaScript, TypeScript, além de frameworks como Laravel, Zend 2 e CakePHP. Contribuí para a criação de sistemas robustos, eficientes e seguros, essenciais para as operações internas do Exército.</p>' +
        '<p>Minha experiência abrangeu o desenvolvimento de soluções utilizando Joomla e WordPress, com foco na otimização de processos internos e criação de plataformas intuitivas e de fácil manutenção. Além disso, trabalhei com bancos de dados Oracle e PL/SQL, implementando soluções de alta disponibilidade e integridade, fundamentais para o bom funcionamento das operações do Exército.</p>' +
        '<p>Fui também ativo em treinamentos com a plataforma OutSystems, onde iniciei a criação de projetos utilizando a abordagem low-code. Esse aprendizado me permitiu desenvolver uma visão estratégica sobre o desenvolvimento ágil, otimizando a entrega de soluções empresariais de alta qualidade, alinhadas às necessidades da instituição, sempre com foco em robustez, escalabilidade e segurança.</p>' +
        '<p>Ao longo dessa trajetória, fui responsável pela implementação de melhorias contínuas nos sistemas existentes, trabalhando em estreita colaboração com equipes multidisciplinares para garantir que os sistemas atendiam aos requisitos operacionais do Exército e estavam em conformidade com as práticas de segurança mais rigorosas.</p>',
    }

    // {
    //   summary: {
    //     strong: 'Desenvolvedor Fullstack Júnior',
    //     p: 'P21 Sistemas | Feb 2020 - Mar 2022',
    //   },
    //   text: '<p>Em minha jornada na P21 Sistemas, tive a oportunidade de conhecer realmente o mundo do desenvolvimento de software, seguindo padrões e metodologias de mercado.</p> <p>Iniciei minha jornada na P21 Sistemas, como Desenvolvedor FullStack Júnior, onde pude aprender com ótimos profissionais, que me ajudaram a desenvolver pessoalmente e profissionalmente.</p> <p>Durante minha jornada, atuei em um projeto com framework PHP próprio e com as seguintes tecnologias/metodologias: PHP, Javascript, jQuery, Html5, Css3, Bootstrap, Jira, AWS, Docker, Git, GitHub, PHPStorm, MySQL, Linux, Kanban e OKR.</p><p>Durante o meu período na P21, tive a oportunidade de trabalhar em melhorias na plataforma, como também atuar no suporte, atendendo chamados e gerando relatórios, e com a equipe trabalhamos para diminuir os custos dos sistemas, assim que se prolongou a pandemia.</p>',
    // },
    // {
    //   summary: {
    //     strong: 'Programador',
    //     p: 'Ibs Tecnologia Web |  Mar 2018 - Out 2019',
    //   },
    //   text: '<p>Minha jornada na empresa Ibs Tecnologia Web foi um pontapé inicial para o mundo do desenvolvimento web.</p> <p>Foi um período de aprendizado intenso no desenvolvimento web, abrangendo a criação de sites web.</p> <p>Durante meu período na IBS, trabalhei com as seguintes tecnologias: Joomla, WordPress, PHP, JavaScript, Html, Css, jQuery, JSON, Ajax e SQL.</p> <p>Também pude contribuir na criação de componentes/módulos utilizando Joomla, banners e publicação de aplicativos na play store.</p>',
    // },
  ]);
}
