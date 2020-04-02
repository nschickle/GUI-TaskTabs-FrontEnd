export interface SubTask {
    _id: number;
    parentID: number;
    title: string;
    description: string;
    notes: string;
    assignedTo: number;
    deadline: Date;
    status: string;
    progress: number;
    assignee: string;
    owner: User;
    sharedWith: User[];
    subtasks: SubTask[];
};

interface User {
    id: number;
    name: string;
};

interface Tag {
    tag: string;
    id: number;
}
