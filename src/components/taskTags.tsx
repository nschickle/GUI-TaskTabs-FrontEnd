import * as React from 'react';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const styles = {
    tagBox: {
        margin: "auto"
    },
    tagText: {
        fontSize: 24
    }
};

interface Tag {
    tag: string;
    id: number;
}

interface TaskTagsProps {
    tags: Tag[];
}

export class TaskTags extends React.Component<TaskTagsProps> {
    tags: Tag[];

    constructor(props: TaskTagsProps) {
        super(props);

        this.tags = props.tags;
    }

    render() {
        const tagArray = this.tags.map((item , i) =>
        {
            return (
                <Button key={item.id} variant="outline-secondary" style={styles.tagText}> {item.tag}</Button>
            )
        });

        return(
            <ButtonGroup style={styles.tagBox}>
                {tagArray}
                <Button variant="outline-secondary" style={styles.tagText}> + </Button>
            </ButtonGroup>
        )
    }
}
