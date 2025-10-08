{

    type sheikh = {
        bike : string;
        car : string;
        ship : string;
    }

    type vehicleCondition<T> =  T extends keyof sheikh  ? true : false

    type hasTractor = vehicleCondition<"tractor">

}