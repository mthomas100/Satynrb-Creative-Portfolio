import React from 'react';
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';

function createPatchFrom(value) {
  console.log(value);
  return PatchEvent.from(value === '' ? unset() : set(value));
}

function charsLeft(val) {
    return val;
}

export default function CharactersLeft({ type, value, onChange, inputComponent }) {
    console.log("i work");
  return (
    <div>
      <h2>
        {value ? charsLeft(value) : ''}
      </h2>
      <input
        type={type.name}
        value={value}
        onChange={(event) => onChange(createPatchFrom(event.target.value))}
        ref={inputComponent}
      />
    </div>
  );
}

CharactersLeft.focus = function () {
  this._inputElement.focus();
};
