import { TaskPage } from "../pages/task-page/TaskPage";

const routes = {
    "/tasks": TaskPage
}

export function router(){

    const path = window.location.pathname;

    const page = routes[path];

    if(!page){
        return "<h2>404 - page not found</h2>";
    }

    return page();
}