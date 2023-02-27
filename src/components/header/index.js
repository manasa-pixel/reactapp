import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-info">
    <div class="container-fluid">
        {/* <a href="#" class="navbar-brand">
            <img src="images/logo.svg" height="28" alt="CoolBrand"/>
        </a> */}
        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav">
                <Link to='/home' class="nav-item nav-link active mx-5">Home</Link>
                <Link to='/about' class="nav-item nav-link active mx-5">About</Link>
                <Link to='/users' class="nav-item nav-link active mx-4">Users</Link>
            </div>
            {/* <div class="navbar-nav ms-auto">
                <a href="#" class="nav-item nav-link">Login</a>
            </div> */}
        </div>
    </div>
</nav>
        </div>
    );
}

export default Header;