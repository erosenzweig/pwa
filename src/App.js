import React, { useState } from 'react';

import { fetchAnimeQuote } from './api/fetchAnimeQuote';
import './App.css';

const App = () => {
    const [quote, setQuote] = useState('');

    const generate = async(e) => {
        if(e.key === 'Enter' || e.key === undefined) {
            const quote = await fetchAnimeQuote();
            setQuote(quote);
        }
    }

    return (
        <div>
            <div>
                <span>`{quote.character} ({ quote.anime })`</span><br />
                <blockquote><p>{ quote.quote }</p></blockquote>
            </div>
            <br /><br /><button onClick={ (e) => generate(e) }>Generate</button>
        </div>
    );
}

export default App;