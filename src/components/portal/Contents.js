import { Container, Row } from "react-bootstrap";

function Contents(props) {
    return <Row className="m-4 border shadow bg-white">
        <Container>
            <Row>
                <h1 className="p-3 font-bold text-2xl font-sans text-left">Рекомендательная платформа</h1>
            </Row>
        </Container>
    </Row>;
}

export default Contents;