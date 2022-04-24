import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PagesComponent } from './components/pages/pages.component';
import { RegisterComponent } from './components/register/register.component';
import { CrearReservacionComponent } from './components/reservaciones/crear-reservacion/crear-reservacion.component';
import { ReservacionesComponent } from './components/reservaciones/reservaciones.component';

const routes: Routes = [
  // Rutas protegidas
  { path: '', 
    component: PagesComponent, 
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'reservaciones', component: ReservacionesComponent},
      {path: 'crearreservacion', component: CrearReservacionComponent},
      // {path: 'catalogos', component: CatalogosComponent },
      // {path: 'bancos', component: NopagefoundComponent },
      // {path: 'cuentas', component: NopagefoundComponent },
      // {path: 'formaspago', component: NopagefoundComponent },

      // {path: 'cursos', component: CursosComponent },
      // {path: 'curso', component: CursoComponent },
      // {path: 'curso/:id', component: CursoComponent },
      // {path: 'caja', component: CajaComponent },
      // {path: 'ciclos', component: CiclosEscolaresComponent },
      // {path: 'inscripciones', component: InscripcionesComponent },
      // {path: 'ventas', component: VentasComponent },
      // {path: 'usuarios', component: UsuariosComponent},
      // {path: 'usuario', component: UsuarioComponent},
      // {path: 'usuario/:id', component: UsuarioComponent},
      // {path: 'clientes', component: ClientesComponent},
      // {path: 'cliente', component: ClienteComponent},
      // {path: 'cliente/:id', component: ClienteComponent},
      // {path: 'alumnos', component: AlumnosComponent},
      // {path: 'alumno', component: AlumnoComponent},
      // {path: 'alumno/:id', component: AlumnoComponent},
      // {path: 'productos', component: ProductosComponent},
      // {path: 'producto', component: ProductoComponent},
      // {path: 'producto/:id', component: ProductoComponent},    
      
      // {path: 'reportes/inscripciones', component: IncripcionesReportComponent},
      // {path: 'estadocuenta', component: EstadoCuentaComponent},

      {path: '', component: HomeComponent, pathMatch: 'full'},

    ]
  },

  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},

  {path: '*', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
