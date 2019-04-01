import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-protfolio',
  templateUrl: './protfolio.page.html',
  styleUrls: ['./protfolio.page.scss'],
})
export class ProtfolioPage implements OnInit {

  
  portfolio = [
    {
      image: [{
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw-Amie2LTPOodcyLkeuYlaeTjo-L48DYGhhtOskzu85uxXxxw"
      }
      ],
      title: "ภาพวาดระบายสี",
      detail: "ภาพวาดระบายสีครอบครัวของฉัน",
      date: "22 มีนาคม 2562"
    },
    {
      image: [
        {
          url: "http://www.naibann.com/wp-content/uploads/2016/11/3-17-5.jpg"
        }, {
          url: "http://4.bp.blogspot.com/-KvDW__9jYRo/VP0QGApJy1I/AAAAAAAAC_g/YNdakTPxDUA/s1600/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%94%E0%B8%B4%E0%B8%A9%E0%B8%90%E0%B9%8C%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%99%E0%B8%88%E0%B8%B2%E0%B8%81%E0%B8%A7%E0%B8%B1%E0%B8%AA%E0%B8%94%E0%B8%B8%E0%B9%80%E0%B8%AB%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B9%83%E0%B8%8A%E0%B9%89%2B%E0%B8%A3%E0%B8%96%E0%B9%81%E0%B8%82%E0%B9%88%E0%B8%87%E0%B8%88%E0%B8%B2%E0%B8%81%E0%B9%81%E0%B8%81%E0%B8%99%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%94%E0%B8%B2%E0%B8%A9%E0%B8%8A%E0%B8%B3%E0%B8%A3%E0%B8%B0%2B5.jpg"
        }
      ],
      title: "ประดิษฐ์ของเล่น",
      detail: "การประดิษฐ์ของเล่นจากสิ่งเหลือใช้ เพื่อปลูกฝังให้เด็กๆรู้จักนำสิ่งของเหลือใช้มาทำให้เกิดประโยชน์ ",
      date: "7 มีนาคม 2562"
    },
    {
      image: [
        { url: "http://2.bp.blogspot.com/-U1jNxhrtk2Q/VOtFLgQ8_dI/AAAAAAAADLU/4uV4LLhapDM/s1600/DSC03381.JPG" },
        {
          url: "https://asianparent-assets-th.dexecure.net/wp-content/uploads/sites/25/2016/02/Fotolia_100914559_Subscription_Monthly_M.jpg"
        }

      ],
      title: "แม่สี 3 สี",
      detail: "การเรียนรู้แม่สีทั้ง 3 จากสีน้ำ โดยให้เด็กๆ ใช้ความคิดสร้างสรรค์อย่างอิสระ",
      date: "1 มีนาคม 2562"
    },
  ]


  constructor(
    public route: NavController
  ) { }

  ngOnInit() {
  }
  backtab4() {
    this.route.navigateForward('/tab4')
  }
}
