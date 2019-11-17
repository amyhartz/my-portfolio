import { Component } from '@angular/core';
import {Technology} from "./Technology";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  techList: Technology[] = [
    {
      imageName: 'angular.svg',
      title: 'Angular',
      href: 'https://angular.io/',
      altText: 'angular'
    },
    {
      imageName: 'bootstrap.png',
      title: 'Bootstrap',
      href: 'https://getbootstrap.com/',
      altText: 'bootstrap'
    },
    {
      imageName: 'spring-boot-logo.png',
      title: 'Spring Boot',
      href: 'https://projects.spring.io/spring-boot/',
      altText: 'spring-boot'
    },
    {
      imageName: 'javascript_logo.png',
      title: 'JavaScript',
      href: 'https://www.javascript.com/',
      altText: 'javascript'
    },
    {
      imageName: 'typescript.png',
      title: 'TypeScript',
      href: 'https://www.typescriptlang.org/',
      altText: 'typescript'
    },
    {
      imageName: 'sass.png',
      title: 'Sass',
      href: 'https://sass-lang.com/',
      altText: 'sass'
    },
    {
      imageName: 'karma.png',
      title: 'Karma',
      href: 'https://karma-runner.github.io/2.0/index.html',
      altText: 'karma'
    },
    {
      imageName: 'jasmine.png',
      title: 'Jasmine',
      href: 'https://jasmine.github.io/',
      altText: 'jasmine'
    },
    {
      imageName: 'webpack.svg',
      title: 'Webpack',
      href: 'https://webpack.js.org/',
      altText: 'Webpack'
    },
    {
      imageName: 'npm.png',
      title: 'npm',
      href: 'https://www.npmjs.com/',
      altText: 'npm'
    },
    {
      imageName: 'grunt.svg',
      title: 'Grunt',
      href: 'https://gruntjs.com/',
      altText: 'grunt'
    },
    {
      imageName: 'groovy.png',
      title: 'Groovy',
      href: 'http://groovy-lang.org/',
      altText: 'groovy'
    },
    {
      imageName: 'angularjs.png',
      title: 'AngularJs',
      href: 'https://angularjs.org/',
      altText: 'AngularJs'
    },
    {
      imageName: 'mysql.png',
      title: 'MySQL',
      href: 'https://www.mysql.com/',
      altText: 'MySQL'
    },
    {
      imageName: 'aws.png',
      title: 'AWS',
      href: 'https://aws.amazon.com/',
      altText: 'aws'
    },
    {
      imageName: 'java.png',
      title: 'Java',
      href: 'http://www.oracle.com/technetwork/java/index-138747.html',
      altText: 'Java'
    },
    {
      imageName: 'android.png',
      title: 'Android',
      href: 'https://developer.android.com/guide/index.html',
      altText: 'Android'
    },
    {
      imageName: 'IntelliJ.png',
      title: 'IntelliJ',
      href: '"https://www.jetbrains.com/idea/',
      altText: 'IntelliJ'
    },
    {
      imageName: 'git.png',
      title: 'Git',
      href: 'https://git-scm.com/',
      altText: 'Git'
    },
    {
      imageName: 'github.png',
      title: 'GitHub',
      href: 'https://github.com/',
      altText: 'GitHub'
    },
    {
      imageName: 'gitlab.jpg',
      title: 'GitLab',
      href: 'https://about.gitlab.com/',
      altText: 'GitLab'
    },
    {
      imageName: 'docker.png',
      title: 'Docker',
      href: 'https://www.docker.com/',
      altText: 'Docker'
    },
    {
      imageName: 'scala.png',
      title: 'Scala',
      href: 'https://www.scala-lang.org/',
      altText: 'Scala'
    },
    {
      imageName: 'akka.png',
      title: 'Akka',
      href: 'https://akka.io/',
      altText: 'Akka'
    },
    {
      imageName: 'ansible.png',
      title: 'Ansible',
      href: 'https://www.ansible.com/',
      altText: 'Ansible'
    },
    {
      imageName: 'terraform.png',
      title: 'Terraform',
      href: 'https://www.terraform.io/',
      altText: 'Terraform'
    },
    {
      imageName: 'elasticsearch.png',
      title: 'Elasticsearch',
      href: 'https://www.elastic.co/',
      altText: 'Elasticsearch'
    }
  ];
}
