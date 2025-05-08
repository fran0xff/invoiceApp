import { useEffect, useState } from "react";
import { calculateTotal, getInvoice } from "./services/getInvoice"
import { InvoiceView } from "./components/InvoiceView";
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { ListItemsView } from "./components/ListItemsView";
import { TotalView } from "./components/TotalView";
import { FormItemsView } from "./components/FormItemsView";


const invoiceInitial = {
    id: 10,
    name: '',
    client: {
        name: '',
        lastnName: '',
        address: {
            street: '',
            number: 0,
            city: '',
            country: '',

        }
    },
    company: {
        name: '',
        fiscalNumber: 0,
    },
    items: []

};


export const InvoiceApp = () => {

    const [ activeForm, setActiveForm] = useState(false);

    const [total, setTotal] = useState(0);

    const [counter, setCounter] = useState(4);

    const [invoice, setInvoice] = useState(invoiceInitial);

    const [items, setItems] = useState([]);

    const { id, name, client, company } = invoice;

    useEffect(() => {
        const data = getInvoice();
        console.log(invoice);
        setInvoice(data);
        setItems(data.items);
    }, []);

    useEffect(() => {
        //console.log('el counter cambió');
    }, [counter]);

    useEffect(() => {
        console.log(total);
    }, [total])

    useEffect(() => {
        setTotal(calculateTotal(items));
    }, [items]);

    const HandlerAddItems = ({ product, price, quantity }) => {

        setItems([...items, {
            Id: counter,
            product: product.trim(),
            price: parseInt(price.trim(), 10),
            quantity: parseInt(quantity.trim(), 10)
        }]);

        setCounter(counter + 1);
    }

    const handlerDeleteItem = () => {
        setItems(items.filter(item => item.Id !== id))
    }

    const onActiveForm = () => {
        setActiveForm(!activeForm);
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
                        <ListItemsView title="Productos de la factura" items={items} handlerDeleteItem={ id => handlerDeleteItem(id) } />
                        <TotalView total={total} />
                        <button className="btn btn-secondary"
                            onClick={ onActiveForm }>{!activeForm ? 'Agregar producto': 'Cerrar Form' }</button>
                        { !activeForm ? '': <FormItemsView handler={ HandlerAddItems } />}

                    </div>
                </div>
            </div>
        </>
    )

}

