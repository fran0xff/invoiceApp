import PropTypes from 'prop-types';

export const CompanyView = ({title, company}) => {

    return (
        <>
            <h3>{ title }</h3>
            <ul className="list-group">
                <li className="list-group-item active">Nombre: {company.name}</li>
                <li className="list-group-item">{company.fiscalNumber}</li>
            </ul>

        </>
    );
}


CompanyView.prototype = {
    title : PropTypes.string.isRequired,
    company  : PropTypes.object.isRequired
};
