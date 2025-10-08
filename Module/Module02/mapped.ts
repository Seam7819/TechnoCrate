{

    type areaNumber = {
        height : number;
        width : number
    }
    type AreaString ={
        [key in keyof areaNumber] : boolean
    }
    
}