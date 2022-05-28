const Search = ({ ...props }) => {
    return (
        <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M3.57002 12.8782C0.678796 10.638 0.147173 6.47322 2.38253 3.57577C4.61761 0.678181 8.7736 0.145273 11.665 2.38545C14.5562 4.62562 15.0878 8.79042 12.8526 11.6879C10.6174 14.5855 6.46124 15.1184 3.57002 12.8782Z'
                stroke='black'
                strokeWidth='1.5'
            />
            <path
                d='M13.3841 10.8848L18.8067 16.3169C19.0644 16.5753 19.0644 16.9941 18.8067 17.2525L17.2563 18.8063C16.9987 19.0645 16.5806 19.0645 16.323 18.8063L10.9659 13.4374'
                stroke='black'
                strokeWidth='1.5'
            />
        </svg>
    )
}

export default Search
