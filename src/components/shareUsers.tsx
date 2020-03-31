import * as React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const styles = {
    owner: {
        fontSize: 24,
        width: 110
    },
    sharedW: {
        fontSize: 24,
        width: 175
    },
    user: {
        fontSize: 24,
        width: 110
    },
    box: {
        minWidth: 100
    }
};

interface User {
    id: number;
    name: string;
}

interface ShareUserProps {
    owner: User;
    sharedUsers: User[];
}

export class ShareUsers extends React.Component<ShareUserProps> {
    owner: User;
    sharedUsers: User[];

    constructor(props: ShareUserProps) {
        super(props);
        this.owner = props.owner;
        this.sharedUsers = props.sharedUsers;
    }

    render() {
        const sharedArray = this.sharedUsers.map((item) => {
            return (
                <Button key={item.id} style={styles.user} variant="outline-secondary">{item.name}</Button>
            )
        });

        return (
            <Container style={styles.box}>
                <Row noGutters={true}>
                    <ListGroup horizontal>
                        <ListGroup>
                            <ListGroup.Item style={styles.owner}>Owner</ListGroup.Item>
                            <Button style={styles.owner} variant="outline-secondary">{this.owner.name}</Button>
                        </ListGroup>
                        <ListGroup>
                            <ListGroup.Item style={styles.sharedW}>Shared with</ListGroup.Item>
                            <ListGroup horizontal>
                                <ButtonGroup>
                                    {sharedArray}
                                </ButtonGroup>
                            </ListGroup>
                        </ListGroup>
                    </ListGroup>
                </Row>
            </Container>
        )
    }
}
