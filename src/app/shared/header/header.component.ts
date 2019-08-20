import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	public isUsaActiveLang: boolean = true;
	public country: string = 'us';

	constructor() { }

	ngOnInit() {
	}

	public changeLanguage(lang?: string): void {
		this.isUsaActiveLang = !!lang;
		this.country = this.isUsaActiveLang ? 'us' : 'gb';
	}
}
