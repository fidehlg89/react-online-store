//import { styled } from "./../../common"
import {
    Card, CardBody,
    CardTitle
} from 'reactstrap';

const CardBasic = ({ title, description }) => {
    return (
        <Card>
            <CardBody>
                <CardTitle>{title}</CardTitle>
                <p>{description}</p>
            </CardBody>
        </Card>
    )
}

export default CardBasic