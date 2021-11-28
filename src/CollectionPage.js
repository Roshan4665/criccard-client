import React from 'react'
import CardCollectionBackground from './components/card-collection-components/CardCollectionBackground'

const CollectionPage = (props) => {
    const playerList=props.playerList;
    return (
        <div>
            <CardCollectionBackground playerList={playerList}/>
        </div>
    )
}

export default CollectionPage

