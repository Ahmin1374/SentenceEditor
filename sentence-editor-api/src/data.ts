export default interface SenetenceModel{
    n:number;
    s?:string;
    v?:string;
    o?:string;
}


export const dummyData : SenetenceModel[] = [
    {n: 1, s: 'Anna', v: 'is eating', o: 'a cookie'},
    {n: 2, s: 'Henry', v: 'does', o: 'a handstand'},
    {n: 3, s: 'Sarah', o: 'a pen'},
    {n: 4, s: 'John', v: 'tells'},
    {n: 5, s: '', o: 'a drama'}
]