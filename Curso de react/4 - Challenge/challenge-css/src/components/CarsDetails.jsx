import styles from './CarsDetails.module.css'

const CarsDetails = ({ brand, color, revised }) => {

    return (
        <div>
            {revised &&
                <div>
                    <h2 className={styles.h2_cars_details}>Propriedades do carro</h2>
                    <li className={styles.li_cars_details}>Marca: {brand}</li>
                    <li className={styles.li_cars_details}>Cor: {color}</li>
                </div>
            }
        </div>
    )

};

export default CarsDetails;