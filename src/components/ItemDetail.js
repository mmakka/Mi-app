
const ItemDetail = ({item}) =>{
    return(
        <div className="d-flex container justify-content-center">
        <div className="card col-4">
            <h2 className="text-center">{item.nombre}</h2>
            <img src={item.img} className="img-fluid p-3" alt="Producto"/>
            <h6 className="text-center mt-2">{item.descripcion}</h6>
            <p className="text-center">${item.precio}</p>
            <p className="mt-2 m-2">Stock :{item.stock}</p>
            <button className="button">Comprar</button>
        </div>
        </div>
    )
};

export default ItemDetail;