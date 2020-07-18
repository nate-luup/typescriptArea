///<reference types="moment" />
declare function setTitle(title: string | number): void;
declare function getTitle(): string;

declare let documentTitle: any;
declare let i18n: any;
interface String {
  getFirstLetter(): string;
}

// declare namespace myLib {
//   let a: string;
// }
