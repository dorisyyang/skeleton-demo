const Cart = ({ ...props }) => {
    return (
        <svg width='17' height='20' viewBox='0 0 17 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M1 16.4909V5.84329H15.8V16.4909C15.8 16.6204 15.7265 16.7378 15.615 16.7848C10.8742 18.779 5.92566 18.779 1.18531 16.7848C1.07367 16.7378 1 16.6204 1 16.4909Z'
                stroke='black'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path d='M11.6146 5.91006C11.6146 -0.675618 5.18443 -0.59764 5.18443 5.91006' stroke='black' strokeWidth='1.5' />
        </svg>
    )
}

export default Cart
