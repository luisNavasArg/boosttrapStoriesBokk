import React from 'react';
import List from './List';

export default {
    component:List,
    title:'Task'
}
const template =args=><List {...args} />

export const Default =template.bind({}); 
Default.args={
    task:{
        id:'1',
        title:new Date.now(),
        state:'Por hacer',
        updatedAt:new Date.now(),
    }
}

export const Pinned =template.bind({}); 
Default.args={
    task:{
        ...Default.args.task,
        state:'En proceso...',
       
    },
};

export const Archived =template.bind({}); 
Default.args={
    task:{
        ...Default.args.task,
        state:'Lista...',
       
    },
};


