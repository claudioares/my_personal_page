import { LinkStyled } from '../../global_styled/LinkStyled';
import { UlPage } from './styled';


function BodyPage ({repos, repoFilter, inputValue}) {
    return(
        <>
            {inputValue.length > 0 ? (
                <UlPage>
                    {repoFilter.map(repo =>(
                    <LinkStyled href={repo.clone_url} target='_blank' key={repo.id}>
                        <li>
                        {repo.name}
                        </li>
                    </LinkStyled>
                    ))}
                </UlPage>
                ) :
                <UlPage>
                    {repos.map(repo => (
                    <LinkStyled href={repo.clone_url} target='_blank' key={repo.id}>
                        <li>
                            {repo.name}
                        </li>
                    </LinkStyled>
                    ))}
                </UlPage>
            }
        </>
    )
}

export default BodyPage;