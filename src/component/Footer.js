import React from 'react'

export default function Footer() {
    return (
        <>
            <>
                <footer>
                    <footer className="bg-dark text-center text-white">
                        {/* Grid container */}
                        <div>
                            <div className="container p-4 pb-0 " id='footericon'>
                                {/* Section: Social media */}
                                <section className="mb-4">
                                    {/* Facebook */}
                                    <a
                                        className="btn btn-outline-light btn-floating m-1"
                                        href="https://www.facebook.com/ahmedabughosh/"
                                        role="button"
                                    >
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                    {/* Instagram */}
                                    <a
                                        className="btn btn-outline-light btn-floating m-1"
                                        href="https://www.instagram.com/ahmed__abughosh/"
                                        role="button"
                                    >
                                        <i className="fab fa-instagram" />
                                    </a>
                                    {/* Linkedin */}
                                    <a
                                        className="btn btn-outline-light btn-floating m-1"
                                        href="https://www.linkedin.com/in/ahmad-abughaush-243238204/"
                                        role="button"
                                    >
                                        <i className="fab fa-linkedin-in" />
                                    </a>
                                    {/* Github */}
                                    <a
                                        className="btn btn-outline-light btn-floating m-1"
                                        href="https://github.com/Ahmad-abughaush"
                                        role="button"
                                    >
                                        <i className="fab fa-github" />
                                    </a>
                                </section>
                                {/* Section: Social media */}
                            </div>
                            {/* Grid container */}
                            {/* Copyright */}
                            <div
                                className="text-center p-3"
                                style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                            >
                                ©copy right:
                                <a className="text-white" href="https://mdbootstrap.com/">
                                    made by ahmad{" "}
                                </a>
                            </div>
                            {/* Copyright */}
                        </div>
                    </footer>
                </footer>


            </>

        </>
    )
}
