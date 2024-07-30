const CarDetail = ({ brand, km, color, newCar }) => {

    return (
        <div>
            <h2>propiedades do carro</h2>
            <li>Marca: {brand}</li>
            <li>KM: {km}</li>
            <li>Cor: {color}</li>
            {newCar && <p>este carro é novo</p>}
        </div>
    )

};

export default CarDetail;