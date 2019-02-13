import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RyuusService {
  getRyuus() {
    return [
      {no: 1 , hobby: "berlari", keterangan: "lari 1 jam tiap hari"},
      {no: 2 , hobby: "senam", keterangan: "senam tiap hari"},
      {no: 3 , hobby: "bermain musik", keterangan: "bermain musik saat waktu senggang"},
    ];
  }
  constructor() { }

  
}
