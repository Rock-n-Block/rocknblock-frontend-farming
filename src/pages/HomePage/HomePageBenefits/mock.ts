import { BenefitsI } from '../../../types';
import iconTvl from '../../../assets/img/farming/icon-tvl.png';
import iconApy from '../../../assets/img/farming/icon-apy.png';
import iconApr from '../../../assets/img/farming/icon-apr.png';

export const benefits: BenefitsI[] = [
    {
        icon: iconTvl,
        title: 'Total Value Locked (TVL)',
        description:
            'TVL is a parametric value that measures crypto locked in DeFi lending and other marketplaces. Tracking the total value of cryptocurrencies locked in smart contracts of various platforms provides a complete overview of their performance. '
    },
    {
        icon: iconApy,
        title: 'Annual Percentage Yield (APY)',
        description:
            'It represents the annual rate of return imposed on borrowers and paid to providers subsequently.'
    },
    {
        icon: iconApr,
        title: 'Annual Percentage Rate (APR)',
        description:
            'It represents the annual rate of return imposed on the capital borrowers but paid to the capital providers.'
    }
];
