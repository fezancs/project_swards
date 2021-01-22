import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FileUploadService } from '../services/fileupload.service';
import { UploadTransfer } from '../models/upload-transfer';
import { Subcategory } from '../models/subcategory';
import { SubcategoryService } from '../services/subcategory.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-createsubcategory',
  templateUrl: './createsubcategory.component.html',
  styleUrls: ['./createsubcategory.component.css']
})
export class CreatesubcategoryComponent implements OnInit {

  categoryForm: FormGroup;
  upload: UploadTransfer = new UploadTransfer();
  isActive: boolean;
  model: Subcategory;
  id:number;
  constructor(private route: ActivatedRoute,
    private router: Router, private fb: FormBuilder,private fileUploadService: FileUploadService,private subcategoryService: SubcategoryService,) { }

  ngOnInit(): void {
    this.createForm();
     
     // edit product
     this.id = +this.route.snapshot.paramMap.get('id');
     if(this.id) {
       console.log(this.id);
       this.getsubcategory();
     }
  
  }

  createForm() {
    this.categoryForm = this.fb.group({
      id :[''],
      parentid : [''],
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
      this.updatesubcategory();
    } else {
      this.addsubcategory();
    }
  }

  addsubcategory() {
    this.model = this.categoryForm.value;
    this.subcategoryService.addsubcategory(this.model).subscribe(
      result => {
        console.log(result);
        if ( ! result.error) {
          this.router.navigateByUrl('/managesubcategory');
        } else {
          alert('Some thingh went wrong!');
        }
      }
    )
  }

  getsubcategory() {
    this.subcategoryService.getsubcategory(this.id).subscribe(
      result => {
        console.log(result);
        this.categoryForm.patchValue(result.data)
      }
    )
  }

  updatesubcategory() {
    this.model = this.categoryForm.value;
    this.model.id = this.id;
    this.subcategoryService.updatesubcategory(this.model).subscribe(
      result => {
        console.log(result);
        if ( ! result.error) {
          alert('done!');
          this.router.navigateByUrl('/managesubcategory');
        } else {
          alert('Some thingh went wrong!');
        }
      }
    )
  }


}
