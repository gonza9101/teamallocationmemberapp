import { useState } from "react";

const Employees = () => {

    const [employees, setEmployees] = useState([{id:1, fullName:"Gonzalo Hidalgo", designation:"React Developer", gender: "male", teamName: "TeamA"},
                                                {id:1, fullName:"Gabriel Hidalgo", designation:"React Developer", gender: "male", teamName: "TeamB"}]);

    return (
        <main>
            
        </main>
    )
}

export default Employees;