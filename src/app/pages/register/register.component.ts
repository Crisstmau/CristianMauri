import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LanguagesService } from 'src/app/services/languages.service'; // Add this line

@Component({
  selector: 'app-register',
  templateUrl: "./register.component.html",
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  nombre: string = "";
  apellido: string = "";
  dataSource: any = [];

  isEditing = false;
  editRow: any = null;

  email:string = "";
  pass:string = "";

  constructor(private authService:AuthService, private router:Router, private languagesService: LanguagesService){} // Modify this line
  guardar(){
    this.authService.register(this.email, this.pass).then(res=>{
      // Add these lines
      const userData = {
        nombre: this.nombre,
        apellido: this.apellido
      };
      this.languagesService.postLanguage(userData).subscribe(response => {
        console.log('User data saved successfully');
      }, error => {
        console.log('Error saving user data', error);
      });
      // End of added lines
      this.router.navigate(["/login"])
    }).catch(error=>{
      console.log(error)
    })
  }  
}

