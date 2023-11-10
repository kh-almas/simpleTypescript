{
    type a1 = null;
    type b1 = number;

    // type x1 = a1 extends null ? true : false;
    type x1 = a1 extends null
        ? true
        : b1 extends number ? false : true;

    type p = {
        bike: string;
        car: string;
        ship: string;
        plane: string;
    }

    // type check<T> = T extends "bike" | "car" | "ship" | "plane" ? true : false;

    type check<T> = T extends keyof p ? true : false;

    type hasItem = check<"plane">
}
