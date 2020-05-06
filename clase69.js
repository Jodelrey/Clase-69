//Se creo una sintaxis que permite convertir el codigo de react a una sintaxis muy similar a html. Se llama JSX - JavaScript Extension

//Es una extension del lenguaje de JavaScript. 
//Compilar es el proceso de convertir un lenguaje a otro. JSX cuando se compila se traduce a JS. Para esto necesitamos compiladores. El mas conocido es babel. Babel no solo traduce jsx a js, sino que traduce ES6 a ES5 para asegurar compatibilidad con navegadores mas viejos. 
//Para utilizar Babel tenemos que linkear como script babel


const App = () =>{
    return <h1>Hola JSX!</h1>//no es html es equivalente a return e('h1', {}, 'Hola JSX!'). Es el llamado a la funcion react.createElement
}

ReactDOM.render(e(App), root)

//Para poner las props las escribimos como si fuesen atributos en html, la sintaxis es la misma

const App = () =>{
    return <h1 className = 'titulo'>Hola JSX!</h1>
}

//Hay que diferenciar cuando estamos escribiendo jsx y cuando estamos escribiendo js puro. Cuando queremos hacer cosas con js tenemos que cambiar de contexto

const App = () =>{
    const titulo = "Hola JSX!"
    const clase = 'titulo'
    return <h1 className = {clase}>{titulo}</h1>// debemos agregar las llaves para que lo tome como contexto propio de javascript y lo interprete como una variable. Para utilizar cualquier dato de js debo cambiar de contexto y utilizar llaves
}

//Entre llaves tengo que poner una expresion de js. Es cualquier instruccion de js que devuelva un valor
//No se pueden poner condicionales porque son instrucciones. No devuelven valor
//Tampoco puedo poner la declaracion de una variable. Es una asignacion y no devuelve valor.
//Si se pueden incluir funciones
const App =()=>{
const obtenerTitulo = () =>"soy una funcion"
return <h2>{obtenerTitulo}</h2>
}

//Siempre tenemos que devolver un unico componente en el mismo nivel. Tenemos que devolver un componente raiz. Siempre tenemos que envolverlo dentro de un elemento. Por ejemplo un div
const App =()=>{
return (
    <div>
        <h1>{titulo}</h1>
        <h2>{subtitulo}</h2>
    </div>
)//esto se debe poner entre parentesis porque sino apenas se encuentre con un return deja de ejecutar el codigo y no se ejecuta el resto
}

//Podemos poner etiquetas abiertas, si no se le pasan elementos hijos unicamente
const App =()=>{
    return (
        <div>
            <h1>{titulo}</h1>
            <h2>{subtitulo}</h2>
            <h1 />
        </div>
    )
}

//Para componentes funcionales
//Los props se pasan como atributos. El orden de los props no importa. Los nombres de los atributos van en camelCase 

const Titulo = ({texto, tamanio}) =>{
    return <h1 className={tamanio}>{texto}</h1>
}

const App =()=>{
    return (
        <div>
            <Titulo texto= 'Soy un componente' tamanio ="grande" />
            <Titulo texto= 'Soy un titulo' tamanio = 'chico' />
            <Titulo texto= 'Soy otro titulo' />
        </div>
    )
}

//Para ponerle estilos. Style es un objeto. Hay dos opciones, pasarle la variable aparte entre llaves. La segunda pasarle un objeto con los estilos. Hay que poner doble llaves


const estilos = {
    color: 'red',
    fontSize : '40px'
}


const Titulo = ({texto, tamanio}) =>{
    return <h1 style = {estilos} className={tamanio}>{texto}</h1>
}

//segunda forma

const Titulo = ({texto, tamanio}) =>{
    return <h1 
    style = {{
        color: 'red', 
        fontSize: '40px'
    }} 
    className={tamanio}
    >
        {texto}
        </h1>
}

const App =()=>{
    return (
        <div>
            <Titulo texto= 'Soy un componente' tamanio ="grande" />
            <Titulo texto= 'Soy un titulo' tamanio = 'chico' />
            <Titulo texto= 'Soy otro titulo' />
        </div>
    )
}

//Para valores dinamicos que son muchos para generar clases van estilos en linea. Para estilos predefinidos se usan estilos en clases de css

//Todo lo que va dentro de una etiqueta se guardan dentro de la prop children del componente
//Necesitamos definirle donde van a insertarse los elementos hijos. Lo hacemos mediante la prop children


const ItemLista =({children})=>{
    return <li className="item-lista">{children}</li>//para que renderice el texto
}

const Lista =({children})=>{
    return <ul className = "lista">{children}        
    </ul>
}


const App = ()=>{
    return (
        <Lista>
            <ItemLista>Item 1</ItemLista>
            <ItemLista>Item 2</ItemLista>
            <ItemLista>Item 3</ItemLista>
            <ItemLista>Item 4</ItemLista>
        </Lista>
    )
}

//La idea de los children es que nos permiten hacer componentes muy flexibles y puedan aceptar dentro muchas cosas

const ItemLista =({contenido, icono})=>{
    return <li className="item-lista"><i className="icono">{contenido}</i></li>
}
const App = ()=>{
    return (
        <Lista>
            <ItemLista contenido = 'Item 1' icono = 'estrella'></ItemLista>
            <ItemLista>Item 2</ItemLista>
            <ItemLista>Item 3</ItemLista>
            <ItemLista>Item 4</ItemLista>
        </Lista>
    )
}

ReactDOM.render(<App />, root)

const Lista =({children})=>{
    return <ul className = "lista">{children}        
    </ul>
}


const App =()=>{
    const items = ['Item 1', 'Item 2', 'Item 3']
    
    return (<Lista>{items.map((item)=>(<ItemLista>{item}</ItemLista>))}</Lista>)//a nivel de buenas practicas es recomendable que todo lo que sea JSX este dentro del return. La parte de logica va por fuera

}


//Hay una serie de estrategias para, dependiendo de las props, algunos elementos se rendericen y otros no
//Renderizado condicional. 
//Le dan mas flexibilidad y variaciones a los componentes, permiten mostrar u ocultar cosas.
//Un primera estrategia es la del circuito corto

const Lista =({children, titulo, importante})=>{
    return (
        <div>
            {importante ? <h2>{titulo}</h2>:<h3>{titulo}</h3>}
            <ul className='lista'>{children}</ul>
        </div>
    )
}

//si titulo es un string vacio o undefined evalua como falso y se corta la ejecucion. No renderiza el h3

const App = ()=>{
    const items = ['Item 1', 'Item 2', 'Item 3']
    return (
        <div>
            <Lista titulo ="Lista Principal" importante = {true}>
            {items.map((item)=>(<ItemLista>{item}</ItemLista>))}
            </Lista>
            <Lista titulo ="Lista Secundaria" importante = {true}>
            {items.map((item)=>(<ItemLista>{item}</ItemLista>))}
            </Lista>
        </div>
    )
}