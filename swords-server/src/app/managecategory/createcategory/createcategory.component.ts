import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FileUploadService } from '../services/file-upload.service';
import { UploadTransfer } from '../models/upload-transfer';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-createcategory',
  templateUrl: './createcategory.component.html',
  styleUrls: ['./createcategory.component.css']
})
export class CreatecategoryComponent implements OnInit {

  categoryForm: FormGroup;
  upload: UploadTransfer = new UploadTransfer();
  isActive: boolean;
  model: Category;
  id:number;
  constructor(private route: ActivatedRoute,
    private router: Router, private fb: FormBuilder,private fileUploadService: FileUploadService,private categoryService: CategoryService,) { }

  ngOnInit(): void {
    this.createForm();
     
     // edit product
     this.id = +this.route.snapshot.paramMap.get('id');
     if(this.id) {
       console.log(this.id);
       this.getcategory();
     }
  
  }

  createForm() {
    this.categoryForm = this.fb.group({
      id :[''],
      name : ['', Validators. required],   
      createdat : [''],
      isactive :[''],   
      description :[''],
      imagepath :[''],   
      metakeywords :[''],
      metadescription :[''],
     })
  }

  onDragOver(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.isActive = true;
    console.log('Drag over');
  }

  onDragLeave(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.isActive = false;
    console.log('Drag leave');
  }

  onDrop(event: any) {
    console.log('on drop');
    event.preventDefault();
    event.stopPropagation();
    let droppedFiles = event.dataTransfer.files;
    if(droppedFiles.length > 0) {
      this.onDroppedFile(droppedFiles)
    }
    this.isActive = false;
  }

  onDroppedFile(droppedFiles: any) {
    console.log('on Drag ');
    let formData = new FormData();
    for(let item of droppedFiles) {
      formData.append('userfiles', item);
    }
    console.log(droppedFiles[0].name);
    var b="http://localhost:3000/images/"+droppedFiles[0].name;
    console.log(b);
    this.categoryForm.get('imagepath').setValue(b);
    console.log(this.categoryForm);
    
    this.fileUploadService.fileUpload(formData).subscribe(
      result => {
        this.upload = result;
      }
    )
    console.log(this.categoryForm);
    
  }

  onSelectedFile(event: any) {
    if (event.target.files.length > 0) {
      this.onDroppedFile(event.target.files);
    }
  }

  onSubmit() {
    this.model = this.categoryForm.value;
    console.log(this.model);
    if (this.id) {
      this.updatecategory();
    } else {
      this.addcategory();
    }
  }

  addcategory() {
    this.model = this.categoryForm.value;
    this.categoryService.addcategory(this.model).subscribe(
      result => {
        console.log(result);
        if ( ! result.error) {
          this.router.navigateByUrl('/managecategory');
        } else {
          alert('Some thingh went wrong!');
        }
      }
    )
  }

  getcategory() {
    this.categoryService.getcategory(this.id).subscribe(
      result => {
        console.log(result);
        this.categoryForm.patchValue(result.data)
      }
    )
  }

  updatecategory() {
    this.model = this.categoryForm.value;
    this.model.id = this.id;
    this.categoryService.updatecategory(this.model).subscribe(
      result => {
        console.log(result);
        if ( ! result.error) {
          alert('done!');
          this.router.navigateByUrl('/managecategory');
        } else {
          alert('Some thingh went wrong!');
        }
      }
    )
  }

}
