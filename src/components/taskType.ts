export interface Task {
    _id: number;
    parentId: number;
    title: string;
    description: string;
    notes: string;
    assignedTo: string;
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
