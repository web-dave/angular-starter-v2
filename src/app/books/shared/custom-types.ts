export interface IBook {
  title: string;
  subtitle: string;
  isbn: string;
  abstract: string;
  numPages: number;
  author: string;
  publisher: IUser;
}

export interface IUser {
  name: string;
  url: string;
}
