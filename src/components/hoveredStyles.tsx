import React from 'react';

interface HoveredStylesProps {
	className: string;
}

const HoveredStyles: React.FC<HoveredStylesProps> = ({ className }) => {
	return (
		<>
			<div>
				<span className={`absolute h-[35px] w-[1px] top-[20px] left-[20px] ${className}`}></span>
				<span className={`absolute w-[35px] h-[1px] top-[20px] left-[20px] ${className}`}></span>
			</div>
			<div>
				<span className={`absolute h-[35px] w-[1px] top-[20px] right-[20px] ${className}`}></span>
				<span className={`absolute w-[35px] h-[1px] top-[20px] right-[20px] ${className}`}></span>
			</div>
			<div>
				<span className={`absolute h-[35px] w-[1px] bottom-[20px] left-[20px] ${className}`}></span>
				<span className={`absolute w-[35px] h-[1px] bottom-[20px] left-[20px] ${className}`}></span>
			</div>
			<div>
				<span className={`absolute h-[35px] w-[1px] bottom-[20px] right-[20px] ${className}`}></span>
				<span className={`absolute w-[35px] h-[1px] bottom-[20px] right-[20px] ${className}`}></span>
			</div>
		</>
	);
};

export default HoveredStyles;
