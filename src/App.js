import React from "react";
import './App.css';

export default function App() {            
    return (
        <div className="whole">
          <NavBar/>
          <HomePage/>
        </div>
    )
}
let HomeTab= true;

function NavBar(){
  return(
    
    <head className="navbar">
      <button onClick={About}>About</button>
      <button onClick={Projects}>Projects</button>
      <button onClick={Background}>Skills </button>
      <button onClick={Education}>Education</button>
     
      <button onClick={ContactMe}> Contact me </button>
    </head>
    
  )
}


function HomePage(){
  

  return(
    <div className="replace" >
    <nav className="home-page-nav">
      <div className="name-photo-div">
        <div className="name-div">
          <p>I'm</p>
          <h1> Mohamad </h1>
          <h1>Hammoud</h1>
          <p className="discription">Greetings! I'm currently a third-year software engineer. My inherently positive outlook makes collaboration a pleasure, as I find joy in working alongside others. Approachability and an easy-going nature are my strengths, creating an environment conducive to productive interactions. Your feedback is immensely valuable to me as it aids in my personal growth</p>
        </div>
        <div className="photo-div">
          <img src="me1111.png" className="image-right" alt=""></img>
        </div>
      </div>
      
      
      
    </nav>
    </div>
  )
}

function Projects(){
  const kkk= `<div class=whole-projects>
  <div class="Projects-div"> 
  
  <div>
  
  <h2>1.Lotion:</h2>
  <div class="para">I've crafted Lotion: using Python, React, and Terraform to sync with my AWS account via infrastructure as code. It autonomously generates S3 buckets, hosting your notes with effortless elegance</div>

  <div>Link to Github:</div>
  <span><a href=" https://github.com/moe3344/moe3344-Lotion" target="_blank" > https://github.com/moe3344/moe3344-Lotion </a></span>
  <div>Deployment Link:</div>
  <a href="https://main--superlative-souffle-8cb99e.netlify.app/notes" target="_blank" >https://main--superlative-souffle-8cb99e.netlify.app/notes </a> 

  </div>
  
  <img src="Lotion.png" alt ='' class ="Lotion-picture"></img>
  </div>
  <div>
  <div class="Projects-div"> 
  
  <div>
  
  <h2>2.Wordle:</h2>
  <div class="para">I have developed an engaging game called "Wordle" using a combination of JavaScript, HTML, and CSS. This dynamic game fetches words from an API endpoint and generates corresponding hints for each word. Moreover, the game boasts a dark mode feature along with a plethora of other enhancements to elevate the user experience</div>

  <div>Link to Github:</div>
  <span><a href=" https://github.com/moe3344/Wordle-game" target="_blank" >https://github.com/moe3344/Wordle-game</a></span>
  <div>Deployment Link:</div>
  <a href="https://fastidious-brioche-717100.netlify.app/" target="_blank" >https://github.com/moe3344/Wordle-game.git </a> 

  </div>
  
  <img src="Wordle.png" alt ='' class ="Lotion-picture"></img>
  </div>
  </div>

  <div>
  <div class="Projects-div"> 
  
  <div>
  
  <h2>3.Wildlife Rescue Centre (EWR) Volunteer Schedular:</h2>
  <div class="para">In this project, I used Java and MySQL to create a zoo schedule based on animal data, treatments, and feeding times. I established a database connection, designed various classes with object-oriented principles including inheritance and composition. The scheduling logic was carefully developed to ensure accurate priorities.

  I utilized interfaces for shared behaviors, conducted JUnit testing, and built a GUI window. This window suggests adjustments for a functional schedule, and upon confirmation, displays the finalized schedule. Additionally, a text file can be generated for printing purposes.
  
  In essence, this project merges Java and MySQL to construct a smart zoo schedule. Through streamlined design, rigorous testing, and user-friendly interaction, the project produces a practical schedule presentation for efficient zoo management.
  
  
  
  
  
  </div>

  <div>Link to Github:</div>
  <span><a href="https://github.com/moe3344/Zoo-schedule-ava-mysql-moe3344.git" target="_blank" > https://github.com/moe3344/Zoo-schedule-ava-mysql-moe3344.git</a></span>
  <div></div>


  </div>
  
  <img src="java-pro.png" alt ='' class ="Lotion-picture"></img>
  </div>
  </div>
  <div>
  <div class="Projects-div"> 
  
  <div>
  
  <h2>4.Museum-Project</h2>
  <div class="para">This project encompassed meticulous database design with an Enhanced Entity-Relationship diagram. Translated to a relational model, SQL queries enabled diverse retrievals. Triggers streamlined updates, while a Python app facilitated user-friendly interaction. The journey highlighted the interplay of design choices and real-world implementation, offering insights into effective database management. In a data-driven world, mastering architecture, queries, and application is essential. This project bridged theory and practice, showcasing the multidisciplinary nature of efficient database management.





  
  
  
  
  
  </div>

  <div>Link to Github:</div>
  <span><a href="https://github.com/Maan-Khedr-ENSF-300/museum-project-ctrl-alt-elite.git" target="_blank" > https://github.com/Maan-Khedr-ENSF-300/museum-project-ctrl-alt-elite.git</a></span>
  <div></div>


  </div>
  
  <img src="relation.png" alt ='' class ="Lotion-picture"></img>
  </div>
  </div>
  <div>
  <div class="Projects-div"> 
  
  <div>
  
  <h2>5.Comprehensive Data Structures Library</h2>
  <div class="para">
  The project's core aim is to craft a comprehensive data structures and algorithms library. It covers diverse categories of data structures, available in Java or Python. The library's structure is organized into subfolders, distinguishing between linear (e.g., linked lists, stack, queue) and tree structures. Notably, a 'Graphalgo' folder houses graph algorithm methods.
  
  Implementation options encompass Java or Python, spanning linked lists (SLL, DLL, CSLL, CDLL), stack, queue, binary search trees (BST), AVL trees, and vector-based heaps. Graph algorithms (BFS, DFS, Dijkstra) are integrated. Comprehensive testing via either a main app program or unit tests (Junit for Java, pytest/unittest for Python) ensures reliability.

  
  </div>

  <div>Link to Github:</div>
  <span><a href="https://github.com/MirzaHB/ENSF338-FinalPrj.git" target="_blank" > https://github.com/MirzaHB/ENSF338-FinalPrj.git</a></span>
  <div></div>


  </div>
  
  <img src="data.png" alt ='' class ="Lotion-picture" id='last-pic'></img>
  </div>
  </div>
  </div>
  `
  HomeTab=false;
  return (
    <div className="projects-section" >
      {document.querySelector('.replace').innerHTML=kkk}
    </div>
  );
}
function Background(){
  const kkk= `<div class="skills-div">
    <div class='languages-div'>
    <div>
    <h2>Languages:</h2>
    <ul>
      <li> JAvaScript</li>
      <li> Python</li>
      <li>Java </li>
      <li> C/C++</li>
      <li>SQL </li>
      <li> HTML</li>
      <li>CSS </li>
    </ul>
    </div>
    <img  src="Languages (1).jpg"alt="" class='Languages-picture'></img>
    
    
    </div>
    <div class='languages-div'>
    <div>
    <h2>Database:</h2>
      <ul>
      <li>MySQL</li>
      <li>MSSQL</li></ul>
      </div>
      <img  src="Languages (2).jpg"alt="" class='Languages-picture'></img>
    </div>
    <div class='languages-div'>
    <div>
    <h2>Fornt-end:</h2>
    <ul>
      <li>React</li>
      <li>React Native</li></ul>
    </div>
    <img  src="Languages (3).jpg"alt="" class='Languages-picture'></img>
    </div>
    <div class='languages-div'>
    <div>
    <h2>Cloud:</h2>
    <ul>
      <li>AWS(Amazon web services)</li>
      
    </div>
   
    </div>
    
  </div>`
  
   
  HomeTab=false;
        document.querySelector('.replace').innerHTML=kkk;
  
}
function Education(){
  

  const lll=`<div class="Education-whole">
    <ul>
      <li class='Education-item'>
        <img src="R.jpeg" alt=""  class="u-of-c-logo"></img>
        <div class="school-info">
        <h2>University of Calgary</h2>
        <p>2021-2025 currently third year software engineering </p>
        </div>
      </li>
    </ul>
  </div>`
  HomeTab=false;
  return(
   
    <div className="projects-section">
      {document.querySelector(".replace").innerHTML=lll}
    </div>
  );

} 
function About(){
  
  const lll=`<div class="home-page-nav" >
  <nav class="home-page-nav">
  <div class="name-photo-div">
    <div class="name-div">
      <p>I'm</p>
      <h1> Mohamad </h1>
      <h1>Hammoud</h1>
      <p class="discription">Greetings! I'm currently a third-year software engineer. My inherently positive outlook makes collaboration a pleasure, as I find joy in working alongside others. Approachability and an easy-going nature are my strengths, creating an environment conducive to productive interactions. Your feedback is immensely valuable to me as it aids in my personal growth</p>
    </div>
    <div class="photo-div">
      <img src="me1111.png" className="image-right" alt=""></img>
    </div>
  </div>
  
  
  <div class="bottom-details">
    <p class="detail"> &#9827; Multi-club member</p>
    <p class="detail">&#9917; Soccer player</p>
    <p class="detail"> &#128188; Small-business owner</p>
    <p class="detail"> &#128104; Volunteer</p>
    <p class="detail"> &#127982; Hiker</p>
  </div>
</nav>
</div>`
  HomeTab=false;
  return(
   
    <div className="projects-section">
      {document.querySelector(".replace").innerHTML=lll}
    </div>
  );
}
function ContactMe(){
 const ppp=` <div class='con'>

    <p> <img src="Gmail-Logo.png" class='insta' alt=""></img><a href="mailto:mohamad.hammoud3344@gmail.com" class="email-link">mohamad.hammoud3344@gmail.com</a></p>
   
    <p> <img src="outlook.jpeg" class='insta' alt=""> <a href="mailto:mohamad.hammoud1@ucalgary.ca" class="email-link">mohamad.hammoud1@ucalgary.ca</a></p>
    
    
    
    <div>shoot me a message by clicking on the email addresses above &#x261D;.... </div>
  
    
  </div>`
  document.querySelector(".replace").innerHTML=ppp
  HomeTab=false;
}