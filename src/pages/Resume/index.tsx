import React from 'react'
import Page from '../../components/Page'

import './styles.scss'

const Resume: React.FC = () => {
    return (
        <Page name="resume">
            <iframe
                width="100%"
                height="100%"
                src="assets/documents/resume-pdf.pdf"
            />
        </Page>
    )
}

export default Resume
