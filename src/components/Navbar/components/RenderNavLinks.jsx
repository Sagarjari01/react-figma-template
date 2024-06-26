import React, { useState } from 'react'
import { HOME_TITLES } from '../../../CONSTANTS';
import { scrollToSection } from '../../../utils';

const RenderNavLinks = () => {
  const [selected,setSelected] = useState("hero")
  const handleClick = (id) => {
    setSelected(id);
    scrollToSection(id);
  };
    return (
      <div className={`flex flex-col space-y-8 text-2xl items-start p-8 `}>
        {HOME_TITLES.map((section) => {
          return (
            <button className={`${selected===section.id ? "text-[#D29A5A]":"text-white"}`} key={section.id} onClick={() => handleClick(section.id)}>
              {section.title}
            </button>
          );
        })}
      </div>
    );
  };

export default RenderNavLinks