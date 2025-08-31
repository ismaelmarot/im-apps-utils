export interface ProjectConfig {
    id: string;        // nombre exacto del repo
    tech: string[];    // badges de tecnologías
}

export const allowedProjects: ProjectConfig[] = [
    {
        id: 'notes-dos-app',
        tech: [
            'https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB',
            'https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=flat&logo=bootstrap&logoColor=white'
        ]
    },
    {
        id: 'otro-proyecto',
        tech: [
            'https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E',
            'https://img.shields.io/badge/html5-%23E34F26.svg?style=flat&logo=html5&logoColor=white'
        ]
    }
];
