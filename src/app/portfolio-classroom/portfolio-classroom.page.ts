import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ActionSheetController } from '@ionic/angular';
import { StudentService } from '../services/student.service';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import * as firebase from 'firebase';

@Component({
  selector: 'app-portfolio-classroom',
  templateUrl: './portfolio-classroom.page.html',
  styleUrls: ['./portfolio-classroom.page.scss'],
})
export class PortfolioClassroomPage implements OnInit {
  image: any;
  data: any
  dataclass: any
  dataclassSchool: any;
  datasuccess = false;
  date: any;
  constructor(
    public act: ActivatedRoute,
    public route: NavController,
    public actionSheetController: ActionSheetController,
    public studentService: StudentService,
    private imagePicker: ImagePicker,
    private camera: Camera
  ) { }


  ngOnInit() {
    let res: any = this.act.snapshot.paramMap.get('dataClassroom');
    this.dataclass = JSON.parse(res)
    console.log(this.dataclass);
    this.getData()
    this.data = new Date;
  }

  goBack() {
    this.route.navigateBack('/classroom');
  }

  async presentActionSheet(item) {
    console.log(item);
    const actionSheet = await this.actionSheetController.create({
      header: 'ตัวเลือก',
      buttons: [{
        text: 'กล้องถ่ายรูป',
        icon: 'camera',
        handler: () => {
          this.onCamera(item);
        }
      }, {
        text: 'อัลบั้มรูป',
        icon: 'images',
        handler: () => {
          this.onImage(item);
        }
      }]
    });
    await actionSheet.present();
  }

  async getData() {
    this.dataclassSchool = {
      class: this.dataclass.class,
      classroom: this.dataclass.room,
      classtype: this.dataclass.classtype,
      school_id: this.dataclass.dataschool.school_id,
      term: this.dataclass.dataschool.term,
      year: this.dataclass.dataschool.year
    }
    this.data = await this.studentService.getStudentById(this.dataclassSchool);
    this.datasuccess = true
    console.log(this.data);
  }
  onCamera(item) {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      const fileUri = (<any>window).Ionic.WebView.convertFileSrc(imageData);
      this.uploadImage(fileUri).then(async (uploadImageData) => {
        let data = {
          citizenid: item.citizenid,
          class: item.class,
          classroom: item.classroom,
          classtype: item.classtype,
          date: this.data,
          detail: '',
          images: uploadImageData,
          school_id: this.dataclass.dataschool.school_id,
          studentname: item.nametitle + item.firstname + item.lastname,
          term: this.dataclass.dataschool.term,
          title: '',
          videos: [],
          year: this.dataclass.dataschool.year
        }
        alert(data)
        this.image.push(uploadImageData);
      }, (uploadImageError) => {
        // console.log(uploadImageError);
        alert('Upload image err: ' + JSON.stringify(uploadImageError));
      });
    }, (err) => {
      // Handle error
    });

  }
  onImage(item) {
    const options = {
      maximumImagesCount: 5,
      width: 900,
      quality: 70,
      outputType: 0
    };
    this.imagePicker.getPictures(options).then((results) => {
      if (results == 'OK') {
        results = [];
      }
      for (var i = 0; i < results.length; i++) {
        let fileUri;
        fileUri = (<any>window).Ionic.WebView.convertFileSrc(results[i]);
        this.uploadImage(fileUri).then((uploadImageData) => {
          this.image.push(uploadImageData)
          let data = {
            citizenid: item.citizenid,
            class: item.class,
            classroom: item.classroom,
            classtype: item.classtype,
            date: this.data,
            detail: '',
            images: this.image,
            school_id: this.dataclass.dataschool.school_id,
            studentname: item.nametitle + item.firstname + item.lastname,
            term: this.dataclass.dataschool.term,
            title: '',
            videos: [],
            year: this.dataclass.dataschool.year
          }
          alert(data)

          if (this.image.length === results.length) {
          }
        }, (uploadImageError) => {
          console.log(uploadImageError);
          alert('Upload image err: ' + JSON.stringify(uploadImageError));
        });
      }
    }, (err) => { });
  }

  uploadImage(imageString): Promise<any> {

    return new Promise((resolve, reject) => {

      // this.loading.onLoading();
      const storageRef = firebase.storage().ref();
      const filename = Math.floor((Date.now() / 1000) + new Date().getUTCMilliseconds());
      const imageRef = storageRef.child(`images/upload/${filename}.png`);
      let uploadTask: any;
      const metadata = {
        contentType: 'image/png',
      };

      const xhr = new XMLHttpRequest();
      xhr.open('GET', imageString, true);
      xhr.responseType = 'blob';
      xhr.onload = (e) => {
        const blob = new Blob([xhr.response], { type: 'image/png' });
        uploadTask = imageRef.put(blob, metadata);
        uploadTask.on('state_changed', (_snapshot) => {
          const progress = (_snapshot.bytesTransferred / _snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (_snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              console.log('Upload is paused');
              break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
              console.log('Upload is running');
              break;
          }
        },
          (_err) => {
            reject(_err);
            // this.loading.dismiss();
          },
          (success) => {
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              // alert(downloadURL);
              resolve(downloadURL);
              // this.loading.dismiss();
            });
          });
      };

      xhr.send();

    });

  }
}
