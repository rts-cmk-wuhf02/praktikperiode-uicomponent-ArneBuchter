/** @jsx jsx */
import { jsx, css, } from '@emotion/core';
import BullitBox from './Bullit-box';
import BullitParcel from './Bullit-parcel';
import BullitQC from './Bullit-qc';
import BullitCustomer from './Bullit-customer';

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
            <BullitParcel />
            <BullitQC />
            <BullitCustomer />
        </section>
    )
}

export default BullitContainer;