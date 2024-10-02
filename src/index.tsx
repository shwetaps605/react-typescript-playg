import ReactDOM from 'react-dom/client';
import Parent from './props/Parent';
import useBookSearch from './useBookSearch';
import { useCallback, useRef, useState } from 'react';


const App = () => {
    const [query, setQuery] = useState('');
    const [pageNumber, setPageNumber] = useState(1);
    const {books, loading, error, hasMore} =useBookSearch(query,pageNumber)

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        setPageNumber(1)
    }

    const observer:any = useRef();
    const lastBookElementRef = useCallback((node: HTMLDivElement) => {
        if(loading) return
        if(observer.current) {
            observer.current.disconnect()
        }
        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting && hasMore) {
                console.log("Visible")
                setPageNumber(prev => prev +1);

            }
        })
        if(node) observer.current.observe(node)
        //console.log(node)
    },[loading, hasMore]);




    return <div>
        <h1>React App</h1>
        <input type='text' value={query} onChange={handleSearch}></input>
        {
            books.map((book,index) => {
                if(books.length === index + 1) {
                    return <div ref={lastBookElementRef} key={book}>{book}</div>
                }
                return <div key={book}>{book}</div>
            })
        }
        <div>{loading &&  'Loading...'}</div>
        <div>{error && 'ERROR OCCURED SOMEWHERE'}</div>
        {/* <Parent/> */}
    </div>
}

const root = ReactDOM.createRoot(document.querySelector('#root') as HTMLElement);
root.render(<App/>);