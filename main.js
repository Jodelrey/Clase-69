const root = document.getElementById('root')

// // Card
// // Crear un componente Card que renderice un elemento article y que pueda contener elementos dentro suyo
// // Crear un componente CardTitle que renderice un elemento h3 y que pueda contener texto dentro suyo
// // Crear un componente CardDescription que renderice un elemento p y que pueda contener texto dentro suyo
// // Crear un componente CardActions que renderice un elemento div y que pueda contener elementos dentro suyo. Dicho div debe contener la propiedad display: flex
// // Crear un componente CardAction que renderice un elemento button y que pueda contener texto dentro suyo

// const CardAction = ({children}) => {
//     return <button>{children}</button>
// }

// const CardActions = ({children}) => {
//     return <div style={{ display: "flex"}}>{children}</div>
// }

// const CardDescription = ({children}) => {

//     return <p>{children}</p>
// }

// const CardTitle = ({children}) => {
//     return <h3>{children}</h3>
// }

// const Card = ({children}) => {
//     return <article>{children}</article>
// }

// const App = () => {
//     return (
//         <div>
//         <Card>
//             <CardTitle>Sarasa</CardTitle>
//             <CardDescription>Lorem Ipsum</CardDescription>
//             <CardActions>
//                 <CardAction>Hola</CardAction>
//                 <CardAction>Chau</CardAction>
//             </CardActions>
//         </Card>
//         <Card>
//             <CardTitle>Sarasa</CardTitle>
//             <CardDescription>Lorem Ipsum</CardDescription>
        
//         </Card>
//         <Card>
//             <CardDescription>Lorem Ipsum</CardDescription>
//             <CardActions>
//                 <CardAction>Hola</CardAction>
//                 <CardAction>Chau</CardAction>
//             </CardActions>
//         </Card>
//         </div>
//     )
// }

// const PuntajeItem = ( { lleno = true, color, tipo = "star" } ) => {
//     const iconoRelleno = lleno === true ? "fas" : "far"
//     return e('i', { className: 
//         `${iconoRelleno} fa-${tipo} ${color}-icon icon-style`} )
// }

// const Texto = ({llevaTexto, puntaje}) => {
//     const text = llevaTexto === true ? `${puntaje} de 5` : ``
//     return e('p', { className: 'info-text'}, text)
// }

// const Puntaje = ( { puntaje, color, tipo, texto = false } ) => {
//     console.log(Array(puntaje).fill(PuntajeItem))
//     return (
//         <div>
//             {Array(puntaje).fill(<PuntajeItem />)}
//             {Array(5-puntaje).fill(<PuntajeItem lleno={false}/>)}
//         </div>
//     )

// }

// const App = () => {
//     return (
//         <div>
//             <Puntaje puntaje={5} />
//             <Puntaje puntaje={3} />
//             <Puntaje puntaje={0} />
//             <Puntaje puntaje={1} />
//             <Puntaje puntaje={2} />
//         </div>
//     )
// }


// ReactDOM.render(<App />, root)


// //LAYOUT

// //Header
// //Crear un componente Header que renderice un elemento header y que pueda contener componente dentro suyo

// const Header =({children})=>{
//     return <header>{children}</header>
// }

// // //NavMenu
// // // Crear un componente Nav que renderice un elemento nav y un elemento ul dentro del nav, el componente debe poder contener elementos dentro suyo
// // // El elemento ul debe tener el estilo display: flex y list-style: none
// // // El componente NavMenu debe aceptar la prop direction con los valores "row" o "column", siendo "row" el valor por defecto, y cambiar el valor de la propiedad flex-direction del elemento ul en consecuencia

// const NavMenu = ({children, direction = 'row'}) =>{
//     const styles = {
//         display: 'flex',
//         listStyle: 'none',
//         flexDirection: direction
//     }
//     return (
//     <nav>
//         <ul style = {styles}>{children}</ul>
//         </nav>
//     )
// }

// // // NavItem
// // // Crear un componente MenuItem que renderice un componente li con un componente a, el componente debe poder contener elementos dentro suyo
// // // El elemento li debe tener el estilo display: flex
// // // Debe aceptar la prop path que corresponde al atributo href del componente a

// const MenuItem = ({children, path}) =>{
//     const styles = {
//         display: 'flex',
        
//     }
//     return (
//         <li style = {styles}>
//             <a href= {path}>{children}</a>
//         </li>
//     )

// }

