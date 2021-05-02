import { RepositoryItem } from "./RepositoryItem"
import { useState, useEffect } from "react"

import '../styles/repositories.scss'

const repository = {
    name: 'unform',
    description: 'forms in react',
    link: 'https://github.com/Dizzysch'
}

export function RepositoryList(){
    const [ repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepositories(data));
    }, [])

    console.log(repositories);

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                <RepositoryItem repo={repository}/>
            </ul>
        </section>
    )
}