import React from 'react'
import PopUp from "./PopUp"
import TaskDetail from "./TaskDetail"


const TaskItem = ({ id, handleTaskContainer, header, text, date, isCompleted }) => {

    return (
        <div className="task-detail" >
            <PopUp id={id} handleTaskContainer={handleTaskContainer} header={header} text={text} date={date} isCompleted={isCompleted} handleTaskContainer={handleTaskContainer} />
            {isCompleted ?
                <TaskDetail header={header} text={text} date={date} isCompleted={isCompleted} />
                :
                null

            }
        </div>
    )
}

export default TaskItem
