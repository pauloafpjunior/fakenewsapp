export class NewsModel {
    private _id: number;
    private _title: string;
    private _publishedAt: Date;
    private _likes: number;
    private _link: string;
    private _image: string;
    private _content: string;

    public constructor(otherNews: any) {
        Object.assign(this, otherNews);
    }

    public likesToString(): string {
        if (this._likes < 1000) {
            return this._likes + ' likes';
        } else if (this._likes < 1000000) {
            return (this._likes / 1000) + 'k likes';
        } else {
            return (this._likes / 10000000) + 'mi likes';
        }
    }    
    public get id() {
        return this._id;
    }
    public set id(id: number) {
        this._id = id;
    }
    public get title() {
        return this._title;
    }
    public set title(title: string) {
        this._title = title;
    }
    public get publishedAt() {
        return this._publishedAt;
    }
    public set publishedAt(publishedAt: Date) {
        this._publishedAt = publishedAt;
    }
    
    // Não possui o método get para forçar o programador a usar
    // o método likesToString. Isso só é possível graças ao conceito
    // de encapsulamento e visibilidade.

    public set likes(likes: number) {
        this._likes = likes;
    }
    public get link() {
        return this._link;
    }
    public set link(link: string) {
        this._link = link;
    }
    public get image() {
        return this._image;
    }
    public set image(image: string) {
        this._image = image;
    }
    public get content() {
        return this._content;
    }
    public set content(content: string) {
        this._content = content;
    }
}