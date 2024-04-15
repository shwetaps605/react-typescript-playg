import ReactDOM from 'react-dom/client';
import Parent from './props/Parent';


const App = () => {
    return <div>
        <h1>React App</h1>
        <Parent/>
    </div>
}

const root = ReactDOM.createRoot(document.querySelector('#root') as HTMLElement);
root.render(<App/>);