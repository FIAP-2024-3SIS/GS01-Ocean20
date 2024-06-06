import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://fiap-3sis-gs-20241.azurewebsites.net';

  constructor(private http: HttpClient) { }

    // Método para obter dados de oceano
    getOceanData(Filters:any): Observable<any> {
    return this.http.get<any>(`https://fiap-3sis-gs-20241.azurewebsites.net/OceanData?regiao=${filter.regiao}&especie=${filter.especie}&statusConservacao=d&temperaturaMin=20&temperaturaMax=10&phMin=20&phMax=10&nivelPoluicao=d&pagina=1&qtde=20`);
    }

}
