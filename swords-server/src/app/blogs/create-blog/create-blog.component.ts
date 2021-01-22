import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Blogs } from '../models/blogs';
import { BlogsService } from '../services/blogs.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FileUploadService } from '../services/file-upload.service';
import { UploadTransfer } from '../models/upload-transfer';
@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {

  upload: UploadTransfer = new UploadTransfer();
  isActive: boolean;
  model:Blogs;
  blogForm: FormGroup;
  id:number;
  submitted =false;
  constructor(private fb: FormBuilder,
    private blogsService: BlogsService,
    private route: ActivatedRoute,
    private router: Router,
    private fileUploadService: FileUploadService) { }

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
      this.blogForm.get('image_path').setValue(b);
      console.log(this.blogForm);
      
      this.fileUploadService.fileUpload(formData).subscribe(
        result => {
          this.upload = result;
        }
      )
      
    }
  
    onSelectedFile(event: any) {
      if (event.target.files.length > 0) {
        this.onDroppedFile(event.target.files);
      }
    }






  ngOnInit(): void {

    this.createForm();

    this.id = +this.route.snapshot.paramMap.get('id');
    if(this.id) {
      this.getBlog();
    }

    $(document).ready(function(){
	
      $('#maps li').click(function(){
        var tab_id = $(this).attr('data-tab');
    
        $('#maps li').removeClass('current');
        $('.tab-content').removeClass('current');
    
        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
      })
    
    })

  }

  createForm() {
    this.blogForm = this.fb.group({
     title: ['', Validators. required],
     sub_title : ['', Validators. required],   
     created_at : [''],
     identifier : ['', Validators. required],
     category : ['', Validators. required],
     status : [''],
     enable_comments : [''],
     tags : [''],
     image_path : [''],   
     content : [''],
     short_content : [''],
      meta_keywords : [''],
      meta_description : [''],
      poster : [''], 
     })
  }
  get f() { return this.blogForm.controls; }

  onSubmit1(event) {
    console.log("hi");
    this.submitted=true;
    if (this.blogForm.invalid) {
      return;
    }

    if (this.id) {
      this.updateProduct();
    } else {
      this.addProduct();
    }

    event.preventDefault();
    this.submitted=false;
  }

  addProduct() {
    this.model=this.blogForm.value;
    console.log(this.model);
    this.blogsService.addBlog(this.model).subscribe(
      result => {
        console.log(result);
        if ( ! result.error) {
          this.router.navigateByUrl('/blogs');
        } else {
          alert('Some thingh went wrong!');
        }
      }
    )
  }

  updateProduct() {
    this.model = this.blogForm.value;
    this.model.id = this.id;
    this.blogsService.updateBlog(this.model).subscribe(
      result => {
        console.log(result);
        if ( ! result.error) {
          this.router.navigateByUrl('/blogs');
        } else {
          alert('Some thingh went wrong!');
        }
      }
    )
  }

  getBlog() {
    this.blogsService.getBlog(this.id).subscribe(
      result => {
        console.log(result);
        this.blogForm.patchValue(result)
      }
    )
  }

  

}
