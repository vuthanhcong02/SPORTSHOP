import styles from './DefaultLayout.module.scss'
import classNames from 'classnames/bind'
import Header from '../components/Header';
const cx = classNames.bind(styles)
function DefaultLayout({children}) {
    return (  
        <div classNames={cx('wrapper')}>
            <Header/>
            <div className={cx('content')}>
                {children}
            </div>
        </div>
    );
}

export default DefaultLayout;