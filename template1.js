import './App. css'


function Template1(){

return(
<div id="template1">
<div>
    <h3>Name:</h3>   <p >{data[0].name}</p>  
    <h3>Adress:</h3> <p >{data[0].adress}</p>
    <h3>place:</h3>  <p >{data[0].place}</p>  
    <h3>state:</h3> <p>{data[0].state}</p>  
    <h3>phno:</h3>   <p >{data[0].phno}</p>
    <h3>Email:</h3>  <p >{data[0].email}</p>
    
  </div>        <hr></hr>
    
    <h2 >carrer objective:</h2>
    <p> {data[1].profile}</p>
<h2>work experience</h2>   
<ul>
    <h3>kind of experience</h3><p >{data[2].KOE1}</p>
  <ol>
      <li >{data[2].KOEG11}</li>
      <li >{data[2].KOEG12}</li>
      <li >{data[2].KOEG13}</li>
  </ol>  
  <h3>kind of experience</h3><p >{data[2].KOE2}</p>
  <ol>
  <li >{data[2].KOEG21}</li>
  <li >{data[2].KOEG22}</li>
  <li >{data[2].KOEG23}</li>
  </ol>
  <h3>kind of experience</h3><p >{data[2].KOE3}</p>
  <ol>
  <li >{data[2].KOEG31}</li>
  <li >{data[2].KOEG32}</li>
  <li >{data[2].strength}</li>
  </ol>
    
    
    
</ul>
    
<h2>skills</h2>    
<ol>
    <li>{data[1].skill1}</li>
    <li>{data[1].skill2}</li>
    <li>{data[1].skill3}</li>
    <li>{data[1].skill4}</li>
    <li>{data[1].skill5}</li>
    <li>{data[1].skill6}</li>
    
    
</ol>
<h2>proffesional qualification</h2>
<table border="2" cellpadding="10">
 <tr>
     <th>Degree</th><p ></p>

   
        <th>Institiute </th>
        <th>Year</th>
    </tr>
    <tr><td >{data[1].prof}</td>
    <td >{data[1].profinst}</td>
    <td >{data[1].profyear}</td></tr>
    
    
    
   
</table>
    <h2>Education</h2>
    <table border="2" cellpadding="10">
 <tr>
     <th>Degree</th>

   
        <th>Institiute </th>
        <th>Year</th>
        <th>percentage</th>
    </tr>
    <tr><td>plus 2</td>
    <td >{data[1].plus2}</td>
    <td >{data[1].plus2per}</td>
    <td >{data[1].plus2year}</td></tr>

    <tr><td>ssc</td>
    <td>{data[1].sscinst}</td>
    <td>{data[1].sscper}</td>
    <td>{data[1].sscyear}</td></tr>
    
    
    
   
</table>
<h2>strengths</h2>    
<ol>
    <li >{data[3].strength1}</li>
    <li >{data[3].strength2}</li>
    <li >{data[3].strength3}</li>
    <li >{data[3].strength4}</li>
    <li >{data[3].strength5}</li>
    <li >{data[3].strength6}</li>

    
    
</ol>   
<h2>projects done</h2>
<label>project name      :</label><p>{data[3].pn1}</p>
Description      :<p >{data[3].pn1d}</p>
<label>project name      :</label><p>{data[3].pn2}</p>
Description      :<p >{data[3].pn2d}</p>
<label>project name      :</label><p>{data[3].pn3}</p>
Description      :<p >{data[3].pn3d}</p>
</div>
)
}
export default Template1();