export function RepositoryItem(props){
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