import React from 'react';

function Info() {
  return (
    <div>
      <iframe
        title="Work Management Tool"
        src={`${process.env.PUBLIC_URL}/info.html`}
        width="100%"
        height="1000px"
        border = "none" /* Remove iframe border */
      />
    </div>
  );
}

export default Info;
