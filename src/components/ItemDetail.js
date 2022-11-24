const ItemDetail = ({item}) =>{
    return(
        <div className="card col-3">
            <h2>{item.nombre}</h2>
            <img src={item.img} className="img-fluid" alt="Producto"/>
            <h6>{item.descripcion}</h6>
            <p>{item.precio}</p>
        </div>
    )
};

export default ItemDetail;