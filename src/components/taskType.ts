export interface Task {
    _id: number;
    parentID: number;
    title: string;
    description: string;
    notes: string;
    assignedTo: number;
    deadline: string;
    status: string;
    progress: number;
    assignee: string;
    owner: User;
    sharedWith: User[];
    subtasks: Task[];
};

interface User {
    id: number;
    name: string;
};

interface Tag {
    tag: string;
    id: number;
}
