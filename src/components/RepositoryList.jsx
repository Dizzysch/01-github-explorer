import { RepositoryItem } from "./RepositoryItem"

const repo = {
    name: 'unform',
    description: 'forms in react',
    link: 'https://github.com/Dizzysch'
}

export function RepositoryList(){
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                <RepositoryItem repo={repo}/>
            </ul>
        </section>
    )
}