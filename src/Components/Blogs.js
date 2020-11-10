import React from 'react'
import binary from '../pictures/binary_trans.png'
import api from '../pictures/api.png'
import plural from '../pictures/plural.png'

const blogs = [
    {
        url: "https://medium.com/@jakelozano94/how-javascript-eventually-becomes-0110101110-f81008da1a97",
        img: binary,
        about: "A quick run down of how exactly JavaScript goes from the Text Editor to the Browser",
        title: "JavaScript to 0110101110",
        language: "Javascript",
        tech: "Compiling, Assembly, Transistors"
    },
    {
        url: "https://medium.com/@jakelozano94/working-with-apis-a8a211b26a1f",
        img: api,
        about: "Guide on what to look for in an API before you start, what to do while you're using it, and what to do after",
        title: "Working with APIs",
        language: "Javascript",
        tech: "APIs, Fetch Requests, Research"
    },
    {
        url: "https://medium.com/@jakelozano94/forcing-pluralize-to-work-for-you-301a0dd3a9ea",
        img: plural,
        language: "Ruby",
        about: "Pluralize is fun until it isn't. How to coearce pluralize",
        title: "Forcing #pluralize to Work for You",
        tech: "Rails, Monkeypatch "
    }
]

let blogHandler = (blogs) => {

        return blogs.map(blog =>
            <div className="center">
            <div className="card">
              <div className="additional">
                <div className="user-card">
                  <div className="level center">
                        <br/><br/><br/>
                  </div>
                  <div className="points center">
                  </div>
                  <img src={blog.img}/>
                </div>
                <div className="more-info">
                  <h1>{blog.title}</h1>
                  <div class="coords">
                    <span>Tech</span>
                    <span>{blog.tech}</span>
                  </div>
                  <div class="coords">
                    <span>Language</span>
                    <span>{blog.language}</span>
                  </div>
                  <div className="stats">
                    <div>
                        <div className="title"></div>
                        <a href={blog.url} target="_blank">
                            <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" fill="#ffffff" clip-rule="evenodd"><path d="M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537v-10.91l-5.389 13.688h-.728l-6.275-13.688v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404h-7.148v-.404l2.521-3.058c.27-.279.39-.67.325-1.052v-10.608z"/></svg>
                        </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="general">
                <h1>{blog.title}</h1>
                <p>{blog.about}</p>
                {/* <span className="more">Mouse over the card for more info</span> */}
              </div>
            </div>
            </div>
    )}

function Blogs(){

    return (
        <div className="projects">
          <div id="proj_title">
            <h1> Blogs</h1>
          </div>
          <div id="proj_cards_cont">{blogHandler(blogs)}</div>
     </div>
    )
}

export default Blogs