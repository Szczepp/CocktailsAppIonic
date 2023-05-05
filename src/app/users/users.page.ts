import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class UsersPage implements OnInit {

  user: any = {
    Username: "TestUserAny",
    Email: "testuser@test.com",
    Password: "zaq1@WSX"
  };
  users: any[] = [
    {
      Username: "TestUser1",
      Email: "testuser@test.com",
      Password: "zaq1@WSX"
    },
    {
      Username: "TestUser2",
      Email: "testuser@test.com",
      Password: "zaq1@WSX"
    },
    {
      Username: "TestUser3",
      Email: "testuser@test.com",
      Password: "zaq1@WSX"
    },
    {
      Username: "TestUser4",
      Email: "testuser@test.com",
      Password: "zaq1@WSX"
    }
  ];

  constructor(
    private route: ActivatedRoute,
    public alertController: AlertController
    ) { 
      
    }

    async presentAlert(msg: string) {
      const alert = await this.alertController.create({
        header: 'Alert',
        message: msg,
        buttons: ['OK']
      });
      await alert.present();
    }
  ngOnInit() {
    // retrieve user ID from URL parameter
    const id = this.route.snapshot.paramMap.get('id');

}
}
