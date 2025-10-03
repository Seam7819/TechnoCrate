{

    // spread operator
    // cousin of spread operator which is rest operator
    // destructuring

    const bros1 : string[] = ['siam', 'snu', 'maidul'];
    const bros2 : string[] = ['siam', 'snu', 'maidul'];
    // bros1.push(bros2)
    // Argument of type 'string[]' is not assignable to parameter of type 'string'
    // i can't push a array as string 
    // solution :

    bros1.push(...bros2);

    // we can spread object using destructure 

    const mentor1 = {
        typescript : 'mejbah',
        redux : 'mir',
        nextjs : 'mizan'
    }
    const mentor2 = {
        type : 'mejbah',
        red : 'mir',
        next : 'mizan'
    }
    const mentors = {
        ...mentor1,
        ...mentor2
    }
    

    // noe we learn about rest operators 

    // rest operator means we will make an array took all the elements 

    const greetFriends = (...friends : string[])=>{
        friends.forEach(friend =>{
            console.log(`hello ${friend}`);
        })
    };
    greetFriends('abul', 'babul','chulbul')

}