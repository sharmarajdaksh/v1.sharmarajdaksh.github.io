import React, { useRef } from "react"

import Head from "../shared/Head"
import homeStyles from "./Home.module.scss"
import developerOnDeskSVG from "../assets/svg/coder_on_desk.svg"
import frontendSVG from "../assets/svg/frontend_development.svg"
import reactSVG from "../assets/svg/react.svg"
import angularSVG from "../assets/svg/angular.svg"
import vueSVG from "../assets/svg/vue.svg"
import resumePDF from "../assets/pdf/webdev-resume.pdf"
import Layout from "./layout/Layout"

export default () => {
    const secRef = useRef(null)

    const scrollDown = () => {
        secRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
        })
    }

    return (
        <Layout>
            <Head title="Home" />
            <section className={homeStyles.landing}>
                <div className={homeStyles.landing__content}>
                    <h2>
                        Hi there! I'm <br />
                        <span>Dakshraj Sharma </span> <br />I do fullstack web
                        development
                    </h2>
                </div>
                <div>
                    <img
                        src={developerOnDeskSVG}
                        className={homeStyles.landing__svg}
                        alt="A developer on a desk"
                    />
                </div>
                <div className={homeStyles.landing__content}>
                    <p>
                        From the frontend to the backend to the cloud — I can do
                        it all. Take a look around to learn what I've been up
                        to, read by blog. <br />
                    </p>
                    <br />
                    <button onClick={scrollDown} className={homeStyles.button}>
                        Learn More
                    </button>
                    <a
                        className={[
                            homeStyles.landing__content__resumebutton,
                            homeStyles.button,
                        ].join(" ")}
                        href={resumePDF}
                    >
                        My Resume
                    </a>
                </div>
            </section>
            <FrontendSection secref={secRef} />
        </Layout>
    )
}

const FrontendSection = ({ secref }) => {
    return (
        <section ref={secref} className={homeStyles.frontend}>
            <h3>Frontend Development</h3>
            <div className={homeStyles.hr}></div>

            <p>
                Skilled in HTML/CSS/JS, the basic building blocks of the
                internet's pretty frontend, I use my skills to provider
                interactive, user-friendly interfaces.
            </p>
            <div>
                <img
                    src={frontendSVG}
                    className={homeStyles.landing__svg}
                    alt="Frontend Development"
                />
            </div>
            <p>
                Javascript is the godfather of the web, and I love Javascript.
                Over the last years I have taught myself{" "}
                <strong>
                    <a
                        href="https://reactjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        React
                    </a>
                </strong>
                ,{" "}
                <strong>
                    <a
                        href="https://angular.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Angular
                    </a>
                </strong>
                , and{" "}
                <strong>
                    <a
                        href="https://vuejs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Vue
                    </a>
                </strong>
                , the big boys in the frontend development scene.
            </p>
            <div className={homeStyles.skillSVGs}>
                <div className={homeStyles.row}>
                    <img
                        src={reactSVG}
                        className={homeStyles.tech__svg}
                        alt="React"
                    />
                    <img
                        src={angularSVG}
                        className={homeStyles.tech__svg}
                        alt="Angular"
                    />
                    <img
                        src={vueSVG}
                        className={homeStyles.tech__svg}
                        alt="Vue"
                    />
                </div>
            </div>
            <p>
                These days, I've been dabbling with{" "}
                <strong>
                    {" "}
                    <a
                        href="https://www.gatsbyjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Gatsby
                    </a>
                </strong>{" "}
                (This site is, in fact, build with Gatsby!). I wish also to soon
                work with
                <strong>
                    {" "}
                    <a
                        href="https://gridsome.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Gridsome
                    </a>
                </strong>
                . Another thing I've been wanting to try out are SSR frameworks
                like{" "}
                <strong>
                    <a
                        href="https://nextjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Next.JS
                    </a>
                </strong>{" "}
                with React and{" "}
                <strong>
                    <a
                        href="https://nuxtjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        NuxtJS
                    </a>
                </strong>{" "}
                with Vue.
            </p>
        </section>
    )
}

const BackendSection = ({ secref }) => {
    return (
        <section ref={secref} className={homeStyles.frontend}>
            <h3>Frontend Development</h3>
            <div className={homeStyles.hr}></div>

            <p>
                Skilled in HTML/CSS/JS, the basic building blocks of the
                internet's pretty frontend, I use my skills to provider
                interactive, user-friendly interfaces.
            </p>
            <div>
                <img
                    src={frontendSVG}
                    className={homeStyles.landing__svg}
                    alt="Frontend Development"
                />
            </div>
            <p>
                Javascript is the godfather of the web, and I love Javascript.
                Over the last years I have taught myself{" "}
                <strong>
                    <a
                        href="https://reactjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        React
                    </a>
                </strong>
                ,{" "}
                <strong>
                    <a
                        href="https://angular.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Angular
                    </a>
                </strong>
                , and{" "}
                <strong>
                    <a
                        href="https://vuejs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Vue
                    </a>
                </strong>
                , the big boys in the frontend development scene.
            </p>
            <div className={homeStyles.skillSVGs}>
                <div className={homeStyles.row}>
                    <img
                        src={reactSVG}
                        className={homeStyles.tech__svg}
                        alt="React"
                    />
                    <img
                        src={angularSVG}
                        className={homeStyles.tech__svg}
                        alt="Angular"
                    />
                    <img
                        src={vueSVG}
                        className={homeStyles.tech__svg}
                        alt="Vue"
                    />
                </div>
            </div>
            <p>
                These days, I've been dabbling with{" "}
                <strong>
                    {" "}
                    <a
                        href="https://www.gatsbyjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Gatsby
                    </a>
                </strong>{" "}
                (This site is, in fact, build with Gatsby!). I wish also to soon
                work with
                <strong>
                    {" "}
                    <a
                        href="https://gridsome.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Gridsome
                    </a>
                </strong>
                . Another thing I've been wanting to try out are SSR frameworks
                like{" "}
                <strong>
                    <a
                        href="https://nextjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Next.JS
                    </a>
                </strong>{" "}
                with React and{" "}
                <strong>
                    <a
                        href="https://nuxtjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        NuxtJS
                    </a>
                </strong>{" "}
                with Vue.
            </p>
        </section>
    )
}
