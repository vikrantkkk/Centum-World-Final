import React from 'react'
import { coreTeam } from '../constants'
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const Coreteam = () => {
  return (
    <>
      <div className={`bg-black-100 rounded-[20px] overflow-x-auto`}>
        <div
          className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[200px]`}
        >
          <div className="flex sm:flex-row sm:justify-between flex-col gap-2">
            <p className={`${styles.sectionSubText} ${styles.heroSubText}`}>
              Core Team
            </p>
          </div>
        </div>
        <div
          className="-mt-20 pb-14"
          style={{ overflowX: "auto", whiteSpace: "nowrap" }}
        >
          <div className={`flex ${styles.paddingX} gap-10`}>
            {coreTeam.map((item, index) => (
              <img src={item.image} className="w-80 h-64"/>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(Coreteam, "");