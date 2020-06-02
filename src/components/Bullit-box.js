/** @jsx jsx */
import { jsx, css, } from '@emotion/core';

let space = 'b4c1xbfc4w8w';
let deleveryToken = 'ejLF6V-_6hmTXDlZwiyRXoe-zOcQWGqmZX25z7FkPZY';

fetch(`https://cdn.contentful.com/spaces/${space}/environments/master/entries?access_token=${deleveryToken}&content_type=bullitBlock`,{
        'method': 'GET'
    }) 
    .then(response => response.json())
    .then(data => { 
        console.log(data)
    })
    
const BullitBox = () => {
    return(
        <div css={css`{
            background-color: #005AEE;
            width: 40vmin;
            height: 40vmin;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
        }`}>
{/*             <img css={css`{}`} src={} alt="" />
            <h2 css={css`{}`}>{}</h2>
            <p css={css`{}`}></p>  */}
        </div>
    )
}

export default BullitBox;