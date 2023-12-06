import { Component, OnInit } from '@angular/core';
import { LanguagesService } from './services/languages.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  name:string = "";
  abrev:string = "";
  dataSource:any = [];
  isEditing: boolean | undefined;
  editRow: any;

  constructor(private language: LanguagesService){}

  ngOnInit()
  {
    this.language.getListLanguges().subscribe( (data) => {
      for(var key in data)
      {
        var row = {id:key, abrev: data[key].abrev, name: data[key].name}
        this.dataSource.push(row)
      }
      console.log(this.dataSource)
    } )
  }

  save(){
    let body = {
      name: this.name,
      abrev: this.abrev
    }
    this.language.postLanguage(body).subscribe( (data) => {
      if(data!=null)
      {
        window.location.reload();
      }
    })
  }

  borrar(id:string){
    let aux = confirm("Esta Seguro de Borrar")
    if(!aux) return
    this.language.deleteLanguage(id).subscribe( (data) => {
      if(data==null)
      {
        window.location.reload();
      }
    })
  }
  actualizar(id: string) {
    let aux = confirm("quiere actualizar");
    if (!aux) return;
    this.isEditing = true;
    this.editRow = { ...this.dataSource.find((item: { id: string; }) => item.id === id) };
  }

  cancelarEdicion() {
    this.isEditing = false;
    this.editRow = null;
  }
  guardar() {
    this.language.updateLanguage(this.editRow.id, this.editRow).subscribe(() => {
      this.loadLanguages();
      this.isEditing = false;
      this.editRow = null;
});
}
loadLanguages() {
  this.language.getListLanguges().subscribe((data) => {
    this.dataSource = Object.keys(data).map(key => ({ id: key, ...data[key] }));
  });
}
}


