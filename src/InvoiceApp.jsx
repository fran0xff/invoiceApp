import { useState } from "react";
import { getInvoice } from "./services/getInvoice"
import { InvoiceView } from "./components/InvoiceView";
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { ListItemsView } from "./components/ListItemsView";
import { TotalView } from "./components/TotalView";




export const InvoiceApp = () => {

    const { total, id, name, client, company, items:itemsInitial } = getInvoice();

    const [formItemsState, setFormItemsState] = useState({
        priduct: '',
        price: '',
        quantity: ''
    });

    const { product, price, quantity } = formItemsState;

    const [items, setItems] = useState(itemsInitial);

    const[counter, setCounter] = useState(4);

    const onInputChange = ({ target: { name, value }}) => {
            console.log(name);
            console.log(value);

            setFormItemsState({
                ...formItemsState,
                [ name ]: value
            }); 
    }

    const onInvoiceItemsSubmit = (event) => {
        {
            event.preventDefault();

            if (product.trim().length <= 1) {
                alert('Error en el producto');
                return;
            }
            if (price.trim().length <= 1) {
                alert('Error en el precio');
                return;
            }
            if (isNaN(price.trim())) {
                alert('Error en el precio');
                return;
            }
            if (quantity.trim().length < 1) {
                alert('Error en la cantidad');
                return;
            }
            if (isNaN(quantity.trim())) {
                alert('Error en la cantidad');
                return;
            }

            setItems([...items, {
                    Id: counter,
                    product: product.trim(),
                    price: parseInt(price.trim(), 10),
                    quantity: parseInt(quantity.trim(), 10)
                }
            ]);
            setFormItemsState({
                product: '',
                price: '',
                quantity: ''
            });
            setCounter(counter + 1);

        }
    }

    return (
        <>
            <div className="container">

                <div className="card my-3">

                    <div className="card-header">
                        Ejemplo de Factura
                    </div>
                    <div className="card-body">
                        <InvoiceView id={id} name={name} />

                        <div className="row my-3">

                            <div className="col">
                                <ClientView title="Datos del cliente" client={client} />
                            </div>
                            <div className="col">
                                <CompanyView title="Datos de la empresa" company={company} />
                            </div>
                        </div>
                        <ListItemsView title="Productos de la factura" items={items} />
                        <TotalView total={total} />
                        <form className="w-50" onSubmit={ onInvoiceItemsSubmit }>
                            <input
                                type="text"
                                name="product"
                                value={ product }
                                placeholder="Producto"
                                className="form-control m-3" 
                                onChange={ onInputChange }/>
                            <input
                                type="text"
                                name="price"
                                value={ price }
                                placeholder="Precio"
                                className="form-control m-3" 
                                onChange={ onInputChange}/>
                            <input
                                type="text"
                                name="quantity"
                                value={ quantity }
                                placeholder="Cantidad"
                                className="form-control m-3"
                                onChange={ onInputChange }/>
                            
                            <button 
                            type="submit" 
                            className="btn btn-primary m-3">
                                Agregar producto 
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

}
