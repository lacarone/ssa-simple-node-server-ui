import {
    Image
} from '@mantine/core';
import Logo from '../../public/images/SSA-Logo.png';


function SSALogo(props: any) {

    return (
        <div style={{ width: 150, marginLeft: 'auto', marginRight: 'auto' }}>
            <Image
                radius="xs"
                src={Logo}
                alt="SSA Logo"
            />
        </div>
    )
}


export default SSALogo;