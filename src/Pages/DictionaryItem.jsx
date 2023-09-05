import React from 'react'
import Card from 'react-bootstrap/Card'

const DictionaryItem = ({ word }) => {
    return (
        <Card className='dictionary-card bg-info my-3 p-3 text-white text-center'>

            <div className="card-header d-flex justify-content-between align-items-center pb-3 gap-3 flex-wrap">
                <h2>{word.word}</h2>
                <div className="d-flex gap-2">
                    <button className="bg-dark py-2 px-4 text-white rounded-2">{word.phonetic}</button>
                    <button className="bg-dark py-2 px-4 text-white rounded-2">{word.meanings[0].partOfSpeech}</button>
                </div>
            </div >
            <div className="card-body py-3">
                <h3 className="pb-3">Meanings:</h3>
                <ul>
                    {word.meanings[0].definitions.map((item) => (
                        <li key={item.definition}>{item.definition}</li>
                    ))}
                </ul>
            </div >



        </Card >
    )
}

export default DictionaryItem
