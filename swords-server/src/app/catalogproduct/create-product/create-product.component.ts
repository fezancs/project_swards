import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadTransfer } from '../models/upload-transfer';
import { FileUploadService } from '../services/file-upload.service';
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  
  thumbnail: UploadTransfer = new UploadTransfer();
  upload1: UploadTransfer = new UploadTransfer();
  upload2: UploadTransfer = new UploadTransfer();
  upload3: UploadTransfer = new UploadTransfer();
  upload4: UploadTransfer = new UploadTransfer();
  upload5: UploadTransfer = new UploadTransfer();
  isActive: boolean;
  insertproductForm: FormGroup;
  model: Product;
  title: string;
  sku: string;

  constructor(  private fb: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private fileUploadService: FileUploadService){}

  ngOnInit(): void {

   
    this.createForm();

    // edit product
    this.sku = this.route.snapshot.paramMap.get('sku');
    if(this.sku) {
      this.getProduct();
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
    this.insertproductForm = this.fb.group({
     _store:['swordskingdom'], 
     _product_websites:['swordskingdom'],
     name: ['', Validators. required],
     description: ['', Validators. required],
     short_description: ['', Validators. required],
     sku: ['', Validators. required],
     weight: [''],
     news_from_date:[''],
     news_to_date:[''],
     status:[''],
     visibility:[''],
     country_of_manufacture:[''],
     featured:[''],
     product_page_type:[''],
     pagesize:[''],
     custom_block:[''],
     custom_block_2:[''],
     url_key:[''],
     url_path:[''],
     price: ['', Validators. required],
     special_price: [''],
     special_to_date:[''],
     special_from_date:[''], 
     actualprice:[''],
     retailprice:[''],
     tax_class_id:[''], 
     meta_title: [''],
     meta_keyword: [''],
     meta_description: [''],
     gift_message_available: [''],
     image1:[''],
     image2:[''],
     image3:[''],
     image4:[''],
     image5:[''],
     thumbnail_label:['', Validators. required],
     thumbnail:[''],
     })
  }
  onSubmit() {
    this.model = this.insertproductForm.value;
    if (this.sku) {
      this.updateProduct();
    } else {
      this.addProduct();
    }
  }

  addProduct() {
    this.model = this.insertproductForm.value;
    this.productService.addProduct(this.model).subscribe(
      result => {
        console.log(result);
        if ( ! result.error) {
          this.router.navigateByUrl('/catalogproduct');
        } else {
          alert('Some thingh went wrong!');
        }
      }
    )
  }

  updateProduct() {
    this.model = this.insertproductForm.value;
    this.model.sku = this.sku;
    this.productService.updateProduct(this.model).subscribe(
      result => {
        console.log(result);
        if ( ! result.error) {
          this.router.navigateByUrl('/catalogproduct');
        } else {
          alert('Some thingh went wrong!');
        }
      }
    )
  }

  getProduct() {
    this.productService.getProduct(this.sku).subscribe(
      result => {
        console.log(result);
        this.insertproductForm.patchValue(result.data)
      }
    )
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
    console.log(event.targetId);
    console.log('on drop');
    event.preventDefault();
    event.stopPropagation();
    let droppedFiles = event.dataTransfer.files;
    if(droppedFiles.length > 0) {
      this.onDroppedFile(droppedFiles , event)
    }
    this.isActive = false;
  }

  onDroppedFile(droppedFiles: any ,event :any) {
    
    let formData = new FormData();
    for(let item of droppedFiles) {
      formData.append('userfiles', item);
    }
    console.log(droppedFiles[0].name);
    console.log(event.currentTarget.id);
    var b="http://localhost:3000/images/"+droppedFiles[0].name;
    console.log(b);
    if(event.currentTarget.id=="thumbnail")
    {
      this.insertproductForm.get('thumbnail').setValue(b);
      console.log("thumbnail");
      this.fileUploadService.fileUpload(formData).subscribe(
        result => {
          this.thumbnail = result;
          console.log(this.thumbnail);
        }
      )
    }
    if(event.currentTarget.id=="image1")
    {
      this.insertproductForm.get('image1').setValue(b);
      console.log("image1");
      this.fileUploadService.fileUpload(formData).subscribe(
        result => {
          this.upload1 = result;
        }
      )
    }
    if(event.currentTarget.id=="image2")
    {
      this.insertproductForm.get('image2').setValue(b);
      console.log("image2");
      this.fileUploadService.fileUpload(formData).subscribe(
        result => {
          this.upload2 = result;
        }
      )
    }
    if(event.currentTarget.id=="image3")
    {
      this.insertproductForm.get('image3').setValue(b);
      console.log("image3");
      this.fileUploadService.fileUpload(formData).subscribe(
        result => {
          this.upload3 = result;
        }
      )
    }
    if(event.currentTarget.id=="image4")
    {
      this.insertproductForm.get('image4').setValue(b);
      console.log("image4");
      this.fileUploadService.fileUpload(formData).subscribe(
        result => {
          this.upload4 = result;
        }
      )
    }
    if(event.currentTarget.id=="image5")
    {
      this.insertproductForm.get('image5').setValue(b);
      console.log("image5");
      this.fileUploadService.fileUpload(formData).subscribe(
        result => {
          this.upload5 = result;
        }
      )
    }
    
    
    
  //  var b="http://localhost:3000/images/"+droppedFiles[0].name;
  //  console.log(b);
   // this.blogForm.get('image_path').setValue(b);
   // console.log(this.insertproductForm);
    
    /*this.fileUploadService.fileUpload(formData).subscribe(
      result => {
        this.upload = result;

      }
    )*/
    
  }

  onSelectedFile(event: any) {
    if (event.target.files.length > 0) {
      this.onDroppedFile(event.target.files ,event);
    }
  }

}
