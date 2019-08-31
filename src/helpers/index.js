import collatedTasks from '../constants';

export const collatedTasksExist = selectedProejct => 
    collatedTasks.find(task => task.key === selectedProject);
