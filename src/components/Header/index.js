import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Nave } from './styled';

export default function Header() {
  return (
    <Nave>

    <a href="">
<FaHome />
    </a>

    <a href="">
<FaUserAlt />
    </a>

    <a href="">
<FaSignInAlt />
    </a>

    </Nave>
  );
}
