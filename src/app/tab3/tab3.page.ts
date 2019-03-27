import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  portfolio = [
    {
      image: {
        url: "http://4.bp.blogspot.com/-IusTEIKpWg4/U57venbRtII/AAAAAAAAAF0/FkZQlrxyqRE/s1600/IMG_20140518_112136.jpg",
        url1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaBHbAEbVX-ByjJ-2fOgJFZqPk0aAKZ_fZI3gNdarv3vk8-mxk"
      },
      title: "ภาพวาดระบายสี",
      detail: "ภาพวาดระบายสีครอบครัวของฉัน",
      date: "22 มีนาคม 2562"
    },
    {
      image: {
        url: "http://www.naibann.com/wp-content/uploads/2016/11/3-17-5.jpg"
      },
      title: "ประดิษฐ์ของเล่น",
      detail: "การประดิษฐ์ของเล่นจากสิ่งเหลือใช้ เพื่อปลูกฝังให้เด็กๆรู้จักนำสิ่งของเหลือใช้มาทำให้เกิดประโยชน์ ",
      date: "7 มีนาคม 2562"
    },
    {
      image: {
        url: "http://2.bp.blogspot.com/-U1jNxhrtk2Q/VOtFLgQ8_dI/AAAAAAAADLU/4uV4LLhapDM/s1600/DSC03381.JPG"
      },
      title: "แม่สี 3 สี",
      detail: "การเรียนรู้แม่สีทั้ง 3 จากสีน้ำ โดยให้เด็กๆ ใช้ความคิดสร้างสรรค์อย่างอิสระ",
      date: "1 มีนาคม 2562"
    },
  ]
}
