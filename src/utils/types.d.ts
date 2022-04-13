export interface BlogState {
    data: BlogItem[];
    selectedPost: null | BlogItem;
    createWindowOpen: boolean;
    confirmWindowOpen: boolean;
}

export interface BlogItem {
    id: number;
    title: string;
    content: string;
}