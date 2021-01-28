import React, { useState } from 'react'
import TaskContainer from "./TaskContainer"

const TaskListContainer = () => {
    const [tasks, setTasks] = useState(
        [{
            id: 1,
            name: "My task",
            task: [{
                id: 1,
                header: "Campus build",
                text: "Lorem",
                date: "20/12/2021",
                isCompleted: true,
            }]

        }]
    )

    const handleNewTaskContainer = (idx, header) => {
        const newTasks = tasks.map((task) => {
            if (idx === task.id) {
                const newTask = {
                    id: task.task.length + 1,
                    header: header,
                    text: '',
                    date: '',
                    isCompleted: false
                }
                task.task.push(newTask)
            }
            return task
        })
        setTasks(newTasks)
    }

    const handleInnerTaskChange = (idx, inneridx, header, text, date, isCompleted) => {
        const newTasks = tasks.map((task) => {
            if (idx === task.id) {
                const newTask = task.task.map((t) => {
                    if (t.id === inneridx) {
                        t.header = header
                        t.text = text
                        t.date = date
                        t.isCompleted = isCompleted

                    }
                    return t

                })
                task.task = newTask
                return (task)
            }
            else {
                return task
            }
        })
        setTasks(newTasks)
    }

    return (
        <div>
            <ul>
                {tasks.map((task) =>
                    <li> <TaskContainer id={task.id} name={task.name} task={task.task} handleInnerTaskChange={handleInnerTaskChange} handleNewTaskContainer={handleNewTaskContainer} />
                    </li>
                )}
            </ul>
        </div>
    )
}

export default TaskListContainer