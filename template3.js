import React from 'react'

function Template3() {
  return (
    <div id="template3">
        <div id="main">
      <div id="resumehead">
      <h1 align="start" id="he1">{data[0].name}</h1>
      
      </div>
      <div id="dp">
          <div id="details" >
            <div id="phn"><pre><b>phone</b>      :</pre><p id="phn-no">{data[0].phno}</p></div>
            <div id="Email"><pre><b>Email</b>      :</pre><p id="em">{data[0].email}</p></div>
            <div id="lctn"><pre><b>Adress</b>     :</pre><p id="adrs">{data[0].adress}</p></div>
            <div id="lctn"><pre><b>place</b>       :</pre><p id="adrs">{data[0].place}</p></div>
            <div id="lctn"><pre><b>state</b>       :</pre><p id="adrs">{data[0].place}</p></div>

          </div>
        
          <div id="profile">
            <div id="pro">PROFILE</div>
            <div id="pro-info">{data[1].profile}</div>
          </div>
        </div><hr></hr>
        <div id="SEE">
          <div id="sked-ex">
              <div id="sked">
                <div id="skills">
                  <div id="skl">SKILLS</div>
                  <ul id="skill">
                    <li id="skill-1">{data[1].skill1}</li>
                    <li id="skill-2">{data[1].skill2}</li>
                    <li id="skill-3">{data[1].skill3}</li>
                    <li id="skill-4">{data[1].skill4}</li>
                    <li id="skill-5">{data[1].skill5}</li>
                    <li id="skill-5">{data[1].skill6}</li>
                  </ul>
                </div>
                <div id="separator"></div><hr></hr>

                <div id="edu">EDUCATION
                  <div id="eng"><h5>{data[1].prof}</h5>
                  <div id="eng-clg"><h6>{data[1].profinst}</h6></div>
                  <div id="eng-tym">{data[1].profyear}</div>
                  </div>
                  <div id="inter"><h4>Intermediate</h4></div>
                  <div id="inter"><h5>{data[1].plus2}</h5>
                  <div id="int-clg"><h6>{data[1].plus2per}</h6></div>
                  <div id="int-tym">{data[1].plus2year}</div>
                  </div>
                  <div id="school"><h4>Class X</h4></div>
                  <div id="school">{data[1].sscinst}<h5></h5>
                  <div id="scl-clg"><h6>{data[1].sscper}</h6></div>
                  <div id="scl-tym">{data[1].sscyear}</div>
                  </div>
                </div>
              </div>
              <div id="ex">
                <div id="exp">EXPERIENCE
                <div id="intsp"><h5>InternShip</h5>
                <div id="is">explain about your internship and the courses you have learned in the internship</div>
                </div>
                  <div id="hack"><h5>Hackathon</h5>
                    <div id="hck">explain about your Hackathon and the courses you have learned in the hackathon.Describe about the project you have done </div>
                  </div>
                </div><hr></hr>
                <div id="strengths">
                  <div id="st">STRENGTHS</div>
                    <ul id="stren">
                        <li id="strength-1">{data[3].strength1}</li>
                        <li id="strength-2">{data[3].strength2}</li>
                        <li id="strength-3">{data[3].strength3}</li>
                        <li id="strength-4">{data[3].strength4}</li>
                        <li id="strength-5">{data[3].strength5}</li>
                        <li id="strength-5">{data[3].strength6}</li>

                      </ul>
                  
                </div>
              </div>
              
          </div>
          
        </div><hr></hr>
        <div id="projects">
          <div id="pro">PROJECTS</div>
          <ul id="pro-list">
                        <li id="project-1"><h5>{data[3].pn1}</h5>
                        <div id="pro-1"></div>{data[3].pn1d}</li>
                        <li id="project-2"><h5>{data[3].pn2}</h5>
                        <div id="pro-1"></div>{data[3].pn2d}</li>
                        <li id="project-3"><h5>{data[3].pn3}</h5>
                        <div id="pro-1"></div>{data[3].pn3d}</li>
                        
                      </ul>
        </div><hr></hr>
    </div>
    </div>
  )
}
export default Template3();