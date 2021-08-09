let ask = (question, yes, no) => {
    return (confirm(question)) ? yes() : no();
}

ask ("Do you agree?", 
    () => {alert("You agreed.")},
    () => {alert("You cancelled the execution.")}
);