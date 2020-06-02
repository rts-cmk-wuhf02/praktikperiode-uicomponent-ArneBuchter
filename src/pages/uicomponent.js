/** @jsx jsx */
import { jsx, css, } from '@emotion/core';
import Button from '../components/Button';
import BullitContainer from '../components/Bullit-container';

const Uicomponent = () => {
    return(
        <main
         css ={css`
            {
            max-width: 1280px;
            margin: auto;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr; 
            grid-auto-row: auto;
            }`
        }
        >
                <Button />
                <BullitContainer />
            </main>
    )
}

export default Uicomponent;