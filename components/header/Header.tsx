import Image from 'next/image';
import { FC } from 'react';
import { StyledHeader } from './Header.Styled';

const Header: FC = () => {
	return (
		<StyledHeader>
			<Image src='/images/logo.svg' alt='' width='100%' height='25' />
			<Image src='/images/shopping-cart.svg' alt='' width='54' height='54' />
		</StyledHeader>
	);
};

export default Header;
