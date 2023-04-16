import React, { useEffect } from 'react';
import { Link, Outlet, useLocation } from "react-router-dom";

const Projects = () => {
  const location = useLocation()
  
  // Offset every second blog post for better readability.
  useEffect(() => {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    let blogPosts = document.getElementsByClassName("BlogPost");
    if (blogPosts.length > 0) {
      if ((0.6 * vw) > (2 * blogPosts[0].offsetWidth)) {
        for (let i = 1; i < blogPosts.length; i += 2) {
          blogPosts[i].style.marginTop = "200px";
        }
      } else {
        for (let i = 1; i < blogPosts.length; i += 2) {
          blogPosts[i].style.marginTop = "min(5%, 100px)";
        }
      }
      blogPosts[0].scrollIntoView({block: "start", behavior: "smooth", })
    }
  // TODO: Update with change in viewport width.
  }, [location])


  return (
    <div className="Content">

      <h1 className="CenterText">Current Projects:</h1>

      <nav>
        <div className="Grid">
          <div className="Project">
            <h3>Lab</h3>
            <Link to="/projects/lab">Lab</Link>
          </div>

          <div className="Project">
            <h3>Outreach</h3>
            <Link to="/projects/outreach">Outreach</Link>
          </div>

          <div className="Project">
            <h3>Sensor</h3>
            <Link to="/projects/sensor">Sensor</Link>
          </div>

          <div className="Project">
            <h3>Digital Twin</h3>
            <Link to="/projects/twin">Digital Twin</Link>
          </div>

        </div>
      </nav>
      
      {/* Render Blog Posts from the selected project. */}
      <hr style={{marginTop:"50px"}}/>
      <div className="Grid">
        <Outlet />
      </div>
    </div>
  );
}

export default Projects;