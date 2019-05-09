import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import * as firebase from 'firebase';

@Component({
  selector: 'app-portfolio-save',
  templateUrl: './portfolio-save.page.html',
  styleUrls: ['./portfolio-save.page.scss'],
})
export class PortfolioSavePage implements OnInit {
  data:any
  image: Array<any> = [];

  constructor( public modalcontroller: ModalController,
    public route: NavController,
    private imagePicker: ImagePicker,
    private camera: Camera) { }

  ngOnInit() {
    console.log(this.data)
  }

  back() {
    this.modalcontroller.dismiss();
  }
  onCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      const fileUri = (<any>window).Ionic.WebView.convertFileSrc(imageData);
      this.uploadImage(fileUri).then(async (uploadImageData) => {
        this.image.push(uploadImageData);
      }, (uploadImageError) => {
        // console.log(uploadImageError);
        alert('Upload image err: ' + JSON.stringify(uploadImageError));
      });
    }, (err) => {
      // Handle error
    });

  }
  onImage() {
    const options = {
      maximumImagesCount: 5,
      width: 900,
      quality: 70,
      outputType: 0
    };
    this.imagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
        let fileUri;
        fileUri = (<any>window).Ionic.WebView.convertFileSrc(results[i]);
        this.uploadImage(fileUri).then((uploadImageData) => {
          if (this.image.length == 0) {
            this.image = []
            this.image.push(uploadImageData)
          } else {
            this.image.push(uploadImageData)

          }
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
