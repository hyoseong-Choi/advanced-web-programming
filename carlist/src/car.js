import React from "react";

const car = [
    {id:1, name:"GRANDEUR", cost:4500, info:"Graceful design"},
    {id:2, name:"BMW", cost:7800, info:"Functional of high level"},
    {id:3, name:"PORSCHE", cost:12300, info:"Popular Sports Car"},
    {id:4, name:"SONATA", cost:2800, info:"Family Car"},
    {id:5, name:"GENESIS", cost:6700, info:"Popular Car"}
];

const Caritem = ({car}) =>(
    <div>
        <>[{car.id}] </>
        <span>
            {car.name} {car.cost} {car.info}
        </span>
    </div>
);

const Car = () =>{
    return(
        <div>
            <h2>Car List</h2>
            {car.map((cr) => (<Caritem car = {cr}/>))}
        </div>
    );
};
export default Car;
