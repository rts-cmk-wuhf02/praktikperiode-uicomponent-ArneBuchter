/** @jsx jsx */
import { jsx, css, } from '@emotion/core';
import BullitBox from './Bullit-box';

const BullitContainer = () => {
    return(
        <section 
            css={css`{
                grid-column: 1 / 4;
                grid-row: 2 / 3;
                display: flex;
                justify-content: space-between;
            }`}>
            <BullitBox />
            <BullitBox />
            <BullitBox />
            <BullitBox />
        </section>
    )
}

export default BullitContainer;