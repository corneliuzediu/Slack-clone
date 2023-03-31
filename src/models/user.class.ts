export class User {
    firstName: string;
    lastName: String;
    email: string;
    telefon: number;
    ID: string;                     // user ID
    img: any;                       // img file or path to img
    title: string;                  // title or extra detail of person
    status: string;                 // Active, AFK, Log out
    statusTime: string;             // Active since <data>
    channels: Array<any>;           // Channels connected to the user
    contacts: Array<any>;           // Contacts connected to the user
    searchHistory: Array<any>;      // Search history

}