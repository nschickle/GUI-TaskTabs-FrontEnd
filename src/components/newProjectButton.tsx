import * as React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ApplicationConfig from './applicationConfig';

const styles = {
    button: {
        width: window.innerWidth,
        height: 100,
        fontSize: 32
    }
};

interface ProjectButtonProps {
    changeHead: (newHead: number) => any;
}

export class ProjectButton extends React.Component<ProjectButtonProps> {

    constructor(props: ProjectButtonProps) {
        super(props);

    }

    createNewProject = () => {

        // TODO 
        // should be user from google oauth
        const newProject = {owner: "littlebobbytables@xkcd.com", title:"New project", status:"Active", progress:0};
        fetch(`${ApplicationConfig.api.staging.baseUrl}/api/projects`,
        {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(newProject)
        }).then((response) => response.json())
            .then((data) => {
                // This will refresh the page with the new project as the current head.
                this.props.changeHead(data._id);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
    }

    public render() {
        return (
            <Container fluid>
                <Row>
                    <Button style={styles.button} size="lg" variant="outline-primary" onClick={this.createNewProject}> + New Project </Button>
                </Row>
            </Container>
        );
    }
}
