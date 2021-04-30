export function RepositoryItem(props){
    return(
        <li>
        <strong>{props.repo.name}</strong>
        <p>{props.repo.description}</p>
        <a href="">
            {props.repo.link}
        </a>
    </li>
    );
}