import axios from "axios";
import { useEffect , useState} from "react"

export default function useBookSearch(query, pageNumber) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [books, setBooks] = useState([]);
    const [hasMore, setHasMore] = useState(false);

    useEffect(()=>{
        setBooks([])
    },[query])

    useEffect(()=>{
        setLoading(true);
        setError(false);
        let cancel;
        axios({
            method: 'GET',
            url: 'http://openlibrary.org/search.json',
            params: { q: query, page: pageNumber},
            cancelToken : new axios.CancelToken(c => cancel = c)

        }).then(res => {
            console.log(res.data)
            setBooks(prevBooks => [...new Set([...prevBooks, ...res.data?.docs.map(book => book.title)])])
            setHasMore(res.data.docs.length > 0 )
            setLoading(false)
        }).catch(err => {
            if(axios.isCancel(err)) return
            setError(true)
        })
        return () => cancel();
    },[query,pageNumber])


  return { loading, error, books, hasMore};

}
