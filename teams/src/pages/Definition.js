import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import DefinitionSearch from '../components/DefinitionSearch';
import Error from '../components/Error';

export default function Definition() {

    const [word, setWord] = useState();
    const [error, setError] = useState(false);
    let { search } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + search)
            .then((response) => {
                if (!response.ok) {
                    setError(true);
                    throw response.status;
                }
                return response.json();
            }
            )
            .then((data) => {
                setWord(data[0].meanings);
            }
            )
            .catch((e) => {
                console.log(e);
            });

    }, []);


    if (error === true) {
        return (
            <>
                <Error />
                <Link to='/dictionary'>Search for</Link>
            </>

        );
    }

    return (
        <>
            {word ? (
                <>
                    <h1>Here is a definition:</h1>
                    {word.map((meaning) => {
                        return (
                            <p key={uuidv4()}>
                                {meaning.partOfSpeech + ': '}
                                {meaning.definitions[0].definition}
                            </p>
                        );
                    })}
                    <p>Search again:</p>
                    <DefinitionSearch/>

                </>
            ) : <p>Loading...</p>}
        </>
    );

}