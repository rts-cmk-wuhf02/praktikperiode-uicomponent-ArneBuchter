/** @jsx jsx */
import { jsx, css, } from '@emotion/core';
import QC from './Quality_Icon.png';

let space = 'b4c1xbfc4w8w';
let deleveryToken = 'ejLF6V-_6hmTXDlZwiyRXoe-zOcQWGqmZX25z7FkPZY';

fetch(`https://cdn.contentful.com/spaces/${space}/environments/master/entries?access_token=${deleveryToken}&content_type=bullitBlock`,{
        'method': 'GET'
    }) 
    .then(response => response.json())
    .then(data => { 
        console.log(data)
    })
    
const BullitQC = () => {
    return(
        <div css={css`{
            background-color: #0AACDC;
            text-align: left;
            padding: 0 10px;
            width: 40vmin;
            height: 40vmin;
            border-radius: 10px;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 50% auto auto;
            color: white;
        }`}>
            <img css={css`{
                width: 80px;
                height: 80px;
                justify-self: end;
                margin: 1rem;
                z-index: 10;
            }`} src={QC} alt="" />
            <h2 css={css`{
                margin: 0;
                font-size: 1rem;
            }`}>QUALITY CHECK</h2>
            <p css={css`{}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea enim obcaecati corrupti.</p>
        </div>
    )
}

export default BullitQC;