import { useState } from "react";

/**
 * Para crear el un  componente que reciba la entrada de datos es necesario
 * ligar el value del input  o elemento a una variable de estado con use state
 * a esa variable de estado se de debe definir su correspondiente setValue y una
 * funcion manejadora que se mande a llamar cuando el valor del elemento cambie,
 * esta funcion majenadora manda a llamar internamente el setValue del estado.
 * En el caso de los inputs o formlarios hay que crear una funcion manejadora para 
 * el metodo onSubmit que prevenga el compotamiento por defecto y agrege el valor nuevo
 * al estado del componente que maneje el estado(el componente padre por lo regular)
 * 
 *  
 * 
 */
export const AddCategory = ({newCategory})=>{
    const [inputValue, setInputValue] = useState('one punch');
    const onInputChange = ({target}) =>{
        setInputValue(target.value);
        console.log(target.value);

    }
    const onSubmit = (event)=>{
        event.preventDefault();
        const value = inputValue.trim()
        if(value <= 1)return;
        newCategory(value);

    }
    return(
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Buscar gif" value={inputValue} onChange={onInputChange}/>
        </form>


    )
}