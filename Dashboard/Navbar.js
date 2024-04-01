import React from 'react'

const Navbar = () => {
    return (
        <nav class="navbar bg-body-tertiary fixed-top">
            <div class="container-fluid">
            <div class="row">
                    <div class="col-2">
                        <button class="navbar-toggler" type="button1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div class="col-10 ps-3 pt-2 d-flex justify-content-center align-items-center">
                        <p>NSE International Exchange</p>
                    </div>
                </div>
                <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav  pe-3">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li>
                                        <hr class="dropdown-divider" />
                                    </li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form class="d-flex mt-3" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
                <div className="btn-group dropstart">
                    <a href="#"><i class="fa-regular fa-bell pe-4 pt-2"></i></a>
                    <button type="button" class="btn btn-secondary dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                        M
                    </button>
                    <ul className="dropdown-menu me-3">
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li><a className="dropdown-item" href="#">Change Password</a></li>
                        <li><a className="dropdown-item" href="#">Logout</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar