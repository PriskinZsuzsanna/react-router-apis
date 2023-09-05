import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import DictionaryItem from './DictionaryItem'

const DictionaryPage = () => {

    const [word, setWord] = useState({
        word: '',
        phonetics: '',
        meanings: [{
            partOfSpeech: '',
            definitions: [
                {
                    definition: ''
                }
            ]
        }]

    })
    const [inputValue, setInputValue] = useState('')
    const [isData, setIsData] = useState(false)

    const getDictionaryData = () => {
        fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + inputValue)
            .then(res => res.json())
            .then(data => {
                setWord(data[0])
                setInputValue('')
                setIsData(true)
            })
    }


    return (
        <>
            <section className='py-4'>
                <Container className='px-3'>
                    <h1>Dictionary</h1>
                    <p className='my-4 fs-5 text-center'>Find the exact meaning of english words!</p>
                    <input type="text" className='w-100 bg-info rounded-2 px-2 py-1 mb-2' placeholder='find a word...'
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                               getDictionaryData()
                            }
                        }}  />
                    <button onClick={getDictionaryData} className='btn btn-info px-4 py-1 ms-2'>Find</button>
                </Container>
            </section>
            {
                isData &&

                <section>
                    <Container>
                        <DictionaryItem
                            word={word} />
                    </Container>
                </section>
            }
        </>
    )
}

export default DictionaryPage
