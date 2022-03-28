import { Component, OnInit } from '@angular/core';
import { ConfirmationService, Message, MessageService } from 'primeng/api';
import { Author } from 'src/app/models/author/author.module';
import { AuthorService } from 'src/app/services/author.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ConfirmationService,MessageService]
})
export class HomeComponent implements OnInit {
  authors:Author[]=[];
  constructor(private author:AuthorService,
    private confirmationService:ConfirmationService,
    private messageService: MessageService, ) { }

  ngOnInit(): void {
     this.getAll();
  }
  getAll(){
    this.author.getList().subscribe(res => {
      this.authors=res;
    })
  }

  confirm2(id:number) {
    this.confirmationService.confirm({
        message: 'Bạn có muốn xóa bản ghi này không?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        accept: () => {
          this.author.Delete(id).subscribe(res=>{
            this.getAll();
          })
          this.messageService.add({severity:'success', summary: 'Success', detail: 'Xóa thành công'});
        },
        reject: () => {
          this.messageService.add({severity:'error', summary: 'Success', detail: 'Hủy thành công'});
        }
    });
}
}
