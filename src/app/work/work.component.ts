import { Component, OnInit } from '@angular/core';
import { Work } from './IWork'

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  public get WorkList(): Work[] {
    console.log("test : ", this.workList);
    return this.workList;
  }
  private workList: Work[] = []

  ngOnInit(): void {
    let portfolio: Work = {
      name: 'Website portfolio',
      iconPath: '/assets/Icons/resume.svg',
      shortDesc: 'I created this portfolio website from scratch using Angular framework.',
      moreDesc: 'All the code is publish on a public github repository. I\'m using netlify for link the github repo and automatically host/deploy the application on the web.',
      tag: ['#HTML', '#CSS', '#Angular', '#Typescript', '#Git'],
      link: 'https://github.com/paulcalimache/portfolio'
    }
    let schoolWebApp: Work = {
      name: '[School] Web application',
      iconPath: 'https://www.svgrepo.com/show/40567/web-interface.svg',
      shortDesc: 'Realization of an internship research platform for student.',
      tag: ['#HTML', '#CSS', '#Javascript', '#Php']
    };
    let schoolCSharpApp: Work = {
      name: '[School] Desktop application',
      iconPath: 'https://www.svgrepo.com/show/339776/application-web.svg',
      shortDesc: 'Realization of a file management application.',
      moreDesc: 'Desktop application created in C# with the microsoft framework .NET and WPF (Windows Presentation Foundation) to made the graphical interface.'
      + 'This project allowed to put into practice object-oriented programming and implement an application with the Model View Controller pattern.',
      tag: ['#.NET', '#C#', '#OOP', '#MVC'],
      link: 'https://github.com/malmax0/-EasySave/'
    };
    let schoolDB: Work = {
      name: '[School] Database project',
      iconPath: 'https://www.svgrepo.com/show/36341/database.svg',
      shortDesc: 'Creation & management of a MySQL database',
      tag: ['#MySQL', '#ER Diagrams'],
    };
    this.workList.push(portfolio, schoolCSharpApp, schoolWebApp, schoolDB);
  }

}