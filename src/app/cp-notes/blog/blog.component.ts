import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class CpBlogComponent{
  celtic_symmetry_statement = 
  `  After taking an Ancient Irish History class, Diarmuid has become interested 
  in finding geometric patterns in neolithic tomb locations around Ireland.  
  He carefully plots the locations of N tombs (2 <= N <= 1000), 
  each one occupying a distinct point in the 2D plane, and he wonders how many 
  different lines of symmetry exist for this set of points. 
  A line of symmetry, of course, is a line across which the points on both 
  sides are mirror images of each other.`
  formula_1 = `
          A' = 2(A ᵒ L)÷(L ᵒ L) - A
  `
  
}