import React from 'react'
import Head from 'next/head';
import Script from 'next/script'

const SectionsLink = () => {

    return (
        <div>
            <Head>
                {/* import external javascript */}
                <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></Script>
                <Script src="https://rawcdn.githack.com/akzhy/Vara/c55a1b40c15b808cdd4a047de95c905094be87db/src/vara.min.js"></Script>
                {/* <script type="text/javascript" src="..."></script> */}
                {/* <script type="text/javascript" src="/js/logbook.js"></script> */}
            </Head>
            <div className='flex align-middle'>
                <div id="container">
                    <div className="book">
                        <div className="first paper">
                            <div className="page front contents">
                                <div className="intro">
                                    <h2>Schedir<br/> 2022</h2>
                                    <h1>The<br/> Schedir</h1>
                                </div>
                            </div>
                            <div className=" page back1"></div>
                        </div>
                        <div className="side"></div>
                        <div className="bottom"></div>
                        {/* <div className="shadow"></div> */}
                    </div>
                </div>
                <div id="container">
                    <div className="book">
                        <div className="first paper">
                            <div className="page front contents">
                                <div className="intro">
                                    <h2>Schedir<br/> 2022</h2>
                                    <h1>The<br/> LogBook</h1>
                                </div>
                            </div>
                            <div className=" page back2"></div>
                        </div>
                        <div className="side"></div>
                        <div className="bottom"></div>
                        {/* <div className="shadow"></div> */}
                    </div>
                </div>
                <div id="container">
                    <div className="book">
                        <div className="first paper">
                            <div className="page front contents">
                                <div className="intro">
                                    <h2>Schedir<br/> 2022</h2>
                                    <h1>The<br/> Route</h1>
                                </div>
                            </div>
                            <div className=" page back3"></div>
                        </div>
                        <div className="side"></div>
                        <div className="bottom"></div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default SectionsLink;