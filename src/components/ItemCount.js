 const ItemCount = ({ count, handleCount }) => {
    return (
      <div>
        <button onClick={() => handleCount("restar")}>
            -
        </button>
        <span>
          {count}
        </span>
        <button onClick={() => handleCount("sumar")}>
          +
        </button>
      </div>
    );
  };

  export default ItemCount;