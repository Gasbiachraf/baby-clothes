
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home/home';
import { ShopPage } from './pages/Shop/shop';
import { ErrorPage } from './pages/Error/Error';
import { MyProvider } from './utils/ContextProvider';
import Header from './layouts/header';
import Footer from './layouts/footer';
import { ProductPage } from './pages/Product/product';
function App() {
    return (

    <MyProvider>
        <Header/>
        <Routes >
            <Route path='/' element={<HomePage />} />
            <Route path='/shop' element={<ShopPage />} />
            <Route path='/product/:idProduct' element={<ProductPage />} />
            <Route path='/*' element={<ErrorPage />} />
        </Routes >
        <Footer/>

    </MyProvider>
);
}
export default App;

