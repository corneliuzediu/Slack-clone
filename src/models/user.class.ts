export class User {
    firstName: string;
    lastName: String;
    email: string;
    password: string;
    telefon: number;
    ID: string;                     // user ID
    img: any;                       // img file or path to img
    title: string;                  // title or extra detail of person
    status: string;                 // Active, AFK, Log out
    statusTime: string;             // Active since <data>
    channels: Array<any>;           // Channels connected to the user
    contacts: Array<any>;           // Contacts connected to the user
    searchHistory: Array<any>;      // Search history

    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.email = obj ? obj.email : '';
        this.password = obj ? obj.email : '';
        this.telefon = obj ? obj.telefon : '';
        this.ID = obj ? obj.ID : '';
        this.img = obj ? obj.img : '';;
        this.title = obj ? obj.title : '';;
        this.status = obj ? obj.status : '';;
        this.statusTime = obj ? obj.statusTime : '';
        this.channels = obj ? obj.channels : '';
        this.contacts = obj ? obj.contacts : '';
        this.searchHistory = obj ? obj.email : '';

    }


    public toJSON() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password,
            telefon: this.telefon,
            ID: this.ID,
            img: this.img,
            title: this.title,
            status: this.status,
            statusTime: this.statusTime,
            channels: this.channels,
            contacts: this.contacts,
            searchHistory: this.searchHistory
        }
    }
}

