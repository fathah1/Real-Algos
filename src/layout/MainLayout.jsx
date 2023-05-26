import React, {Fragment} from 'react'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function MainLayout({children}) {
    return (
        <Fragment>
            <Header />
            <div>{children}</div>
            <Footer />
        </Fragment>
    )
}

export default MainLayout