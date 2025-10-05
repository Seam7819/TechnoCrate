{

    // generic interface

    interface Developer<T> {
        name : string ;
        computer : {
            brand : string;
            releaseYear : number;
            price : number;
        };
        smartWatch : T
    } 

    const poorDeveloper : Developer<{
        brand : string;
        model : string;
        price: number
    }> = {
        name : 'snu seam',
        computer : {
            brand : 'HP',
            releaseYear : 2020,
            price : 12500
        },
        smartWatch :{
            brand : 'apple',
            model : 'new',
            price: 25000

        }
    }

    const richDeveloper :  Developer<{
        brand : string;
        model : string;
        price: number;
        heartTrack : boolean
    }> = {
        name : 'snu seam',
        computer : {
            brand : 'HP',
            releaseYear : 2020,
            price : 12500,
            
        },
        smartWatch :{
            brand : 'apple',
            model : 'new',
            price: 25000,
            heartTrack : true,

        }
    }

}