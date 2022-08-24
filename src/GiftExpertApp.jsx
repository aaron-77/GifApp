import { useState } from "react"
import {AddCategory,GrifGrid} from './componentes'
/**
 * Como mostrar listados de datos
 * creacion de componentes seprando en distintos componentes la entrada y el añadido de datos al estado
 * Cominicacion entre componentes padre e hijo
 */

/**
 * 
 * Explicacion de cada tema
 *  Como mostrar listados de datos: poner una eqtiuqeta contendora en el compnenente donde se mostrara el listado
 * y mandar a llamar un map con el arreglo o el estado donde estan los datos, ese map recibe como paramatro
 * una funcion que recibe un dato como parameto que representa  cada dato que esta dentro del arreglo o estado
 * con el que se mando a llamar map, dentro de la funcion que ejecuta map, se deben retornar las etiquetas(con una propiedad que sirva de id) que
 * queremos que se devuelvan, poneiendoles como contenido el dato que recibe la funcion que ejecuta el map
 * (el dato individual del estado).
 * 
 * Creacion de componentes separando entrada y manejo de estado: se crea un componente que manejara el
 * estado que deseamos cambiar(componente padre) y se crea otro componente con el formulario o inputs
 * desde los que se meteran datos
 * 
 * Cominicacion entre componentes padre e hijo: se da por hecho que se va a cambiar el estado del componente padre.
 * por lo tanto en el componente padre se define una propiedad del componente hijo donde se manda a llamar 
 * la funcion que manjeja el estado del padre, esta debe recibr como parametro un valor,en el compoenete hijo
 *  esa funcion envada se ejecuta(por lo regular en el submit) mandando el valor que se quiere agregar
 */

export const GifExpertApp = () => {
    const [categories,setCategories] = useState(['OnePunch']);
    
    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory))return ;
       setCategories([...categories,newCategory]);
       //categories.push(newCategory);
    }
    
   
    return(
        <>
            <AddCategory newCategory={value => onAddCategory(value)}/>
            <h1>GifExpertApp</h1>
            {
                categories.map(category => (<GrifGrid key={category} category={category} />))
            }
            
        </>

    )
    
}