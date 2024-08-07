import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-api-data',
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class ApiDataComponent implements OnInit {
  joke: any = {};

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getNewJoke();
  }

  getNewJoke(): void {
    this.apiService.getRandomJoke().subscribe(data => {
      console.log('Joke data:', data);
      this.joke = data;
    });
  }
}



