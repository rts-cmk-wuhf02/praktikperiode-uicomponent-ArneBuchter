/** @jsx jsx */
import { jsx, css, } from '@emotion/core';

const Button = () => {

    return(
        <button 
            css={css`
                {
                    background-color: #005AEE;
                    color: white;
                    font-size: 1rem;
                    margin: 1rem;
                    padding: 0.5rem 1rem;
                    border-radius: 20px;
                    border-style: none;       
                }`
            }
            >
            LEASURE
        </button>
    )
};

export default Button;