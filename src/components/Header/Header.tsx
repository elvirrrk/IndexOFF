import {ReactElement} from 'react';
import './Header.less';
import {Container, Link} from '@chakra-ui/react';

export function Header(): ReactElement {
  return(
    <Container className='headerContainer' bg='gray.50' w='100%' height={91}>
      <Link className='logo' href='#'>IndexOFF</Link>
    </Container>
  )
}