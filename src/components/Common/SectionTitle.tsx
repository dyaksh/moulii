import React from 'react';

interface SectionTitleProps {
  title: string;
  paragraph: string; // This prop only accepts strings
  mb?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, paragraph, mb }) => {
  return (
    <div className={`mb-${mb}`}>
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="mt-4 text-base text-gray-600 dark:text-gray-300">{paragraph}</p> {/* Use a paragraph element for the string */}
    </div>
  );
};

export default SectionTitle;
