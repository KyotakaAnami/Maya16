import chalk from 'chalk';

const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.white(color)(text);
};

const bgcolor = (text, bgcolor) => {
    return !bgcolor ? chalk.green(text) : chalk.bold.bgRgb(bgcolor)(text);
};

export {
    color,
    bgcolor
};
