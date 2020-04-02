import React from 'react';
import PropTypes from 'prop-types';
import Box from '../../../../common/src/components/Box';
import Text from '../../../../common/src/components/Text';
import Heading from '../../../../common/src/components/Heading';
import Container from '../../../../common/src/components/UI/Container';
import EnSavoirPlus from '../../../containers/Saas/Contact/EnSavoirPlus';

import {
  SkillItem,
  SkillDetails,

  SkillAbout,
} from './skill.style';

const FinancementSection = ({
  sectionWrapper,
  secTitleWrapper,
  secTitle,
  secDescription,
  row,
  col,
  choix,
  skillTitle,
  skillDescription,
}) => {
  return (
    <Box {...sectionWrapper} as="section" id="financement">
      <Container noGutter mobileGutter width="1200px">
        <Box {...secTitleWrapper}>
          <Heading {...secTitle} content="Le financement Pamaga Car" />
          <Text {...secDescription} content={
          <>
            <p style={{color:'#ffffff'}}>En moyenne, un véhicule neuf perd près de 25% de sa valeur sa première année de circulation.</p>
            <p style={{color:'#ffffff'}} > En choisissant le financement, vous vous offrez un nouveau véhicule et vous mensualisez vos
            dépenses. Vos budgets sont ainsi maîtrisés. Pour plus de liberté, vous pouvez opter pour l’option
            sans apport et ainsi préserver vos économies.</p>

            <span style={{color:'#ffffff', fontWeight:'700',}}>Comparez nos différentes offres de financement.</span>

          </>
          }/>
        </Box>

        <Box {...row}>
            <Box {...col} key={`financement-item-1`}>
              <SkillItem>
                <SkillDetails>
                  <SkillAbout>
                    <Heading content="LOA" {...skillTitle} />
                    <Text content={
                      <>
                        <ul>
                          <li>
                          - Vous aimez changer de voiture régulièrement
                          </li>
                          <li>
                          - Vous souhaitez bénéficier d’une garantie tous le long de votre usage du véhicule
                          </li>
                          <li>
                          - Vous ne souhaitez pas vous occuper de la revente de votre véhicule
                          </li>
                          <p>Avec l’option LOA, c’est simple, vous pouvez garder, changer ou revendre votre véhicule. C’est
                          vous qui décidez comment vous souhaitez mettre fin au contrat.</p>
                        </ul>
                      </>

                    } {...skillDescription} />
                  </SkillAbout>
                </SkillDetails>
              </SkillItem>
            </Box>
            <Box {...col} key={`financement-item-2`}>
              <SkillItem>
                <SkillDetails>
                  <SkillAbout>
                    <Heading content="Nos modes de financement" {...skillTitle} />
                    <Text content={
                      <>
                      <ul>
                        Pamaga Car vous propose des formules adaptées à tous les besoins.
                        <li>
                          - avec ou sans apport
                        </li>
                        <li>
                          - Montant des mensualités
                        </li>
                        <li>
                          - Durée du contrat
                        </li>
                        <li>
                          - Kilométrage annuel
                        </li>
                      </ul>
                        <p>
                        <strong>Vous avez le choix entre :</strong>
                        </p>
                          <Box {...choix} style={{boxShadow:'0.521px 2.954px 30px 0px rgba(101, 106, 160, 0.1)'}}>
                          <p><strong>Un crédit classique</strong></p>
                          Devenez propriétaire en optant pour des mensualités fixes
                          <EnSavoirPlus id="enSavoirPlus1"/>
                          </Box>
                          <Box {...choix} style={{boxShadow:'0.521px 2.954px 30px 0px rgba(101, 106, 160, 0.1)'}}>
                          <p><strong>Un crédit flexible</strong></p>
                          Devenez propriétaire en ne payant que l’usage de votre véhicule.<br /> Vos mensualités sont adaptées
                          à votre mode de vie, nous vous proposons une solution flexible et économique.<br /> Pour plus de
                          transparence, nous fixons la valeur de votre véhicule en fin de contrat dès la signature du contrat.
                          En fin de contrat vous avez le choix entre plusieurs options.
                          <EnSavoirPlus id="enSavoirPlus2"/>
                          </Box>
                      </>
                    } {...skillDescription} />
                  </SkillAbout>
                </SkillDetails>
              </SkillItem>
            </Box>
        </Box>
      </Container>
    </Box>
  );
};

FinancementSection.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  secTitle: PropTypes.object,
  secDescription: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  skillTitle: PropTypes.object,
  skillDescription: PropTypes.object,
  skillSuccessRate: PropTypes.object,
  successRateText: PropTypes.object,
};

FinancementSection.defaultProps = {
  sectionWrapper: {
    pt: ['60px', '80px', '100px', '110px', '140px'],
    pb: ['100px', '110px', '110px', '120px', '140px'],
    bg: '#ef4923',
  },
  secTitleWrapper: {
    mb: ['20px', '20px', '3px', '40px', '50px'],
    textAlign:'center',
  },
  secTitle: {
    fontSize: ['22px', '26px', '26px', '30px', '30px'],
    fontWeight: '700',
    color: '#fff!important',
    lineHeight: '1.34',
    mb: ['15px', '18px', '18px', '20px', '20px'],
    textAlign: 'center',
  },
  secDescription: {
    fontSize: ['15px', '16px'],
    fontWeight: '400',
    color: '#ffffff!important',
    lineHeight: '1.5',
    mb: '0',
    textAlign: 'center',
    width: '900px',
    maxWidth: '100%',
    ml: 'auto',
    mr: 'auto',
  },
  row: {
    flexBox: false,
    flexWrap: 'wrap',
    ml: ['-15px', '-15px', '-15px', '-25px', '-25px'],
    mr: ['-15px', '-15px', '-15px', '-25px', '-25px'],
  },
  col: {
    maxWidth:'900px',
    width: '100%',
    pl: ['15px', '15px', '15px', '25px', '25px'],
    pr: ['15px', '15px', '15px', '25px', '25px'],
    mb: ['30px', '30px', '30px', '50px', '50px'],
    textAlign: 'left',
    mr:'auto',
    ml:'auto',
  },
  choix:{
    padding:'20px',
    mb:'20px',
    backgroundColor:' #fff',
    borderRadius: '10px',
    },
  skillTitle: {
    fontSize: ['16px', '18px', '18px', '20px', '20px'],
    fontWeight: '600',
    color: '#302b4e',
    mb: '12px',
    textAlign: 'center'
  },
  skillDescription: {
    fontSize: ['15px', '15px', '15px', '16px', '16px'],
    fontWeight: '400',
    color: '#43414e',
    lineHeight: '1.5',
    mb: '0',
    textAlign: 'left'
  },
  skillSuccessRate: {
    fontSize: ['15px', '15px', '14px', '15px', '16px'],
    fontWeight: '400',
    color: '#302b4e',
    lineHeight: '1.5',
    mb: '0',
  },
  successRateText: {
    ml: '.3em',
    display: ['none', 'none', 'none', 'none', 'inline-block'],
  },
};

export default FinancementSection;
