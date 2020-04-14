import * as React from "react";
import styled from 'styled-components';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { ProjectColumn } from "./projectColumn";
import { SubTaskColumn } from "./subTaskColumn";
import { SubTask } from "./subtaskType";
import { TaskView } from "./taskView";
import ApplicationConfig from './applicationConfig';
import { HistoryButton } from "./historyButton";

const styles = {
	box: {
		paddingLeft: 0,
		paddingRight: 0,
		minWidth: 1300
	},
  button: {
		height: 20,
		fontSize: 16
	}
};

const HistoryRow = styled.div`
	padding: 4px;
	padding-left: 32px;
`;

const HistorySpacer = styled.div`
	padding: 4px;
`;

interface IUser {
	id: number;
	name: string;
}

const testOwner: IUser = { id: 0, name: "Super Steve" };

const testSharedWith: IUser[] = [
	{ id: 1, name: "Little Steve" },
	{ id: 2, name: "Tiny Steve" },
];

interface ProjectHistory {
	id: number,
	name: string
};

interface ProjectPageProps {
	projectID: number;
}

// ProjectPage contains the entire application past the Google oauth. This should include the left and right sidebars
// task view, settings user info, etc.
export class ProjectPage extends React.Component<ProjectPageProps, { error: any, isLoaded: boolean, task: SubTask, head: number, history: ProjectHistory[] }>{

	constructor(props: ProjectPageProps) {
		super(props);

		this.state = {
			error: null,
			isLoaded: false,
			task: null,
			head: undefined,
			history: [],
		};
	}

	// This will attempt to fetch from the database a given number of times.
	// This is needed because if the head was recently inserted, the fetch will
	// likely return null as the database will not have caught up yet.
	makeProjectQuery = (numTries: number) => {
		let timeout;
		if (numTries == 0) {
			this.setState({
				isLoaded: false,
				error: true
			});
			clearTimeout(timeout);
		} else {
			timeout = setTimeout(() => {
				fetch(`${ApplicationConfig.api.staging.baseUrl}/api/tasks/${this.props.projectID}`)
					.then(res => res.json())
					.then(
						(result) => {
							if (result) {

								// add the project to the beginning of the history
								let taskHistoryNode: ProjectHistory;
								taskHistoryNode = { id: result._id, name: result.title };

								// state should be treated as if it were immutable.
								// However, concat returns a new array.
								this.setState({
									isLoaded: true,
									task: result,
									head: result._id,
									history: this.state.history.concat([taskHistoryNode])
								});

							} else {
								this.makeProjectQuery(numTries - 1);
							}
						},
						// Note: it's important to handle errors here
						// instead of a catch() block so that we don't swallow
						// exceptions from actual bugs in components.
						(error) => {
							this.setState({
								isLoaded: true,
								error
							});
						}
					);
			}, 1000);
		}
	}

	componentDidMount() {
		// This will attempt to the make the Project Query 5 times before giving up.
		this.makeProjectQuery(5);
	}


	// TODO
	// assignedTo should probably be a User, not a string. Fine for now with dummy data,
	// but should be replaced.
	public render() {

		const { error, isLoaded, task, head, history } = this.state;
		// TODO Style error and loading screens

		if (error) {
			return (
				<>Error!</>
			);
		} else if (!isLoaded) {
			return (
				<>Loading...</>
			);
		} else {

			let historyComponent =
				<Row >
					{history.map((node, index) => {
						if (index === history.length - 1) {
							return (
								<HistoryButton key={node.id} id={node.id} name={node.name} changeHead={this.changeHeadFromHistory}/>
							);
						}
						return (
							<>
								<HistoryButton key={node.id} id={node.id} name={node.name} changeHead={this.changeHeadFromHistory}/>
								<HistorySpacer> -> </HistorySpacer>
							</>
						);
					})}
				</Row>;

			// prevent date from being invalid, else everythign crashes
			let deadline;
			if (!!task.deadline) {
				deadline = new Date(task.deadline);
			} else {
				deadline = null;
			}
			return (
				<Container fluid style={styles.box}>
					<HistoryRow>{historyComponent}</HistoryRow>
					<Row noGutters={true}>
						<Col sm="3"><ProjectColumn head={head} changeHead={this.changeHeadFromProject} /></Col>
						<Col sm="6"><TaskView
							taskID={head}
							name={task.title}
							completion={task.progress}
							description={task.description}
							dueDate={deadline}
							status={task.status}
							assignee={task.assignedTo}
							owner={testOwner}
							sharedUsers={testSharedWith}
						/></Col>
						<Col sm="3"><SubTaskColumn head={head} changeHead={this.changeHeadFromTask}></SubTaskColumn></Col>
					</Row>
				</Container>
			);
		}
	}

	private changeHeadFromHistory = (newHead: number) => {
		this.changeHead(newHead, false, true);
	}

	private changeHeadFromTask = (newHead: number) => {
		this.changeHead(newHead, false);
	}

	private changeHeadFromProject = (newHead: number) => {
		this.changeHead(newHead, true);
	}

	private changeHead = (newHead: number, isProject: boolean, isNewHeadHistoryTail?: boolean) => {
		const previousHead = this.state.head;
		if (newHead !== previousHead) {

			this.setState(() => {
				return { head: newHead };
			})

			fetch(`${ApplicationConfig.api.staging.baseUrl}/api/tasks/${newHead}`)
				.then(res => res.json())
				.then(
					(result) => {

						// Update History
						if (isProject) {
							let newHistory: ProjectHistory[] = [];

							// create new node
							let taskHistoryNode: ProjectHistory;
							taskHistoryNode = { id: result._id, name: result.title };

							newHistory.push(taskHistoryNode);

							// set new task
							this.setState({
								isLoaded: true,
								task: result,
								history: newHistory
							});

						}
						// This deletes the history after the previous head, and adds the new head to the end of the list.
						// Reason being that if you have pre-existing history and you go back in history and click a task button that was
						// not in the history previous, the entire history after the previous head must be erased.
						else if (!isNewHeadHistoryTail){
							let headDiscovered = false;
							let history = this.state.history;

							// destory the end of the history until the head is discovered
							while(!headDiscovered && history.length !== 0) {
								if (history[history.length - 1].id !== previousHead) {
									history.pop();
								} else {
									headDiscovered = true;
								}
							}
							let taskHistoryNode: ProjectHistory;
							taskHistoryNode = { id: result._id, name: result.title };

							history.push(taskHistoryNode);
							this.setState({
								isLoaded: true,
								task: result,
								history: history
							});
						}
						// If the user clicked a history button, no history changes need to be made.
						else {
							this.setState({
								isLoaded: true,
								task: result,
							});
						}
					},
					// Note: it's important to handle errors here
					// instead of a catch() block so that we don't swallow
					// exceptions from actual bugs in components.
					(error) => {
						this.setState({
							isLoaded: true,
							error
						});
					}
				);
		}
	}
};
