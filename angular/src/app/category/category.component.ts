import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { CategoryService } from './category.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  category = {} as Category;
  categories: Category[] = [];

  constructor(private _categoryService: CategoryService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this._categoryService.getCategories().subscribe(data => {
      console.log(data);
      this.categories = data.data;
    });
  }

  saveCategory(form: NgForm) {
    if (this.category.id !== undefined) {
      this._categoryService.updateCategory(this.category).subscribe(() => {
        this.clearForm(form);
      });
    } else {
      this._categoryService.saveCategory(this.category).subscribe(() => {
        this.clearForm(form);
      });
    }
  }

  deleteCategory(category: Category) {
    this._categoryService.deleteCategory(category).subscribe(() => {
      this.getCategories();
    })
  }

  editCategory(category: Category) {
    this.category = {...category};
  }

  clearForm(form: NgForm) {
    this.getCategories();
    form.resetForm();
    this.category = {} as Category;
  }
}
