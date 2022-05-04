import * as React from "react";
import Link from "next/link";

const Header = () => {
	return (
		<div className='flex pa1 justify-between nowrap orange'>
			<div className='flex flex-fixed black'>
				<Link href='/' className='no-underline black'>
					<a>
						<div className='fw7 mr1'>Hacker News</div>
					</a>
				</Link>
				<Link href='/' className='ml1 no-underline black'>
					<a>new</a>
				</Link>
				<div className='ml1'>|</div>
				<Link href='/create' className='ml1 no-underline black'>
					<a>submit</a>
				</Link>
			</div>
		</div>
	);
};

export default Header;
