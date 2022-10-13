import React from 'react'
import Page from '../../components/Page'
import ProjectCard from '../../components/ProjectCard'

import './styles.scss'

const Projects: React.FC = () => {
    return (
        <Page name="projects">
            <div className="projects-title">
                Here are some of my currently active projects. Many of these are still in progress.
            </div>
            <div className="projects-list">
                <div className="project-row">
                    <ProjectCard
                        link="https://essper.com"
                        name="Essential Personnel"
                        description="
                            I am part of the developing team for Essential Personnel,
                            a holistic performance management and wellness solution
                            purpose-built for the public sector. I work with a phoenominal
                            group of people to deliver the best quality software to
                            police, fire, and other public safety departments around
                            the country."
                        img="essper-logo"
                        imgAlt="Essential Personnel Logo"
                        imgWidth={1000}
                    />
                </div>
                <div className="project-row">
                    <ProjectCard
                        link="https://github.com/alex-laycalvert/l1t"
                        name="l1t"
                        description="A terminal based puzzle game where you light up statues with laser beams and mirrors."
                        img="l1t-logo"
                        imgAlt="l1t Logo Image"
                        imgWidth={100}
                    />
                    <ProjectCard
                        link="https://github.com/alex-laycalvert/flashcards.nvim"
                        name="flashcards.nvim"
                        description="A Neovim plugin to help you study flashcards."
                        img="flashcards-nvim-logo"
                        imgAlt="flashcards.nvim Logo Image"
                        imgWidth={200}
                    />
                    <ProjectCard
                        link="https://github.com/alex-laycalvert/yaam.nvim"
                        name="yaam.nvim"
                        description="A Neovim plugin to help keep track of your agenda and TODO items using telescope.nvim."
                        img="yaam-logo"
                        imgAlt="yaam.nvim Logo Image"
                        imgWidth={250}
                    />
                </div>
            </div>
        </Page>
    )
}

export default Projects
