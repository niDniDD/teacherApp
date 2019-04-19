import { Component, OnInit, Input } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  @Input() data:any

  Status=[{name:'สถานะ :'},{name:'ชื่อ :'},{name:'นามสกุล :'},{name:'ที่อยู่ :'},{name:'เลขบัตรประชาชน :'},{name:'เชื้อชาติ :'},{name:'ศาสนา :'},{name:'กรุ๊ปเลือด :'},{name:'ที่อยู่ :'}]

  constructor(
    public route: NavController,
    public act: ActivatedRoute,
    public modalcontoroller: ModalController 
  ) { }

  ngOnInit() {
  }
  back() {
    this.modalcontoroller.dismiss() 
  }
}
