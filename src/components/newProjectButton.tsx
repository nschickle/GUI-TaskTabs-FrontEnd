import * as React from "react";
import styled from "styled-components";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const styles = {
    button: {
        width: window.innerWidth,
        height: 100,
        fontSize: 32
    }
};

export class ProjectButton extends React.Component<{}> {

    public render() {
        return (
            <Container fluid>
                <Row>
                    <Button style={styles.button} size="lg" variant="outline-primary"> + New Project </Button>
                </Row>
            </Container>
        );
    }
}
