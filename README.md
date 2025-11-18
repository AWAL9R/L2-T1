# Explain the difference between any, unknown, and never types in TypeScript.
## The difference between any, unknown, and never types in TypeScript.
- <mark>any</mark> in typescript means any type of data. it can be string, array, number, boolean etc.
- <mark>unknown</mark> in typescript means any type of data. it can be string, array, number, boolean etc. but you must check type before using the variable.
- <mark>never</mark> in typescript means function will never return any value. It used when function throws an error.
>function throwError():never{
>
>throw new Error("an error happened")
>    
>}

this function never can return anything.

# Provide an example of using union and intersection types in TypeScript.
- when two or more types written with the separator <mark>|</mark> called union in TypeScript.
>type AlphaNumeric = string | number;
>
>let data: AlphaNumeric=1;

now <mark>data</mark> variable can store number or a string.

- When two or more object type is combined with <mark>|</mark> is also union in TypeScript.
>type Phone = {id:number, name:string};
>
>type Computer = {id:number, name:string, processor: string}
>
>type Device = Phone|Computer;
>
>let userDevice:Device={}

now <mark>userDevice</mark> variable can store Phone or Computer type data.

- When two or more object type is combined with <mark>&</mark> is called intersection in TypeScript.

>type User={id:number, name:string}
>
>type Role={role:string}
>
>let userWithRole: User & Role ={}

now <mark>userWithRole</mark> variable must contain the properties of <mark>User</mark> and <mark>Role</mark>. Otherwise TypeScript will throw an error.