import logotypeCompound from '../../../assets/img/farming/logo-compound.png';
import logotypeYearn from '../../../assets/img/farming/logo-yearn.png';
import logotypeDao from '../../../assets/img/farming/logo-dao.png';
import logotypeUniswap from '../../../assets/img/farming/logo-uniswap.png';
import iconCompound from '../../../assets/img/farming/icon-compound.png';
import iconYearn from '../../../assets/img/farming/icon-yearn.png';
import iconDao from '../../../assets/img/farming/icon-dao.png';
import iconUniswap from '../../../assets/img/farming/icon-uniswap.png';
import { PlatformsI } from '../../../types';

export const platforms: PlatformsI[] = [
    {
        logotypeName: logotypeCompound,
        logotype: iconCompound,
        name: 'Compound'
    },
    {
        logotypeName: logotypeYearn,
        logotype: iconYearn,
        name: 'Yearn'
    },
    {
        logotypeName: logotypeDao,
        logotype: iconDao,
        name: 'Dao Maker'
    },
    {
        logotypeName: logotypeUniswap,
        logotype: iconUniswap,
        name: 'Uniswap'
    }
];
