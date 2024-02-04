import { useState,useEffect } from "react";
import './index.css';

export default function Form() {
    let pathname = window.location.pathname;
    let item={};
    
    let [name,setName] = useState("");
    let [education,setEducation] = useState("");
    let [experience,setExperience] = useState("");
    let [skills,setSkills] = useState("");
    let [projects,setProjects] = useState("");

    function changeData(e){
        setItem(item);
        console.log(e.target)
        if(e.target.id==="name"){
            setName(e.target.value);
            item.name=e.target.value
        }
        else if(e.target.id==="education"){
            setEducation(e.target.value);
            item.education=e.target.value
        }
        else if(e.target.id==="experience"){
            setExperience(e.target.value);
            item.experience=e.target.value
        }
        else if(e.target.id==="skills"){
            setSkills(e.target.value);
            item.skills=e.target.value
        }
        else if(e.target.id==="projects"){
            setProjects(e.target.value);
            item.projects=e.target.value
        }
        localStorage.setItem('item', JSON.stringify(item));
    }
    
    function setItem(item){
        item.name=name;
        item.education=education;
        item.experience=experience;
        item.skills=skills;
        item.projects=projects;
    }

    
    useEffect(() => {
        if(pathname==="/admin"){
            setItem(item);
            localStorage.setItem('item', JSON.stringify(item));
        }
        else {
            setFields();
            
        }
    },[]);

    function setFields(){
        let tempItem = JSON.parse(localStorage.getItem('item'));
        if(tempItem){
            setName(tempItem.name);
            setEducation(tempItem.education);
            setExperience(tempItem.experience);
            setProjects(tempItem.projects);
            setSkills(tempItem.skills);
        }
    }

    function handleStorage(){
        if(pathname==="/admin"){
            
        }
        else {
            setFields();
        }
    }
    window.addEventListener('storage', handleStorage) 
    
    let divBoxStyle={
        display:"flex",alignItems: "center",padding:"50px",justifyContent:"center"
    }

    return (
      <div>
        <form style={{textAlign:"center"}}>
            <div style={divBoxStyle}>
                <p>Name</p>
                {pathname==="/admin"?<input type="text" id="name" value={name} onChange={(e)=>{changeData(e)}}></input>:<p>{name}</p>}
            </div>
            <div style={divBoxStyle}>
                <p>Education</p>
                {pathname==="/admin"?<textarea type="text" id="education" value={education} onChange={(e)=>{changeData(e)}}></textarea>:<p>{education}</p>}
            </div>
            <div style={divBoxStyle}>
                <p>Experience</p>
                {pathname==="/admin"?<textarea type="text" id="experience" value={experience} onChange={(e)=>{changeData(e)}}></textarea>:<p>{experience}</p> }
            </div>
            <div style={divBoxStyle}>
                <p>Skills</p>
                {pathname==="/admin"?<textarea type="text" id="skills" value={skills} onChange={(e)=>{changeData(e)}}></textarea>:<p>{skills}</p> }
            </div>
            <div style={divBoxStyle}>
                <p>Projects</p>
                {pathname==="/admin"?<textarea type="text" id="projects" value={projects} onChange={(e)=>{changeData(e)}}></textarea>:<p>{projects}</p> }
            </div>
        </form> 
      </div>
    );
}