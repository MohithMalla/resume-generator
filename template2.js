
import './App. css'


function Template2(){

return(
<div id="template2">
    <div>
        <h3>NAME</h3><p id=" {data[0].name}">ABCDEFGHIHFJDN</p>
        <h3>adress</h3><p id=" {data[0].adress}">23456</p>
        <h3>contact no</h3><p id=" {data[0].phno}">nnnnn</p>
        <h3>Email</h3><p id=" {data[0].email}">xxx</p>     
    </div>
    <hr></hr>
<h3>Objective </h3>
 <p id=" {data[1].profile}">edmund edmund RSVP recollect uclid idiom idiom realm recommend explain explain explain recommend explain explain exhibit taxi scheck exits</p>
<h4></h4>   
<h3>Education</h3>
<ol>
  <li>passed course :<p id=" {data[1].prof}"></p>institiute name <p id="{data[1].profinst}"></p></li>
  <p id=" {data[1].profyear}"></p>
 <li>class XII:<p id=" {data[1].plus2}"> institiute name</p> </li> 
 <p id=" {data[1].plus2per}">2021</p><p id=" {data[1].plus2year}">percentage</p>
 <li>class X:<p id=" {data[1].sscinst}"> institiute name</p> </li> 
 <p id=" {data[1].sscper}">2021</p><p id=" {data[1].sscpyear}">percentage</p>

</ol>
<h3>projects done</h3>
<label>project name      :</label><p id=" {data[3].pn1}"></p>
Description      :<p id=" {data[3].pn1d}"></p>
<label>project name      :</label><p id=" {data[3].pn2}"></p>
Description      :<p id=" {data[3].pn2d}"></p>
<label>project name      :</label><p id=" {data[3].pn3}"></p>
Description      :<p id=" {data[3].pn3d}"></p>
<h3>Skills</h3>
<ul>
    <li id=" {data[1].skill1}">Skill1</li>
    <li id=" {data[1].skill2}">Skill2</li>
    <li id=" {data[1].skill3}">Skill3</li>
</ul>
<h3>Work Experience</h3>
<ul>
    <h3>kind of experience</h3><p id=" {data[2].KOE1}">xxx</p>
       <ul>
       <li id=" {data[2].KOEG11}">experience gained-1</li>
      <li id=" {data[2].KOEG12}">experience gained-2</li>
    </ul>
    <ul>
    <h3>kind of experience</h3><p id=" {data[2].KOE2}">xxx</p>
           <ul><li id=" {data[2].KOEG21}">experience gained-1</li>
      <li id=" {data[2].KOEG22}">experience gained-2</li></ul>
    </ul>
    
</ul>
<h3>Strengths</h3>
<ul>
<li id=" {data[3].strength1}">strength 1</li>
    <li id=" {data[3].strength2}">strength 2</li>
    <li id=" {data[3].strength3}">strength 3</li>
    <li id=" {data[3].strength4}">strength 4</li>
</ul>
<h4>Personal Details</h4>

</div>
)
}
export default Template2();