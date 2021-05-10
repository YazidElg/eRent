import React from 'react';
import axios from 'axios';

function Logement(props) {
    //axios.post({path:'http://localhost:3001/voirdetaillogement')
    return (
        <div>
            {props.match.params.id}
        </div>
    );
}

export default Logement;