import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { io } from 'socket.io-client';

const SOCKET_ENDPOINT = 'localhost:3000';

@Component({
  selector: 'app-chat-inbox',
  templateUrl: './chat-inbox.component.html',
  styleUrls: ['./chat-inbox.component.scss']
})

export class ChatInboxComponent implements OnInit {

  socket;
  message: string;
  token = CryptoJS.lib.WordArray.random(1024 / 32);
  key = CryptoJS.enc.Latin1.parse(this.token);
  iv = CryptoJS.enc.Latin1.parse(this.token);

  configuration = {
    keySize: 32,
    iv: this.iv,
    mode: CryptoJS.mode.CFB,
    padding: CryptoJS.pad.NoPadding
  };

  constructor() { }

  ngOnInit(): void {
    this.setSocketConnection();
  }

  private setSocketConnection(): void {
    this.socket = io(SOCKET_ENDPOINT);
    this.socket.on('message-broadcast', (data: string) => {
      if (data) {
        this.showMessage(this.decryptAES256(data), 'left');
      }
    });
  }

  public sendMessage(): void {
    this.socket.emit('message', this.encryptAES256(this.message));

    this.showMessage(this.message, 'right');
    this.message = '';
  }

  private encryptAES256(message: string): string {
    return CryptoJS.AES.encrypt(JSON.stringify(message), this.key, this.configuration).toString();
  }

  private decryptAES256(message: string): string {
    return JSON.parse(CryptoJS.AES.decrypt(message, this.key, this.configuration).toString(CryptoJS.enc.Latin1));
  }

  private showMessage(message: string, textAlign: string): void {
    const element = document.createElement('li');
    element.innerHTML = message;
    element.style.background = 'white';
    element.style.padding = '15px 30px';
    element.style.margin = '10px';
    element.style.textAlign = textAlign;
    document.getElementById('message-board').appendChild(element);
  }

}
