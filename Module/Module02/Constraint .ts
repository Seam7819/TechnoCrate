{

    type Person = {
        bike : string;
        car : string;
        ship : string
    }

    type Person2 = "bike" | "car" | " ship"

    type Person3 = keyof Person

}