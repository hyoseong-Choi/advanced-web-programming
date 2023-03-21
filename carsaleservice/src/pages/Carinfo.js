import './Carinfo.css';
const car = [
    {name:"GRANDEUR", cost:4500, info:"Graceful design"},
    {name:"BMW", cost:7800, info:"Functional of high level"},
    {name:"PORSCHE", cost:12300, info:"Popular Sports Car"},
    {name:"SONATA", cost:2800, info:"Family Car"},
    {name:"GENESIS", cost:6700, info:"Popular Car"}
];

const Caritem = ({car}) =>(
    <div>
        <table >
            <tr>
               <td>{car.name}</td> 
               <td>{car.cost}</td> 
               <td>{car.info}</td> 
            </tr>
        </table>
    </div>
);
//<td>{car.cost}</td> 
//<td>{car.info}</td> 
const Carinfo = () => {
    return (<>
    <h1>Car Information</h1>
    <div>
    {car.map((cr) => (<Caritem car = {cr}/>))}
    </div>
    </>
        
    );
};


export default Carinfo;