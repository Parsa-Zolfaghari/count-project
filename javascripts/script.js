const getCounterEl = document.querySelector('.counter_value');
const getIncreaseEl = document.querySelector('.counter_btn--increase');
const getdecreaseEl = document.querySelector('.counter_btn--decrease');
const getResetBtnEl = document.querySelector('.counter_reset-btn');

getIncreaseEl.addEventListener('click', function () {
    const getCounterValue = getCounterEl.textContent;
    const setNewCounterValueAsNumber = +getCounterValue;
    const setLastValue = setNewCounterValueAsNumber + 1;
    getCounterEl.textContent = setLastValue;
});

getdecreaseEl.addEventListener('click', function () {
    const getCounterValue = getCounterEl.textContent;
    const setNewCounterValueAsNumber = +getCounterValue;
    const setLastValue = setNewCounterValueAsNumber - 1;
    getCounterEl.textContent = setLastValue;

});

getResetBtnEl.addEventListener('click',function (){
    getCounterEl.textContent = 0;
});

document.addEventListener('keydown',function () {
    const getCounterValue = getCounterEl.textContent;
    const setNewCounterValueAsNumber = +getCounterValue;
    const setLastValue = setNewCounterValueAsNumber + 1;
    getCounterEl.textContent = setLastValue;
});