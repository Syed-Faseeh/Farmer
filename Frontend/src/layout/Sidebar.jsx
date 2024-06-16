import React from 'react'

const Sidebar = () => {
  return (
    <aside>
      <header style={{ position: 'fixed' }}>
            <div className="d-flex flex-column flex-shrink-0 sidebar-wrap">
              <a href="/" className="text-decoration-none logo-wrap">
                <div className="icon-wrap">
                <i className="fab fa-slack"></i>
                  </div> <span className="ps-1 fs-4 text-warning">LOGO</span>
                </a>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                  <li className="nav-item">
                    <a href="#" className="nav-link active" aria-current="page">
                      <div className="icon-wrap">
                        <i className="fas fa-home"></i>
                      </div>
                      <span> Home</span>
                    </a>
                  </li>
                  <li>
                    <a href="/Dashboard" className="nav-link">
                      <div className="icon-wrap"> 
                        <i className="fas fa-tachometer-alt"></i>
                      </div>
                      <span>Dashboard</span>
                    </a>
                  </li>
                  <li>
                    <a href="/farmerregistration" className="nav-link">
                      <div className="icon-wrap">
                        <i className="fab fa-first-order"></i>
                      </div>
                      <span>Register Farmers</span>
                    </a>
                  </li>
                  <li>
                    <a href="/WeeklyReport" className="nav-link">
                      <div className="icon-wrap">
                        <i className="fab fa-product-hunt"></i>
                      </div>
                      <span>Add Weekly Reports</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link">
                      <div className="icon-wrap">
                        <i className="fab fa-intercom"></i>
                      </div>

                      <span>Customers</span>
                    </a>
                  </li>
                </ul>
                <hr />
              </div>
            </header>
    </aside>
  )
}

export default Sidebar
