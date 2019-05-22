import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ActionSheetController, LoadingController } from '@ionic/angular';
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
  images: any;
  image = [];
  data: any
  dataclass: any
  dataclassSchool: any;
  datasuccess = false;
  date: Date;
  dataStudent: any;
  dataImage: any;
  studentData: any;
  imagePortfolio: any;

  constructor(
    public act: ActivatedRoute,
    public route: NavController,
    public actionSheetController: ActionSheetController,
    public studentService: StudentService,
    private imagePicker: ImagePicker,
    private camera: Camera,
    public loadingController: LoadingController
  ) { }


  async ngOnInit() {
    // let res: any = this.act.snapshot.paramMap.get('dataClassroom');
    let res: any = window.localStorage.getItem('classroom')
    this.dataclass = JSON.parse(res)
    // console.log(this.dataclass);
    await this.getData();
    await this.getImage();
    this.date = new Date;
  }

  goBack() {
    this.route.navigateBack('/classroom');
  }

  gallery(item) {
    console.log(item);
    this.route.navigateForward(['/gallery', {
      data: JSON.stringify({
        citizenid: item.citizenid,
        class: item.class,
        classroom: item.classroom,
        classtype: item.classtype,
        firstname: item.firstname,
        isdevelopment: item.isdevelopment,
        isgrade: item.isgrade,
        lastname: item.lastname,
        nametitle: item.nametitle,
        studentid: item.studentid,
        _id: item._id,
      })
    }]);
  }


  // async presentLoading() {
  //   const loading = await this.loadingController.create({
  //     message: 'Hellooo',
  //     duration: 2000
  //   });
  //   await loading.present();

  //   const { role, data } = await loading.onDidDismiss();

  //   console.log('Loading dismissed!');
  // }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: 'crescent',
      duration: 5000,
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }
  async dismissOnPageChange() {
    return await this.loadingController.dismiss();
  }

  async presentActionSheet(item) {
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
  }

  async getImage() {
    try {
      console.log(this.data)
      for (let i = 0; i < this.data.datas.length; i++) {
        console.log(i);
        let data = {}
        data = {
          citizenid: this.data.datas[i].citizenid,
          class: this.data.datas[i].class,
          classroom: this.data.datas[i].classroom,
          classtype: this.data.datas[i].classtype,
          school_id: this.dataclass.dataschool.school_id,
          studentname: this.data.datas[i].nametitle + this.data.datas[i].firstname + this.data.datas[i].lastname,
          term: this.dataclass.dataschool.term,
          year: this.dataclass.dataschool.year
        }
        console.log(data);
        let res: any = {};
        res = await this.studentService.getPortfolio(data)
        // console.log(res);
        // console.log(i);
        // console.log(studenData);
        // console.log(this.data.datas[i]);
        // console.log(res.data.name);
        // console.log(this.data.datas[i].nametitle + this.data.datas[i].firstname + ' ' + this.data.datas[i].lastname);
        if (res) {
          this.data.datas[i] = await {
            citizenid: this.data.datas[i].citizenid,
            class: this.data.datas[i].class,
            classroom: this.data.datas[i].classroom,
            classtype: this.data.datas[i].classtype,
            firstname: this.data.datas[i].firstname,
            isdevelopment: this.data.datas[i].isdevelopment,
            isgrade: this.data.datas[i].isgrade,
            lastname: this.data.datas[i].lastname,
            nametitle: this.data.datas[i].nametitle,
            studentid: this.data.datas[i].studentid,
            _id: this.data.datas[i]._id,
            items: res.data.items
          }
          console.log(i);
        }
      }
      // this.data.datas.forEach(async studenData => {

      // });
    } catch (error) {

    }
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
        this.presentLoadingWithOptions();

        let data = {
          citizenid: item.citizenid,
          class: item.class,
          classroom: item.classroom,
          classtype: item.classtype,
          date: this.date,
          detail: '',
          images: uploadImageData,
          school_id: this.dataclass.dataschool.school_id,
          studentname: item.nametitle + item.firstname + item.lastname,
          term: this.dataclass.dataschool.term,
          title: '',
          videos: [],
          year: this.dataclass.dataschool.year
        }
        let res = await this.studentService.uploadPortfolio(data)
        if (res) {
          this.dismissOnPageChange()
        }
        // this.image.push(uploadImageData);
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
      maximumImagesCount: 100,
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
        this.uploadImage(fileUri).then(async (uploadImageData) => {
          this.presentLoadingWithOptions();
          this.image.push(uploadImageData)

          if (this.image.length === results.length) {

            let data = {
              citizenid: item.citizenid,
              class: item.class,
              classroom: item.classroom,
              classtype: item.classtype,
              date: this.date,
              detail: '',
              images: this.image,
              school_id: this.dataclass.dataschool.school_id,
              studentname: item.nametitle + item.firstname + item.lastname,
              term: this.dataclass.dataschool.term,
              title: '',
              videos: [],
              year: this.dataclass.dataschool.year
            }
            let res = await this.studentService.uploadPortfolio(data)
            if (res) {
              this.dismissOnPageChange();
            }
            this.image = []

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
