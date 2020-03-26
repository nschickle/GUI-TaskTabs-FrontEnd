import * as React from "react";
import styled from "styled-components";

import { ProjectButton } from "./newProjectButton";
import { SubTaskButton } from "./subTaskButton";
import { SubTask } from "./subtaskType";

const Column = styled.div`
  display: flex;
  flex-direction: column;
  border-width: 5px 5px 0px 5px;
  border-style: solid;
  width: 400px;
  height: ${(props: IColumnProps) => props.height}px;
`;

interface IColumnProps {
    height: number;
}

interface IProjectColumnProps {
    task: SubTask;
    changeHead: (newHead: SubTask) => any;
}

export class ProjectColumn extends React.Component<IProjectColumnProps> {

    constructor(props: IProjectColumnProps) {
        super(props);

        this.state = { height: 0 };
    }

    public render() {

        const height = this.checkHeight();
        return (
            <>
                <Column height={height} >
                    <ProjectButton />
                    <SubTaskButton name={this.props.task.name} percentage={this.props.task.percentage}
                        key={this.props.task.id} changeHead={this.props.changeHead}
                        taskHead={this.props.task}></SubTaskButton>;
                </Column>
            </>
        );
    }

    // When this object is displayed, add an event that check for window resizes.
    public componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
    }

    // Remove event when the object is unmounted.
    public componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    private updateDimensions = () => {
        this.setState({ height: window.innerHeight });
    }

    // Make sure column doesn"t get too small
    private checkHeight = () => {
        const height = window.innerHeight;
        return height > 825 ? height : 825;
    }
}
