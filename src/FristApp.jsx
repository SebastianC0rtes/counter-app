// export const FirtsApp = () => {
//     return(
//         <Fragment>
//             <h1>Sebastian Cortes</h1>
//             <p>Soy un subtitulo</p>
//         </Fragment>
//     )
// };
//rafc




// const newMessage = {
//     message: 'Hola mundo',
//     title: 'Fernando'
// };
// const getResult = () => {
//     return 4+4;
// };
import PropTypes from 'prop-types'
export const FirtsApp = ({title, subtitle}) => {

   // console.log(props);
//    if (!title) {
//     throw new Error('El title no existe')
// }
    return(
        <>
            {/* <h1>Sebastian Cortes</h1> */}
            {/* <h1> {JSON.stringify(newMessage)} </h1> */}
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </>
    )
};

FirtsApp.PropTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number.isRequired
}

FirtsApp.defaultProps = {
    title: 'No hay titulo'
}