import React, { useState, useEffect } from 'react';

const GiphyHooks = () => {
    const [keyword, setKeyword] = useState('')
    const [gif, setGif] = useState('')

    useEffect(() => {
        fetchGif(keyword)
    }, [])

    const fetchGif = (criteria) => {
        const url = `http://api.giphy.com/v1/gifs/random?api_key=rsoMA4Twgm0rV4FKx6EZP7KzBuLafqS8&tag=${criteria}`
        fetch(url)
            .then(response => response.json())
            .then(content => setGif(content.data.images.downsized.url))
            .catch(err => console.error(err))
    }

    const changeGiphy = (ev) => {
        ev.preventDefault()
        fetchGif(keyword)
    }
    return (
        <div>
            <form>
                <label className='srch'>
                    <h5 className='hdr'>search giphy.com</h5>
                    <input className='input' type="text" value={keyword} onChange={e => { setKeyword(e.target.value) }} />
                </label>
                <button className='btnGif' type="submit" onClick={changeGiphy}>submit</button>
            </form>
            <img className='gif' src={gif} alt="" />
        </div>
    )
}

export default GiphyHooks