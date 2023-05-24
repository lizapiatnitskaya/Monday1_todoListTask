import React from "react";

type TypeProps={
    title:string
    tasks: TypeTasks[]
    students: string[]
}

type TypeTasks={
   taskId: number
   title:string
   isDone:boolean
}

export function Task(props:TypeProps){
    return(
      <div>
        <div>
            {props.title}
        </div>
        <div>
            <ol>
                {props.tasks.map((el:TypeTasks)=>{
                    return (
                        <li><input checked={el.isDone} type="checkbox"/>{el.title}</li>
                    )
                })}
            </ol>
            <ul>
                {props.students.map((el:string)=>{
                    return(
                        <li>{el}</li>
                    )
                })}
            </ul>
        </div>
      </div>
    )
}