import { Injectable } from '@angular/core';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { HttpClient } from '@angular/common/http';
import { Platform } from '@ionic/angular';
import { Capacitor } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  constructor(private http: HttpClient, private platform: Platform) {}

  async downloadFile(url: string, fileName: string) {
    const response = await this.http.get(url, { responseType: 'blob' }).toPromise();
    if (!response) {
      throw new Error('Error al descargar el archivo: response no esta definido');
    }
    const base64 = await this.convertBlobToBase64(response) as string;

    if (this.platform.is('android')) {
      await Filesystem.writeFile({
        path: fileName,
        data: base64,
        directory: Directory.Documents
      });
    } else {
      // Manejo para otras plataformas
    }
  }

  private convertBlobToBase64(blob: Blob): Promise<string> {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result as string);
      };
      reader.readAsDataURL(blob);
    });
  }
}
