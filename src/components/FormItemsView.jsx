import { useEffect, useState } from "react";


export const FormItemsView = ({ handler }) => {

    const [formItemsState, setFormItemsState] = useState({
        product: '',
        price: '',
        quantity: ''
    });

    const { product, price, quantity } = formItemsState;

    useEffect(() => {
        //console.log('el precio cambió');
    }, [price]);

    useEffect(() => {
        //console.log('el formItemsState cambió');
    }, [formItemsState]);

    const onInputChange = ({ target: { name, value } }) => {
        console.log(name);
        console.log(value);

        setFormItemsState({
            ...formItemsState,
            [name]: value
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

            handler(formItemsState);
            setFormItemsState({
                product: '',
                price: '',
                quantity: ''
            });

        }
    }

    return (
        <>
            <form className="w-50" onSubmit={onInvoiceItemsSubmit}>
                <input
                    type="text"
                    name="product"
                    value={product}
                    placeholder="Producto"
                    className="form-control m-3"
                    onChange={onInputChange} />
                <input
                    type="text"
                    name="price"
                    value={price}
                    placeholder="Precio"
                    className="form-control m-3"
                    onChange={onInputChange} />
                <input
                    type="text"
                    name="quantity"
                    value={quantity}
                    placeholder="Cantidad"
                    className="form-control m-3"
                    onChange={onInputChange} />

                <button
                    type="submit"
                    className="btn btn-primary m-3">
                    Agregar producto
                </button>
            </form>
        </>
    )
}
