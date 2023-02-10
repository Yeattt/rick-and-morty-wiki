export interface ICharacter {
   id     : number;
   image  : string;
   name   : string;
   species: string;
   gender : string;
   status : string;
   origin : {
      name: string;
      url: string;
   };
}