// // // Main
// // // Crear un componente Main que renderice un componente main y que pueda contener componente dentro suyo

// const Main =({children})=>{
//     return <main>{children}</main>
// }

// // // Footer
// // // Crear un componente Footer que renderice un componente footer y que pueda contener componente dentro suyo

// const Footer = ({children})=>{
//     return <footer>{children}</footer>
// }

// // Crear un layout usando los componentes anteriores, de la siguiente forma:

// // <Header>
// //   <NavMenu>
// //     <NavItem path='/home'>Home</NavItem>
// //     <NavItem path='/about-us'>About Us</NavItem>
// //     <NavItem path='/contact'>Contact</NavItem>
// //   </Menu>
// // </Header>
// // <Main>
// //   Hola mundo
// // </Main>
// // <Footer>® 2020 - All rights reserved</Footer>

// const App = () =>{
//     return (
//         <div>
//             <Header>
//                 <NavMenu direction = "column">
//                     <MenuItem path = "/home">Home</MenuItem>
//                     <MenuItem path = "/about-us">About Us</MenuItem>
//                     <MenuItem path = "/contact">Contact</MenuItem>
//                 </NavMenu>
//             </Header>
//             <Main>Hola Mundo</Main>
//             <Footer>® 2020 - All rights reserved</Footer>
//         </div>
//     )
// }
// ReactDOM.render(<App />, root)
// // Renderizado condicional y Listas de componentes
// // UserGreeting
// // Crear un componente UserGreeting que acepte una prop user (que es un string). Si user tiene algún valor, debe renderizar un componente p que diga Welcome ${user} y un componente a que diga Logout, en cambio si user no tiene ningún valor, debe mostrar dos componentes a, uno que diga Login y otro Register. Separar luego ambas opciones en dos componentes distintos: GuestUserMessage (para cuando user no tiene ningún valor) y LoggedUserMessage,

// const GuestUserMessage = () =>{
//     return (
//         <div>
//         <div><a>Login</a></div>        
//         <div><a>Register</a></div>
//         </div>
//     )
// }

// const LoggedUserMessage = ({user}) =>{
//     return (
//         <div>
//             <p>Welcome {user}</p>
//             <a>Logout</a>
//         </div>
//     )
// }

// const UserGreeting =({user})=>{
//     return user ? <LoggedUserMessage user = {user}/> : <GuestUserMessage />
// }

// const App =()=>{
//     return (
//         <div>
//         <UserGreeting />
//         <UserGreeting user = "Jo" />
//         </div>
//     )
// }

// ReactDOM.render(<App />, root)

// // List
// // Crear un componente List que acepte una prop items que sea un array de strings, y renderice un componente ul con componentes li por cada string de items. Si items está vacío o no está definido, se debe mostrar un componente p que diga Sorry, this list is empty

// const List = ({arr}) => {
//     return !arr ? <p>Sorry, this list is empty</p> :
//     <ul>{arr.map(item=>(<li>{item}</li>))}</ul>

// }

// const App = () =>{
//     return (
//         <div>
//             <List arr = {["a", "b", "c", "d"]} />
//         </div>
//     )
// }

// ReactDOM.render(<App />, root)

// Field
// Crear un componente PasswordField que acepte una prop status que es un string con los valores posibles: "default", "error", "valid". El componente Field debe renderizar un label que diga "Password" y un input de tipo password. Si status tiene el valor "valid", debe mostrar el input con un borde de color verde. Si tiene el valor "error", debe mostrar el input con un borde de color rojo y renderizar debajo del input un componente small en color rojo que diga: "Invalid password, please try again"

// const BORDER = {
//     default: '1px solid grey',
//     error: '1px solid red',
//     valid: '1px solid light-green'
// }


// const Field = ({status = 'default'}) =>{
//     const styles = {
//         display: "flex",
//         flexDirection: "column"
//     }
//     return (
//         <div style = {styles}>
//             <label>Password</label>
//             <input type = "Password" style={{border : BORDER[status]}} />
//         </div>
//     )
// }
// const PasswordField = ({status}) =>{
    
//    return status==="error" ? (
//    <div>
//        <Field status = {status}/>
//        <small style = {{color: 'red'}}>Invalid password, please try again</small>
//     </div>
//    ) : <Field status={status}/>

// }

// const App =()=>{
//     return (
//         <div>
//             <PasswordField  />
//             <PasswordField status="error" />
//             <PasswordField status="valid" />
//         </div>
//     )
// }

// ReactDOM.render(<App />, root)