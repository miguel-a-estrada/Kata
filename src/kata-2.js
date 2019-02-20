export function kata2(obj, def, path) {
    if (path) {
        return theWayOfPath(obj,def,path);
    }
    else {
        return function theWayOfPath2(postpath){
            return theWayOfPath(obj,def,postpath);
        }        
    }
}

function theWayOfPath(obj, def, path) {
    let newObj = objPath(obj,path)
    
    if (newObj) {        
        return (newObj);
    }
    else {
        return def;
    }
}
function objPath(obj,path) {
    let newPath = path.split(".");
    return newPath.reduce((last, actual) => last && last[actual], obj)
}