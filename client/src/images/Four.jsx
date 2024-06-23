import React from "react";

const Four = (props) => {
  const { height, width, colour } = props;
  return (
    <svg viewBox="0 0 384 512" fill={colour} height={height} width={width}>
      <path d="M189 77.6c7.5-16 .7-35.1-15.3-42.6s-35.1-.7-42.6 15.3L3 322.4c-4.7 9.9-3.9 21.5 1.9 30.8S21 368 32 368h224v80c0 17.7 14.3 32 32 32s32-14.3 32-32v-80h32c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32V160c0-17.7-14.3-32-32-32s-32 14.3-32 32v144H82.4L189 77.6z" />
    </svg>
  );
};

export default Four;
