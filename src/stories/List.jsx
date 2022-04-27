import React from 'react';
export default function({task:{id,title,state}, onArchiveTask, onPinTask}){
    return(
        <div>
            <input type="text" value={title} readOnly={true}/>
        </div>
    )
}