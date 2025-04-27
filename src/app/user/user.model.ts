// tworzymy własny typ obiekt
export type User = {
  name: string,
  id: string,
  avatar: string
}

// jako Interfejs bardziej popularne w uzyciu,
// by mozna bylo pobrac w innych klasach musi byc export
export interface UserInput {
  name: string,
  id: string,
  avatar: string
}


