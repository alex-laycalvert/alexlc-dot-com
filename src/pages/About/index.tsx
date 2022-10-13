import React from 'react'
import Page from '../../components/Page'

import './styles.scss'

const About: React.FC = () => {
    return (
        <Page name="about">
            <div className="about-title">
                <h2>Hello, World!</h2>
            </div>
        </Page>
    )
}

export default About
