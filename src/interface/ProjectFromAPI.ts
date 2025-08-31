export interface ProjectFromAPI {
    name: string;
    description: string | null;
    topics: string[];
    html_url: string;
}