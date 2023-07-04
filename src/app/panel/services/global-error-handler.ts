import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler, Injectable, Injector } from "@angular/core";
import Swal from 'sweetalert2';
import { ErrorModel } from "../models/models";
//import * as jsPDF from 'jspdf';
import { jsPDF } from "jspdf";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler{

    Errors: ErrorModel[] = [];
    constructor(private injector: Injector){}

    handleError(error: Error | HttpErrorResponse): void {

        if(error instanceof HttpErrorResponse){
            let message = this.getServerErrorMessage(error);
            Swal.fire({
                icon: 'error',
                title: 'Ha ocurrido un error',
                text: `${message}`,
                width: '60%'
              });
        } else {
            Swal.fire({
                html:`<div class="card" style="background: rgba(255,255,255,.2); box-shadow: 0 5px 15px rgba(0,0,0,.5)">
                        <div class="card-header" style="display:flex; flex-direction:row; align-items:center; justify-content:space-between">
                          <img src="../../../../assets/images/estamos-trabajando.png" width="100">
                          <h2 class="mt-3" style="margin-right:60px;">Oops...</h2>
                          <span></span>
                        </div>
                        <div class="card-body" style="height:300px; overflow:auto">
                            <p>${error}</p>
                        </div>
                      </div>`,
                width: '700',
                //background: 'url(../../../assets/images/estamos-trabajando.png)',
                //showCloseButton: true,
                confirmButtonText:'<i class="fa-solid fa-download"></i> Descargar',
                confirmButtonColor: '#2f363a',
              }).then((result) => {
                if(result.isConfirmed){
                    this.generatePDF(error);
                }
              });
        }
    }

    getServerErrorMessage(error: HttpErrorResponse): string {
        return navigator.onLine ?    
            error.message :
            'Se ha perdido la conexion a internet';
    }

    generatePDF(error: Error) {
        const doc = new jsPDF('p', 'mm', 'a4');
        const errorText = error.toString();
      
        doc.text(errorText, 10, 10, { maxWidth: 190 }); 
      
        doc.save('Error.pdf');
      }

      downloadBlob(blob: Blob, fileName: string) {
        const url = window.URL.createObjectURL(blob);
        const anchor = document.createElement('a');
        
        anchor.href = url;
        anchor.download = fileName;
        anchor.click();
      
        window.URL.revokeObjectURL(url);
      }
    
}