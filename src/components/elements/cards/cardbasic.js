import { styled } from "./../../common"
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardLink, CardHeader, CardFooter
} from 'reactstrap';

const CardContainer = styled.div`
    padding: 1.25rem;
    box-shadow: 0 0.46875rem 2.1875rem rgb(4 9 20 / 3%), 0 0.9375rem 1.40625rem rgb(4 9 20 / 3%), 0 0.25rem 0.53125rem rgb(4 9 20 / 5%), 0 0.125rem 0.1875rem rgb(4 9 20 / 3%);
    border-width: 0;
    transition: all .2s;
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(26,54,126,0.125);
    border-radius: 0.25rem;
`;

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