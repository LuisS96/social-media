import { FC, useRef } from 'react';

export const ContentEditable: FC<{ placeholder?: string }> = ({
  placeholder = `What's new?!`,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={contentRef}
      id='contentEditable'
      className='whitespace-pre-wrap select-text break-words outline-none w-full relative py-1 text-slate-500 before:empty:content-[attr(data-placeholder)] before:empty:text-slate-300 before:cursor-text leading-5'
      style={{ wordBreak: 'break-word' }}
      contentEditable
      spellCheck
      role='textbox'
      data-placeholder={placeholder}
    />
  );
};
