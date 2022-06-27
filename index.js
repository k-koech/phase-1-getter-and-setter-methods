// Add your Circle class here
class Circle
{
    constructor(radius){
        this.radius =radius
    }
    get diameter()
    {
        return this.radius*2
    }
    get circumference()
    {
        return this.diameter*3.142;
    }

    get area()
    {
        let area = this.radius*this.radius*3.142;
        return parseFloat(area.toFixed(1));
    }

    // SETS
    set diameter(diameter)
    {
        return this.radius = diameter/2
    }
    set circumference(circumference)
    {
        return this.radius = circumference/(3.142*2)
    }

    set area(area)
    {
        return this.radius = Math.sqrt(area/3.142);
    }
}