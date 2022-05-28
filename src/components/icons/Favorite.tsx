const Favorite = ({ ...props }) => {
    return (
        <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M11.0924 17.5061C10.5195 18.1646 9.59064 18.1646 9.01782 17.5061L3.47077 11.1301C-0.918922 6.08465 5.4992 -1.36529 9.88877 3.68033C14.2785 -1.36529 21.0294 6.08465 16.6397 11.1301L11.0924 17.5061Z'
                stroke='black'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    )
}

export default Favorite
