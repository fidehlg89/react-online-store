import CardBasic from "../elements/cards/cardbasic"

const Product = ({ product }) => {
    return (
        <CardBasic title={product.name} />
    )
}

export default Product