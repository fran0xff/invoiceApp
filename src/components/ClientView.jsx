

export const ClientView = ({title, client}) => {

    const { name: nameClient, lastnName, address } = client;
    const { country, city, number, street } = address;

    return (
        <>
            <h3>{ title }</h3>
            <ul className="list-group">
                <li className="list-group-item active">Nombre: {nameClient}</li>
                <li className="list-group-item">Apellido: {lastnName}</li>
                <li className="list-group-item">Direccion: {street}, {number}, {city}, {country}</li>
            </ul>
        </>
    );
}