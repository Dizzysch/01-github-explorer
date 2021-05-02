import React from "react";

interface RepositoryItemProps {
    repository: {
        full_name: string
        description: string
        html_url: string
        archived: boolean
    }
}

export function RepositoryItem(props: RepositoryItemProps){
    return(
        <li>
            <strong>{props.repository.full_name ?? 'default'}</strong>
            <p>{props.repository.description}</p>
            <a href="">
                {props.repository.html_url}
            </a>
    </li>
    );
}