import {createStore} from 'redux';

import * as Shrugapillar from '../../src';

import * as Actions from './actions';
import reducer from './reducer';

function setupHeadControl(store){
    const el = document.querySelector('.head-control__select');
    const description = document.querySelector('.modal__controls-p');

    Shrugapillar.getAll().forEach(shrugapillar => {
        const definition = shrugapillar.getDefinition();
        const head = definition[Shrugapillar.TYPES.PLAIN].head;

        const headEl = document.createElement('option');
        headEl.value = shrugapillar.commonName;
        headEl.innerHTML = `${head} - ${definition.commonName}`;

        el.appendChild(headEl);
    });

    function update(){
        const state = store.getState();
        const def = Shrugapillar.get(state.selectedCommonName).getDefinition();
        description.innerHTML = def.description || '';
    }

    el.addEventListener('change', (evt) => {
        store.dispatch(Actions.setSelectedCommonName(evt.target.value));
    });

    store.subscribe(update);

    update();
}

function setupLengthControl(store){
    document.querySelector('.length-control__button--decrease')
            .addEventListener('click', evt => {
                evt.preventDefault();
                store.dispatch(Actions.changeLength(-1));
            });
    document.querySelector('.length-control__button--increase')
            .addEventListener('click', evt => {
                evt.preventDefault();
                store.dispatch(Actions.changeLength(1));
            });

    function update(){
        document.querySelector('.length-control__output').innerHTML =
                store.getState().length;
    }

    store.subscribe(update);

    update();
}

function setupOutputTypeControl(store){
    const form = document.querySelector('.modal__controls');
    const el = document.querySelector('.output-type-control');

    const initialState = store.getState();

    Object.keys(Shrugapillar.TYPES).forEach((type) => {
        const div = document.createElement('div');
        div.classList.add('output-type-control__type');
        div.innerHTML = `
            <input type="radio" name="outputType"
                    class="output-type-control__type-input"
                    id="${Shrugapillar.TYPES[type]}"
                    value="${Shrugapillar.TYPES[type]}"/>
            <label for="${Shrugapillar.TYPES[type]}"
                    class="output-type-control__type-label">
                ${type.toLowerCase()}
            </label>
        `;

        if (initialState.outputType === Shrugapillar.TYPES[type]){
            div.querySelector('input').checked = true;
        }

        div.querySelector('input').addEventListener('change', onChange);

        el.appendChild(div);
    });

    function onChange(evt){
        let selectedType;
        for (let outputTypeRadio of form.elements.outputType){
            if (outputTypeRadio.checked) selectedType = outputTypeRadio.value;
        }
        store.dispatch(Actions.setOutputType(selectedType));
    }
}


function setupOutput(store){
    const outputEl = document.querySelector('.output');
    const warningEl = document.querySelector('.modal__output-info--warning');

    outputEl.addEventListener('focus', () => outputEl.select());

    function update(){
        const state = store.getState();
        outputEl.className = 'output';
        outputEl.classList.add(`output--${state.outputType}`);

        outputEl.value = Shrugapillar.get(state.selectedCommonName).render({
            type: state.outputType,
            length: state.length,
        });

        if (state.outputType === Shrugapillar.TYPES.SLACK &&
                outputEl.value.length > 4000){
            warningEl.innerHTML = `Ruh roh! This shrugapillar is looking a
                    little long for slack. You message may not send.`;
        } else if (state.outputType === Shrugapillar.TYPES.TWITTER &&
                outputEl.value.length > 140){
            warningEl.innerHTML = `Ruh roh! This shrugapillar too long to fit
                    into a tweet (by ${outputEl.value.length - 140}
                    characters). You'll probably want to make it shorter.`;
        } else {
            warningEl.innerHTML = '';
        }
    }

    store.subscribe(update);

    update();
}

document.addEventListener('DOMContentLoaded', () => {
    const store = createStore(reducer);
    setupHeadControl(store);
    setupLengthControl(store);
    setupOutputTypeControl(store);
    setupOutput(store);
});
