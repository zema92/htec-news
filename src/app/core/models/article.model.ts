export class ArticleModel {
	private _author: string;
	private _content: string;
	private _description: string;
	private _publishedAt: string;
	private _source: { id: string, name: string };
	private _title: string;	​​​
	private _url: string;
	private _urlToImage: string;

	constructor(obj?: ArticleModel) {
		this._author = obj && obj._author ? obj._author : null;
		this._content = obj && obj._content ? obj._content : null;
		this._description = obj && obj._description ? obj._description : null;
		this._publishedAt = obj && obj._publishedAt ? obj._publishedAt : null;
		this._source = obj && obj._source ? obj._source : null;
		this._title = obj && obj._title ? obj._title : null;
		this._url = obj && obj._url ? obj._url : null;
		this._urlToImage = obj && obj._urlToImage ? obj._urlToImage : null;
	}

	public get author(): string {
		return this._author;
	}

	public get title(): string {
		return this._title;
	}

	public get description(): string {
		return this._description;
	}

	public get content(): string {
		return this._content;
	}

	public get urlToImage(): string {
		return this._urlToImage;
	}

	public set urlToImage(value: string) {
		this._urlToImage = value;
	}

}
