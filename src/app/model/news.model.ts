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
    public get likes() {
        return this._likes;
    }
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