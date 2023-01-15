import React from 'react';

export default function Field(props) {
  return (
      <input
      className={props.className}
      maxLength={props.maxLength}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      />
  )
}
