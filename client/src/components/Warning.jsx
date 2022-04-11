import React, { Children } from 'react'
import { AiOutlineWarning } from "react-icons/ai";

import st from './warning.module.scss'

function Warning({children}) {
    console.log('warning');
  return (
      <div className={st.warning}>
          <AiOutlineWarning className={st.ico} size={25} />
          <div className={st.text}>{children}</div>
      </div>
  )
}

export default Warning