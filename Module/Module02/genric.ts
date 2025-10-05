{

    // generic type 

    type GenericArray<T> = Array<T> 
    // const rollNumber : number[] = [12,34,56,76];
    // const rollNumber : Array<number> = [12,34,56,76];
    const rollNumber : GenericArray<number> = [12,34,56,76];

    // const friends : string[] = ['snu', 'seam', 'sultan'];
    // const friends : Array<string> = ['snu', 'seam', 'sultan'];
    const friends : GenericArray<string> = ['snu', 'seam', 'sultan'];

    // const boolArray : boolean[] = [true,false,true]
    // const boolArray : Array<boolean> = [true,false,true]
    const boolArray : GenericArray<boolean> = [true,false,true]

    const user : GenericArray<{
        name: string, age: number
    }> = [
        {
            name : 'snu Seam',
            age : 26,
        },
        {
            name : "sultan",
            age : 26
        }
    ]


}