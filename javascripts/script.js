const getParentValue = document.querySelector('.counter');
const getCounterEl = document.querySelector('.counter_value');
const getIncreaseEl = document.querySelector('.counter_btn--increase');
const getdecreaseEl = document.querySelector('.counter_btn--decrease');
const getResetBtnEl = document.querySelector('.counter_reset-btn');
const getTitleEl = document.querySelector('.counter_title');
// Add Increase Event
function AddIncreaseEvent() {
    const getCounterValue = getCounterEl.textContent;
    const setNewCounterValueAsNumber = +getCounterValue;
    let setLastValue = setNewCounterValueAsNumber + 1;
    if (setLastValue > 20) {
        setLastValue = 20;
        getTitleEl.textContent = 'Limit ! Buy Pro For > 20';
    }
    if (setLastValue > 10) {
        getParentValue.style = 'background-color:green;'
    }
    getCounterEl.textContent = setLastValue;
}
getIncreaseEl.addEventListener('click', AddIncreaseEvent);
document.addEventListener('keydown', AddIncreaseEvent);
// Add Decrease Event
function AddDecreaseEvent() {
    const getCounterValue = getCounterEl.textContent;
    const setNewCounterValueAsNumber = +getCounterValue;
    let setLastValue = setNewCounterValueAsNumber - 1;
    if (setLastValue < 0) {
        setLastValue = 0;
    }
    if (setLastValue < 10) {
        getParentValue.style = 'background-color:#90d34c;'
    }
    if (setLastValue < 20) {
        getTitleEl.textContent = 'Fancy Counter';
    }
    getCounterEl.textContent = setLastValue;
}
getdecreaseEl.addEventListener('click', AddDecreaseEvent);
// Add Reset Event
function ResetEvent() {
    getCounterEl.textContent = 0;
    getParentValue.style = 'background-color:#90d34c;';
    getTitleEl.textContent = 'Fancy Counter';
}
getResetBtnEl.addEventListener('click',ResetEvent);



