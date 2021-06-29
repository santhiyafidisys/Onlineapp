import React from 'react';

import styles from './Style.module.css';


class Home extends React.Component {
    render() {
        return(
					<div>
            <img className={styles.mySlides} src="Card1.png" alt=" "/>
            <img className={styles.mySlides} src="Card2.png" alt=" "/>

					</div>
            

        );

    }
    
}
export default Home;