/** @jsx jsx */
import { jsx, css, } from '@emotion/core';
import Button from '../components/Button';

const Uicomponent = () => {
    return(
        <main
         css ={css`
            {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr; 
            grid-auto-row: auto;
            }`
        }
        >
                <Button />
            </main>
    )
}

export default Uicomponent;