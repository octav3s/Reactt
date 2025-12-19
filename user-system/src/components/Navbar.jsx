<li className="nav-item">
    <NavLink
        to={"/register"}
        className={
            'nav-link ' +
            (status => status.isActive ? 'active' : '')
        }
    >
        Register
    </NavLink>
</li>