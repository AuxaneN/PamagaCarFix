import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import CountUp from 'react-countup';
import Box from '../../../../common/src/components/Box';
import Card from '../../../../common/src/components/Card';
import Text from '../../../../common/src/components/Text';
import Image from '../../../../common/src/components/Image';
import Heading from '../../../../common/src/components/Heading';
import Button from '../../../../common/src/components/Button';
import FeatureBlock from '../../../../common/src/components/FeatureBlock';
import Container from '../../../../common/src/components/UI/Container';

import Icon1 from '../../../../common/src/assets/image/saas/icons/handshake.png';
import Icon2 from '../../../../common/src/assets/image/saas/icons/traffic.png';
import Icon3 from '../../../../common/src/assets/image/saas/icons/happy.png';


import Contact from '../../../containers/Saas/Contact/ContactDevis';

import WorkHistoryWrapper, { CounterUpArea } from './workHistory.style';

const WorkHistory = ({ row, col, cardStyle, title, description, btnStyle }) => {
  return (
    <WorkHistoryWrapper id="workHistorySection">
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <FeatureBlock
              title={
                <Heading
                  content="PAMAGA CAR c’est : "
                  {...title}
                />
              }
            />
            {/* <Image src={client} alt="Clients heureux" className="bg"/> */}
          </Box>
          <Box className="col" {...col}>
            <CounterUpArea>
              <Card className="card" {...cardStyle}>
                <Image src={Icon1} alt="50 ventes par mois"/>
                <h3>
                  <CountUp start={0} end={50}/>
                </h3>
                <Text content="ventes par mois" />
              </Card>
              <Card className="card" {...cardStyle}>
                <Image src={Icon2} alt="100 véhicules vendus"/>
                <h3>
                  <CountUp start={0} end={100} duration={5}/>
                </h3>
                <Text content="véhicules vendus" />
              </Card>
              <Card className="card" {...cardStyle}>
                <Image src={Icon3} alt="100% véhicules vendus de clients satisfaits"/>
                <h3>
                  <CountUp start={0} end={100} duration={5}/>%
                </h3>
                <Text content="de clients satisfaits" />
              </Card>
              <Card className="card" {...cardStyle}>
                <Contact content="et toujours plus !" id="devis2" />
              </Card>
            </CounterUpArea>
          </Box>
        </Box>
      </Container>
    </WorkHistoryWrapper>
  );
};

// WorkHistory style props
WorkHistory.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  cardStyle: PropTypes.object,
};

// WorkHistory default style
WorkHistory.defaultProps = {
  // WorkHistory section row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  // WorkHistory section col default style
  col: {
    pr: '15px',
    pl: '15px',
    width: [1, 1, 1 / 2, 1 / 2],
    flexBox: true,
    alignSelf: 'center',
  },
  // Card default style
  cardStyle: {
    p: ['20px 20px', '30px 20px', '30px 20px', '53px 40px'],
    borderRadius: '10px',
    boxShadow: '0px 8px 20px 0px rgba(16, 66, 97, 0.07)',
  },
  // WorkHistory section title default style
  title: {
    fontSize: ['30px!important', '30px!important', '40px!important', '50px!important'],
    lineHeight: '1.5',
    fontWeight: '300',
    color: '#fff!important',
    letterSpacing: '-0.025em',
    mb: '20px',
    
  },
  // WorkHistory section description default style
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '33px',
  },
  // Button default style
  btnStyle: {
    mt:'20px',
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
  },
};

export default WorkHistory;
