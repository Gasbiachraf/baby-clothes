
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home/home';
import { AboutPage } from './pages/About/about';
import { ErrorPage } from './pages/Error/Error';
import { MyProvider } from './utils/ContextProvider';
import Header from './layouts/header';
import Footer from './layouts/footer';
function App() {
    return (

    <MyProvider>
        <Header/>
        <Routes >
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/*' element={<ErrorPage />} />
        </Routes >
        <Footer/>

    </MyProvider>
);
}
export default App;

