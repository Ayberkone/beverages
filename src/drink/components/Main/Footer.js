import React, { Component } from 'react';

class Footer extends Component {

    render() {
        return (
            <footer id="site-footer" className="p-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 text-center">
                            <ul className="social-icons mb-3">
                                <li><a href="https://www.linkedin.com/in/ayberk-baytok/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i> </a> </li>
                                <li><a href="https://github.com/Ayberkone" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i> </a> </li>
                            </ul>
                            <p className="copyrights"> CyanGate Demo. Made by Ayberk Baytok.</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
